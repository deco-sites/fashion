import type { JSX } from "preact";

const FACTORS = [1, 2, 3];
function getVideoSrcSet(
  videoUrl: string,
  { width, height }: { width: number; height: number },
) {
  const srcSetList = FACTORS.map((factor) => {
    const reiscaledWidth = width * factor;
    return `${videoUrl}-${reiscaledWidth}-${
      height * factor
    } ${reiscaledWidth}w`;
  });

  return srcSetList.join(", ");
}

interface Props extends JSX.HTMLAttributes<HTMLVideoElement> {
  src: string;
  width?: number;
  height?: number;
}

export default function Video(props: Props) {
  return (
    <video
      {...props}
      srcSet={getVideoSrcSet(props.src, {
        width: props.width ?? 360,
        height: props.height ?? 360,
      })}
    />
  );
}
