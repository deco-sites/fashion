import { toProduct } from "$live/std/commerce/vtex/transform.ts";
import type { Product } from "$live/std/commerce/types.ts";
import type { LoaderFunction } from "$live/std/types.ts";

// import { vtex } from "../clients/instances.ts";

export interface Props {
  /** @description query to use on search */
  query: string;
  /** @description total number of items to display */
  count: number;
}

/**
 * @title Product list loader
 * @description Usefull for shelves and static galleries.
 */
const productListLoader: LoaderFunction<Props, Product[]> = async (
  _req,
  ctx,
  props,
) => {
  const count = props.count ?? 12;
  const query = props.query || "";

  // const searchArgs = {
  //   query,
  //   page: 0,
  //   count,
  // };

  // const account = ctx.state.global.vtexconfig.account;
  const account = "lojaoffpremium";
  const baseUrl = `https://vtex-search-proxy.global.ssl.fastly.net/${account}`;
  const link = `${baseUrl}/${query}?_from=0&_to=${count - 1}`;
  const searchResponse = await fetch(
    `${link}`,
  ).then((r) => r.json());

  // search prodcuts on VTEX. Feel free to change any of these parameters
  // const productsResult = await vtex.search.products(searchArgs);
  const legacyProducts = searchResponse;
  // console.log(">>>>>>>>>>>>>>", searchResponse);

  // Transform VTEX product format into schema.org's compatible format
  // If a property is missing from the final `products` array you can add
  // it in here
  const products = legacyProducts.map((p) =>
    toProduct(p, p.items[0], 0, "Legacy")
  );
  return {
    data: products as Product[],
  };
};

export default productListLoader;
