import { Handlers } from "$fresh/server.ts";

import {
  DOMParser,
  initParser,
} from "https://deno.land/x/deno_dom@v0.1.36-alpha/deno-dom-wasm-noinit.ts";

export const handler: Handlers = {
  GET: async (req, ctx) => {
    const html = await (await fetch(new URL(req.url).origin)).text();
    await initParser();
    const doc = new DOMParser().parseFromString(html, "text/html");
    const links = doc?.getElementsByTagName("a") ?? [];
    const hrefs = new Set();
    hrefs.add("/");
    for (const link of links) {
      hrefs.add(link.getAttribute("href"));
    }
    const srcs = new Set<string>();
    for (const elem of doc?.getElementsByTagName("*") ?? []) {
      if (elem.hasAttribute("src")) {
        srcs.add(elem.getAttribute("src")?.trim() ?? "/");
      }
    }
    for (const src of srcs) {
      try {
        console.log("calling...", src);
        const response = await fetch(src, { method: "HEAD" }); // cry cloudflare
      } catch (err) {
        // nothing to do...
      }
    }
    return ctx.render({ links: [...hrefs] });
  },
};

type Props = {
  links: string[];
};

export default function ({ data }: { data: Props }) {
  console.log(data.links);
  return (
    <div>
      {data.links.map((elem) => (
        <div>
          <iframe style={{ width: "100vw", height: "100vh" }} src={elem} />
        </div>
      ))}
    </div>
  );
}
