import Icon from "$store/components/ui/Icon.tsx";

export default function BackToTop({ content }: { content?: string }) {
  return (
    <>
      {content && (
        <div class="w-full flex items-center justify-center">
          <a href="#top" class="btn">
            {content} <Icon id="ChevronUp" width={24} height={24} />
          </a>
        </div>
      )}
    </>
  );
}
