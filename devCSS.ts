import { cyan } from "std/fmt/colors.ts";
import postcss, { PluginCreator } from "npm:postcss@8.4.22";
import autoprefixer from "npm:autoprefixer@10.4.14";
import tailwindcss from "npm:tailwindcss@3.3.1";
import cssnano from "npm:cssnano@6.0.0";

import config from "./tailwind.config.ts";

interface Options {
  from: string;
  to: string;
}

const processor = postcss([
  (tailwindcss as PluginCreator)(config),
  autoprefixer,
  cssnano({ preset: ["default", { cssDeclarationSorter: false }] }),
]);

export const dev = async ({ from, to }: Options) => {
  const start = performance.now();

  const css = await Deno.readTextFile(from);
  const content = await processor.process(css, { from, to });
  await Deno.writeTextFile(to, content.css);

  console.info(
    `${cyan("TailwindCSS")} generation took: ${
      (performance.now() - start).toFixed(0)
    }ms`,
  );
};
