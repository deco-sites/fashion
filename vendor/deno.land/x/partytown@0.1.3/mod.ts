import { Plugin } from "$fresh/server.ts";

import { partytownSnippet } from "https://esm.sh/@builder.io/partytown@0.7.1/integration";

import { copyLibFiles } from "./copyFiles.ts";
import { readForward } from "./shared.ts";

interface Options {
  copyFiles?: boolean;
}

const partytown = (
  { copyFiles }: Options = {},
): Plugin => {
  if (copyFiles !== false) {
    copyLibFiles().catch(console.error);
  }

  return {
    name: "partytown",
    entrypoints: {
      "main": `data:application/javascript,export default function(state){
      window.partytown = state;
      ${partytownSnippet()}
    }`,
    },
    render(ctx) {
      ctx.render();

      return {
        scripts: [{ entrypoint: "main", state: readForward() }],
      };
    },
  };
};

export default partytown;
