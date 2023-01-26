export default function Spacer(
  { height = 8, heightMobile = 8 }: { height?: number; heightMobile?: number },
) {
  return <div class={`h-${heightMobile} h-md-${height}`} />;
}
