import { Handlers } from "$fresh/server.ts";
import { getSetCookies, setCookie } from "std/http/mod.ts";

const proxyTo = `https://bravtexfashionstore.vtexcommercestable.com.br/api`;

const HOP_BY_HOP = [
  "Keep-Alive",
  "Transfer-Encoding",
  "TE",
  "Connection",
  "Trailer",
  "Upgrade",
  "Proxy-Authorization",
  "Proxy-Authenticate",
];

const proxy: Handlers["GET"] = async (req, ctx) => {
  const url = new URL(req.url);
  const qs = url.searchParams.toString();
  const to = new URL(`${proxyTo}/${ctx.params.catchall}?${qs}`);

  const headers = new Headers(req.headers);
  HOP_BY_HOP.forEach((h) => headers.delete(h));
  headers.set("origin", to.origin);
  headers.set("host", to.host);
  headers.set("x-forwarded-host", url.host);

  const response = await fetch(to, {
    headers,
    redirect: "manual",
    method: req.method,
    body: req.body,
  });

  // Change cookies domain
  const responseHeaders = new Headers(response.headers);
  const cookies = getSetCookies(responseHeaders);
  responseHeaders.delete("set-cookie");

  // Setting cookies on GET requests prevent cache from cdns, slowing down the app
  if (req.method !== "GET") {
    for (const cookie of cookies) {
      setCookie(responseHeaders, { ...cookie, domain: url.hostname });
    }
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
