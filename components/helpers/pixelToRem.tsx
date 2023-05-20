export default function pixelToRem(
  pixelValue: number,
  base: number,
): string {
  const remValue = pixelValue / base;
  return `${remValue.toFixed(2)}rem`;
}
