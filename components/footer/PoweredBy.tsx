import Icon from "$store/components/ui/Icon.tsx";

export default function PoweredBy() {
  return (
    <span class="flex items-center gap-1 text-sm">
      Powered by{" "}
      <a
        href="https://www.deco.cx"
        aria-label="powered by https://www.deco.cx"
      >
        <Icon id="Deco" height={20} width={60} strokeWidth={0.01} />
      </a>
    </span>
  );
}
