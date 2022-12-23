export default function IconCart({ size = 16 }: { size?: number }) {
  return (
    <div class="flex flex-col md:(flex-row m-4)">
      <div class="w-full bg-red-600 h-14"></div>
      <div class="w-full bg-blue-600 h-14"></div>
    </div>
  );
}
