export const getImageInCorrectRatio = (
  url = "",
  width: number,
  height: number,
) => {
  if (!url.includes("vteximg.com.br")) return url;
  return url.replace(
    /\/ids\/([0-9]*)\//,
    `/ids/$1-${width}-${height}/`,
  );
};
