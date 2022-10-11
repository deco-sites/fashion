export default async function VTEXSearchLoader(
  { facets = "", searchParams }: {
    facets?: string;
    searchParams?: URLSearchParams;
  },
) {
  const _res = await fetch(
    `https://vtex-search-proxy.global.ssl.fastly.net/zeedog/${facets}?${
      searchParams?.toString() ?? ""
    }`,
  );
  return await _res.json();
}
