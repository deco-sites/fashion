import { h } from "preact";

// const FACTORS = [1, 2, 3];
// function getImageSrcSet(
// imgUrl: string,
// { width, height }: { width: number; height: number },
// ) {
// // https://assets.vtex.app/unsafe/1002x1503/center/middle/https://lojaoffpremium.vtexassets.com/arquivos/ids/5765183/302883_17749_1-VESTIDO-CURTO-PONTO-DE-FLOR.jpg?v=1752369082
// // https://assets.vtex.app/unsafe/328x492/center/middle/https://lojaoffpremium.vtexassets.com/arquivos/ids/5765183/302883_17749_1-VESTIDO-CURTO-PONTO-DE-FLOR.jpg?v=1752369082
// const srcSetList = FACTORS.map((factor) => {
// const reiscaledWidth = width * factor;
// return `${imgUrl}-${reiscaledWidth}-${height * factor} ${reiscaledWidth}w`;
// });

// return srcSetList.join(", ");
// }

interface Props extends h.JSX.HTMLAttributes<HTMLImageElement> {
  src: string;
  width?: number;
  height?: number;
}

export default function Image(props: Props) {
  return (
    <img
      {...props}
      src={`https://assets.vtex.app/unsafe/3006x4509/center/middle/${props.src}`}
      // Find a better approach to calc this
      srcSet={`https://assets.vtex.app/unsafe/328x492/center/middle/${props.src} 328w, https://assets.vtex.app/unsafe/1002x1503/center/middle/${props.src} 1002w`}
    />
  );
}
