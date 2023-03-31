import { Handlers } from "$fresh/server.ts";
import { getSetCookies, setCookie } from "std/http/mod.ts";

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

const proxy: Handlers["GET"] = async (req, ctx) => {
  const url = new URL(req.url);
  const headers = new Headers(req.headers);

  hopByHop.forEach((h) => headers.delete(h));

  const qs = url.searchParams.toString();

  const response = await fetch(
    `${proxyTo}/${ctx.params.catchall}?${qs}`,
    {
      headers,
      redirect: "manual",
      method: req.method,
      body: req.body,
    },
  );

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
