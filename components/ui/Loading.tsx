import Spinner from "$store/components/ui/Spinner.tsx";

export default function Loading() {
  return (
    <div class="h-screen w-full flex items-center justify-center">
      <Spinner />
    </div>
  );
}
