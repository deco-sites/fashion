// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.
// Structured similarly to Go's cookie.go
// https://github.com/golang/go/blob/master/src/net/http/cookie.go
// This module is browser compatible.

import { assert } from "../_util/assert.ts";
import { toIMF } from "../datetime/mod.ts";

export interface Cookie {
  /** Name of the cookie. */
  name: string;
  /** Value of the cookie. */
  value: string;
  /** Expiration date of the cookie. */
  expires?: Date;
  /** Max-Age of the Cookie. Max-Age must be an integer superior or equal to 0. */
  maxAge?: number;
  /** Specifies those hosts to which the cookie will be sent. */
  domain?: string;
  /** Indicates a URL path that must exist in the request. */
  path?: string;
  /** Indicates if the cookie is made using SSL & HTTPS. */
  secure?: boolean;
  /** Indicates that cookie is not accessible via JavaScript. */
  httpOnly?: boolean;
  /**
   * Allows servers to assert that a cookie ought not to
   * be sent along with cross-site requests.
   */
  sameSite?: "Strict" | "Lax" | "None";
  /** Additional key value pairs with the form "key=value" */
  unparsed?: string[];
}

const FIELD_CONTENT_REGEXP = /^(?=[\x20-\x7E]*$)[^()@<>,;:\\"\[\]?={}\s]+$/;

function toString(cookie: Cookie): string {
  if (!cookie.name) {
    return "";
  }
  const out: string[] = [];
  validateName(cookie.name);
  validateValue(cookie.name, cookie.value);
  out.push(`${cookie.name}=${cookie.value}`);

  // Fallback for invalid Set-Cookie
  // ref: https://tools.ietf.org/html/draft-ietf-httpbis-cookie-prefixes-00#section-3.1
  if (cookie.name.startsWith("__Secure")) {
    cookie.secure = true;
  }
  if (cookie.name.startsWith("__Host")) {
    cookie.path = "/";
    cookie.secure = true;
    delete cookie.domain;
  }

  if (cookie.secure) {
    out.push("Secure");
  }
  if (cookie.httpOnly) {
    out.push("HttpOnly");
  }
  if (typeof cookie.maxAge === "number" && Number.isInteger(cookie.maxAge)) {
    assert(
      cookie.maxAge >= 0,
      "Max-Age must be an integer superior or equal to 0",
    );
    out.push(`Max-Age=${cookie.maxAge}`);
  }
  if (cookie.domain) {
    validateDomain(cookie.domain);
    out.push(`Domain=${cookie.domain}`);
  }
  if (cookie.sameSite) {
    out.push(`SameSite=${cookie.sameSite}`);
  }
  if (cookie.path) {
    validatePath(cookie.path);
    out.push(`Path=${cookie.path}`);
  }
  if (cookie.expires) {
    const dateString = toIMF(cookie.expires);
    out.push(`Expires=${dateString}`);
  }
  if (cookie.unparsed) {
    out.push(cookie.unparsed.join("; "));
  }
  return out.join("; ");
}

/**
 * Validate Cookie Name.
 * @param name Cookie name.
 */
function validateName(name: string | undefined | null) {
  if (name && !FIELD_CONTENT_REGEXP.test(name)) {
    throw new TypeError(`Invalid cookie name: "${name}".`);
  }
}

/**
 * Validate Path Value.
 * See {@link https://tools.ietf.org/html/rfc6265#section-4.1.2.4}.
 * @param path Path value.
 */
function validatePath(path: string | null) {
  if (path == null) {
    return;
  }
  for (let i = 0; i < path.length; i++) {
    const c = path.charAt(i);
    if (
      c < String.fromCharCode(0x20) || c > String.fromCharCode(0x7E) || c == ";"
    ) {
      throw new Error(
        path + ": Invalid cookie path char '" + c + "'",
      );
    }
  }
}

/**
 * Validate Cookie Value.
 * See {@link https://tools.ietf.org/html/rfc6265#section-4.1}.
 * @param value Cookie value.
 */
function validateValue(name: string, value: string | null) {
  if (value == null || name == null) return;
  for (let i = 0; i < value.length; i++) {
    const c = value.charAt(i);
    if (
      c < String.fromCharCode(0x21) || c == String.fromCharCode(0x22) ||
      c == String.fromCharCode(0x2c) || c == String.fromCharCode(0x3b) ||
      c == String.fromCharCode(0x5c) || c == String.fromCharCode(0x7f)
    ) {
      throw new Error(
        "RFC2616 cookie '" + name + "' cannot have '" + c + "' as value",
      );
    }
    if (c > String.fromCharCode(0x80)) {
      throw new Error(
        "RFC2616 cookie '" + name + "' can only have US-ASCII chars as value" +
          c.charCodeAt(0).toString(16),
      );
    }
  }
}

/**
 * Validate Cookie Domain.
 * See {@link https://datatracker.ietf.org/doc/html/rfc6265#section-4.1.2.3}.
 * @param domain Cookie domain.
 */
function validateDomain(domain: string) {
  if (domain == null) {
    return;
  }
  const char1 = domain.charAt(0);
  const charN = domain.charAt(domain.length - 1);
  if (char1 == "-" || charN == "." || charN == "-") {
    throw new Error(
      "Invalid first/last char in cookie domain: " + domain,
    );
  }
}

/**
 * Parse cookies of a header
 * @param headers The headers instance to get cookies from
 * @return Object with cookie names as keys
 */
export function getCookies(headers: Headers): Record<string, string> {
  const cookie = headers.get("Cookie");
  if (cookie != null) {
    const out: Record<string, string> = {};
    const c = cookie.split(";");
    for (const kv of c) {
      const [cookieKey, ...cookieVal] = kv.split("=");
      assert(cookieKey != null);
      const key = cookieKey.trim();
      out[key] = cookieVal.join("=");
    }
    return out;
  }
  return {};
}

/**
 * Set the cookie header properly in the headers
 * @param headers The headers instance to set the cookie to
 * @param cookie Cookie to set
 */
export function setCookie(headers: Headers, cookie: Cookie) {
  // Parsing cookie headers to make consistent set-cookie header
  // ref: https://tools.ietf.org/html/rfc6265#section-4.1.1
  const v = toString(cookie);
  if (v) {
    headers.append("Set-Cookie", v);
  }
}

/**
 * Set the cookie header with empty value in the headers to delete it
 * @param headers The headers instance to delete the cookie from
 * @param name Name of cookie
 * @param attributes Additional cookie attributes
 */
export function deleteCookie(
  headers: Headers,
  name: string,
  attributes?: { path?: string; domain?: string },
) {
  setCookie(headers, {
    name: name,
    value: "",
    expires: new Date(0),
    ...attributes,
  });
}

function parseSetCookie(value: string): Cookie | null {
  const attrs = value
    .split(";")
    .map((attr) =>
      attr
        .trim()
        .split("=")
        .map((keyOrValue) => keyOrValue.trim())
    );
  const cookie: Cookie = {
    name: attrs[0][0],
    value: attrs[0][1],
  };

  for (const [key, value] of attrs.slice(1)) {
    switch (key.toLocaleLowerCase()) {
      case "expires":
        cookie.expires = new Date(value);
        break;
      case "max-age":
        cookie.maxAge = Number(value);
        if (cookie.maxAge < 0) {
          console.warn(
            "Max-Age must be an integer superior or equal to 0. Cookie ignored.",
          );
          return null;
        }
        break;
      case "domain":
        cookie.domain = value;
        break;
      case "path":
        cookie.path = value;
        break;
      case "secure":
        cookie.secure = true;
        break;
      case "httponly":
        cookie.httpOnly = true;
        break;
      case "samesite":
        cookie.sameSite = value as Cookie["sameSite"];
        break;
      default:
        if (!Array.isArray(cookie.unparsed)) {
          cookie.unparsed = [];
        }
        cookie.unparsed.push([key, value].join("="));
    }
  }
  if (cookie.name.startsWith("__Secure-")) {
    /** This requirement is mentioned in https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie but not the RFC. */
    if (!cookie.secure) {
      console.warn(
        "Cookies with names starting with `__Secure-` must be set with the secure flag. Cookie ignored.",
      );
      return null;
    }
  }
  if (cookie.name.startsWith("__Host-")) {
    if (!cookie.secure) {
      console.warn(
        "Cookies with names starting with `__Host-` must be set with the secure flag. Cookie ignored.",
      );
      return null;
    }
    if (cookie.domain !== undefined) {
      console.warn(
        "Cookies with names starting with `__Host-` must not have a domain specified. Cookie ignored.",
      );
      return null;
    }
    if (cookie.path !== "/") {
      console.warn(
        "Cookies with names starting with `__Host-` must have path be `/`. Cookie has been ignored.",
      );
      return null;
    }
  }
  return cookie;
}

/**
 * Parse set-cookies of a header
 * @param headers The headers instance to get set-cookies from
 * @return List of cookies
 */
export function getSetCookies(headers: Headers): Cookie[] {
  if (!headers.has("set-cookie")) {
    return [];
  }
  return [...headers.entries()]
    .filter(([key]) => key === "set-cookie")
    .map(([_, value]) => value)
    /** Parse each `set-cookie` header separately */
    .map(parseSetCookie)
    /** Skip empty cookies */
    .filter(Boolean) as Cookie[];
}
