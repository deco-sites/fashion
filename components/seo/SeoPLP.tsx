import ScriptLDJson from "$store/components/seo/ScriptLDJson.tsx";
import type { LoaderReturnType } from "$live/std/types.ts";
import type { ProductListingPage } from "$live/std/commerce/types.ts";

import BaseSeo from "./SeoBase.tsx";

export interface Props {
  page: LoaderReturnType<ProductListingPage>;
  title?: string;
  description?: string;
  url?: string;
  imageUrl?: string;
  themeColor?: string;
}

function SeoPLP({ page, ...baseSeo }: Props) {
  const breadcrumbList = page?.breadcrumb;

  return (
    <>
      <BaseSeo {...baseSeo} />
      <ScriptLDJson {...breadcrumbList} />
    </>
  );
}

export default SeoPLP;
