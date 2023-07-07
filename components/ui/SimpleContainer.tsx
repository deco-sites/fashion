import type { VNode } from "preact";
import { Layout as SectionLayout, Section, layoutClasses, Colors, colorClasses, TextColors, textColorClasses, ButtonType } from "$store/components/ui/Types.tsx"
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export type Layout = SectionLayout;

export interface Style {
    section?: Section;
    content?: {
      bgColor?: Colors;
      bgImage?: LiveImage;
      textColor?: TextColors;
    }
    button?: ButtonType;
}

export interface Props {
  layout?: Layout;
  style?: Style;
  children: VNode;
}

const DEFAULT_PROPS: Props = {
  children: <></>,
};

export default function Container({children, ...props}: Props) {
  const { layout, style } = { ...DEFAULT_PROPS, ...props };
  
  const sectionBgColor = style?.section?.bgColor || "Transparent"
  const contentBgColor = style?.content?.bgColor || "Transparent"
  const containerBgColorClasses = sectionBgColor ? colorClasses[sectionBgColor] : "";
  const contentBgColorClasses = contentBgColor ? colorClasses[contentBgColor] : "";
  
  const hasPadding = (contentBgColor !== 'Transparent' && sectionBgColor !== contentBgColor) || style?.content?.bgImage !== undefined

  return (
    <div class={`
      ${containerBgColorClasses}
      ${layoutClasses[layout?.sectionWidth || "Container"]}
      ${hasPadding ? "p-4 lg:p-16" : ""}
      ${style?.section?.bgImage ? "bg-cover bg-center" : ""}`}
      style={{ "background-image": style?.section?.bgImage ? `url(${style?.section?.bgImage})` : "" }}
    >
      <div
        class={`
          gap-6 lg:gap-12
          ${hasPadding ? "p-4 lg:p-10" : "px-4 py-8 lg:p-16"}
          ${layoutClasses[layout?.contentWidth || "Container"]}
          ${contentBgColorClasses}
          ${style?.content?.bgImage ? "bg-cover bg-center" : ""}
          ${textColorClasses[style?.content?.textColor || "Auto"]}
        `}
        style={{ "background-image": style?.content?.bgImage ? `url(${style?.content?.bgImage})` : "" }}
      >
        <div class={`flex flex-col`}>
          {children}
        </div>
      </div>
    </div>
  );
}
