import { Handlers } from "$fresh/server.ts";
import { fetchSafe } from "deco-sites/std/utils/fetch.ts";
import { FONTS_GSTATIC_ORIGIN } from "$store/sections/Theme/Theme.tsx";

export const handler: Handlers = {
  GET: async (_, ctx) => {
    const { font } = ctx.params;

    const fontUrl = new URL(`/${font}`, FONTS_GSTATIC_ORIGIN);
    const fontResponse = await fetchSafe(fontUrl.href, {
      withProxyCache: true,
    });
    const headers = new Headers();
    copyHeader("content-length", headers, fontResponse.headers);
    copyHeader("content-type", headers, fontResponse.headers);
    copyHeader("content-disposition", headers, fontResponse.headers);
    copyHeader("cache-control", headers, fontResponse.headers);

    return new Response(fontResponse.body, { headers });
  },
};

function copyHeader(headerName: string, to: Headers, from: Headers) {
  const hdrVal = from.get(headerName);
  if (hdrVal) {
    to.set(headerName, hdrVal);
  }
}
