import { h } from "preact";

const FACTORS = [1, 2, 3];
function getImageSrcSet(
  imgUrl: string,
  { width, height }: { width: number; height: number }
) {
  const srcSetList = FACTORS.map((factor) => {
    const reiscaledWidth = width * factor;
    return `${imgUrl}-${reiscaledWidth}-${height * factor} ${reiscaledWidth}w`;
  });

  return srcSetList.join(", ");
}

interface Props extends h.JSX.HTMLAttributes<HTMLImageElement> {
  src: string;
  width?: number;
  height?: number;
}

export default function Image(props: Props) {
  return (
    <img
      {...props}
      srcSet={getImageSrcSet(props.src, {
        width: props.width ?? 360,
        height: props.height ?? 360,
      })}
    />
  );
}
