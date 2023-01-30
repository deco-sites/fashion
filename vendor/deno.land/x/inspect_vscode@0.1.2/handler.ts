import { Handlers } from "$fresh/server.ts";
import { search } from "./search.ts";

const handler: Handlers = {
  async POST(req: Request, ctx: any) {
    const inspectPath = ctx?.state?.path ?? "/_live/inspect/";
    const outerHTML = await req.text();
    const url = new URL(req.url);
    const manifestKey = "./" + url.pathname.replace(inspectPath, "");
    const { fullpath, lineNumber, column } = await search(
      outerHTML,
      manifestKey,
    );
    const link = vsCodeLinkFromResult(fullpath, lineNumber, column);

    return new Response(link, {
      headers: { "Content-Type": "text/html" },
    });
  },
};

export default handler;

function vsCodeLinkFromResult(file: string, line: number, column: number) {
  return `vscode://file/${file}:${line}:${column}`;
}
