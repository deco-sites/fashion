import { Handlers } from "$fresh/server.ts";
import { Cookie, setCookie } from "std/http/mod.ts";

const proxyTo = `https://bravtexfashionstore.vtexcommercestable.com.br/api`;

const hopByHop = [
  "Keep-Alive",
  "Transfer-Encoding",
  "TE",
  "Connection",
  "Trailer",
  "Upgrade",
  "Proxy-Authorization",
  "Proxy-Authenticate",
];

/**
 * TODO: Remove this function once this PR is merged:
 * https://github.com/denoland/deno_std/pull/3152/files
 */
function parseSetCookie(value: string): Cookie | null {
  const attrs = value
    .split(";")
    .map((attr) => {
      const [key, ...values] = attr.trim().split("=").map((keyOrValue) =>
        keyOrValue.trim()
      );
      return [key, values.join("=")];
    });
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

function getSetCookies(headers: Headers): Cookie[] {
  if (!headers.has("set-cookie")) {
    return [];
  }
  // deno-lint-ignore no-explicit-any
  return [...(headers as any).entries()]
    .filter(([key]) => key === "set-cookie")
    .map(([_, value]) => value)
    /** Parse each `set-cookie` header separately */
    .map(parseSetCookie)
    /** Skip empty cookies */
    .filter(Boolean) as Cookie[];
}

const proxy: Handlers["GET"] = async (req, ctx) => {
  const url = new URL(req.url);
  const headers = new Headers(req.headers);

  hopByHop.forEach((h) => headers.delete(h));

  const response = await fetch(`${proxyTo}/${ctx.params.catchall}`, {
    headers,
    redirect: "manual",
    method: req.method,
    body: req.body,
  });

  // Change cookies domain
  const responseHeaders = new Headers(response.headers);
  const cookies = getSetCookies(responseHeaders);
  responseHeaders.delete("set-cookie");
  for (const cookie of cookies) {
    setCookie(responseHeaders, { ...cookie, domain: url.hostname });
  }

  return new Response(response.body, {
    status: response.status,
    headers: responseHeaders,
  });
};

export const handler: Handlers = {
  GET: proxy,
  HEAD: proxy,
  POST: proxy,
  PUT: proxy,
  DELETE: proxy,
  OPTIONS: proxy,
  PATCH: proxy,
};
