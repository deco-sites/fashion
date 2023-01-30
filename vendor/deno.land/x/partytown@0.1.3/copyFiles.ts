import { ensureDir, exists } from "https://deno.land/std@0.164.0/fs/mod.ts";
import { join } from "https://deno.land/std@0.164.0/path/mod.ts";

const partytownUrlPrefix = "https://unpkg.com/@builder.io/partytown@0/lib/";
const partytownFiles = [
  "partytown.js",
  "partytown-sw.js",
  "partytown-media.js",
  "partytown-atomics.js",
];
const partytownDebugFiles = [
  ...partytownFiles.map((filename) => `/debug/${filename}`),
  "/debug/partytown-sandbox-sw.js",
  "/debug/partytown-ww-atomics.js",
  "/debug/partytown-ww-sw.js",
];

const fetchFileText = async (file: string) => {
  const response = await fetch(file);

  if (!response.ok) {
    throw new Error(`Error while fetching ${file}`);
  }

  return response.text();
};

const fetchAndWriteFiles = (filenames: string[], dest: string) =>
  Promise.all(filenames.map(async (filename) => {
    const remoteUrl = `${partytownUrlPrefix}/${filename}`;
    const localUrl = join(dest, filename);

    const pathExists = await exists(localUrl);

    if (pathExists) {
      return;
    }

    const txt = await fetchFileText(remoteUrl);

    return Deno.writeTextFile(localUrl, txt, { create: true });
  }));

export const copyLibFiles = async () => {
  const fullPathDest = join(Deno.cwd(), "static/~partytown");
  await ensureDir(fullPathDest);
  await fetchAndWriteFiles(partytownFiles, fullPathDest);

  const debugFolder = join(fullPathDest, "./debug/");
  await ensureDir(debugFolder);
  await fetchAndWriteFiles(partytownDebugFiles, fullPathDest);
};
