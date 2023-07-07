import Icon from "$store/components/ui/Icon.tsx";
import { ButtonType, getButtonClasses } from "$store/components/ui/Types.tsx"

export default function BackToTop({ children, style }: { children?: string, style?: ButtonType }) {
  return (
    <>
      {children && (
        <div class="w-full flex items-center justify-center mt-8 md:mt-0">
          <a href="#top" class={`${getButtonClasses(style || {})} btn-sm`}>
            {children} <Icon id="ChevronUp" width={24} height={24} />
          </a>
        </div>
      )}
    </>
  );
}
