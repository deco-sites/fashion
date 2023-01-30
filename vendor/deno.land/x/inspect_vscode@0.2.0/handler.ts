import { search } from "./search.ts";

export default async function inspectHandler(
  inspectPath = "/_live/inspect/",
  req: Request,
) {
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
}

function vsCodeLinkFromResult(file: string, line: number, column: number) {
  return `vscode://file/${file}:${line}:${column}`;
}
