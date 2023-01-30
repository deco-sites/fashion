import { join } from "https://deno.land/std@0.147.0/path/mod.ts";
import Fuse from "https://deno.land/x/fuse@v6.4.1/dist/fuse.esm.min.js";

export async function search(content: string, manifestKey: string) {
  const escaped = content.replace(/>.*/, ">");
  const srcFile = await Deno.readTextFile(manifestKey);
  const srcLines = srcFile.split("\n");
  const fuse = new Fuse(srcLines);
  const [bestResult] = fuse.search(escaped);
  const lineNumber = bestResult.refIndex + 1;
  const column = bestResult.item.search(/\S/) + 1;
  const fullpath = join(Deno.cwd(), manifestKey);

  return { fullpath, lineNumber, column };
}
