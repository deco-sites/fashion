export default function Divider({ ...props }: { color?: string }) {
  return (
    <div class="w-full flex">
      <div class={`w-full border-b ${props.color || ""}`}></div>
    </div>
  );
}
