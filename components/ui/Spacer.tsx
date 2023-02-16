export interface Props {
  height?: {
    mobile: number;
    desktop: number;
  };
}

function Spacer({ height }: Props) {
  const mobile = height?.mobile ?? 8;
  const desktop = height?.desktop ?? 8;

  return <div class={`h-${mobile} md:h-${desktop}`} />;
}

export default Spacer;
