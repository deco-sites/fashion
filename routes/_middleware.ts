import { DOMParser } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";

export const handler = [
  async function middleware(req, ctx) {
    const response = await ctx.next();

    const contentType = response.headers.get("content-type");

    if (contentType.includes("text/html")) {
      const text = await response.text();

      const dom = new DOMParser().parseFromString(text, "text/html");

      dom?.querySelectorAll("script:not([src]):not([type])").forEach((node) => {
        (node as HTMLScriptElement).setAttribute("type", "module");
      });

      return new Response(dom?.documentElement?.innerHTML, {
        status: response.status,
        headers: response.headers,
      });
    }

    return response;
  },
];
