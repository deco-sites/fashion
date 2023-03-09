import page from "../live/blocks/page.ts";
import { Resolvable } from "../live/engine/core/resolver.ts";

export interface Page {
  id: number;
  name: string;
  data: Data;
  path: string;
  state: string;
}
export interface Data {
  sections: Section[];
  functions?: Function[];
  loaders?: Function[];
}

export interface Function {
  key: string;
  label: string;
  props?: any;
  uniqueId: string;
}

export interface Section {
  key: string;
  label: string;
  uniqueId: string;
  props?: any;
  type?: string;
}

const pageJSON = JSON.parse(await Deno.readTextFile("./pages.json"));

interface PageSection extends Record<string, any> {
  __resolveType: string;
}

const sectionToPageSection =
  (functionsIndexed: Record<string, Function>) =>
  ({ key, props }: Section): PageSection => {
    let newProps: Record<string, any> = {};
    for (const [key, value] of Object.entries(props ?? {})) {
      if (functionsIndexed[value as string]) {
        const func = functionsIndexed[value as string];
        newProps[key] = {
          ...func.props,
          __resolveType: func.key.replaceAll("functions", "loaders"),
        };
      } else {
        newProps[key] = value;
      }
    }
    return {
      ...newProps,
      __resolveType: key.replaceAll("functions", "loaders"),
    };
  };
const dataToSections = (d: Data): PageSection[] => {
  const functionsIndexed: Record<string, Function> = [
    ...d.functions ?? [],
    ...d.loaders ?? [],
  ]
    .reduce((indexed, f) => {
      return { ...indexed, [`{${f.uniqueId}}`]: f };
    }, {} as Record<string, Function>);

  return d.sections.map(sectionToPageSection(functionsIndexed));
};

const catchAllConfig = "./routes/[...catchall].tsx";

interface AudienceFlag {
  name: string;
  "matcher": {
    "__resolveType": "$live/matchers/MatchAlways.ts";
  };
  routes: {
    [key: string]: {
      "page": {
        "__resolveType": string;
      };
      "__resolveType": "$live/handlers/fresh.ts";
    };
  };
  __resolveType: string;
}

interface CatchAllConfigs {
  handler: {
    flags: AudienceFlag[];
    "__resolveType": "$live/handlers/routesSelection.ts";
  };
  "__resolveType": "resolve";
}

const pageToConfig = (
  c: Record<string, Resolvable>,
  p: Page,
): Record<string, Resolvable> => {
  const pageEntry = {
    sections: dataToSections(p.data),
    "__resolveType": "$live/pages/LivePage.tsx",
  };
  const catchall = c[catchAllConfig] as CatchAllConfigs;
  if (p.state === "published") {
    console.log(p.path);
  }
  const everyone = p.state === "published"
    ? {
      ...catchall.handler.flags[0],
      routes: {
        ...catchall.handler.flags[0].routes,
        [p.path]: {
          "page": {
            "__resolveType": `${p.id}`,
          },
          "__resolveType": "$live/handlers/fresh.ts",
        },
      },
    }
    : catchall.handler.flags[0];
  return {
    ...c,
    [p.id]: pageEntry,
    [catchAllConfig]: {
      ...catchall,
      handler: {
        ...catchall.handler,
        flags: [everyone],
      },
    },
  };
};

const s = (pageJSON as Page[]).reduce((cfg, p) => {
  return pageToConfig(cfg, p);
}, {
  [catchAllConfig]: {
    __resolveType: "resolve",
    handler: {
      flags: [{
        routes: {},
        __resolveType: "$live/flags/everyone.ts",
      }],
      "__resolveType": "$live/handlers/routesSelection.ts",
    },
  },
} as Record<string, Resolvable>);

await Deno.writeTextFile("./pages.parsed.json", JSON.stringify(s));
