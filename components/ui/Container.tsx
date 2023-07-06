import type { VNode } from "preact";
import Header, { Content, Style as HeaderStyle } from "$store/components/ui/SectionHeader.tsx";
import { Layout as SectionLayout, Section, layoutClasses, Colors, colorClasses, TextColors, textColorClasses, ButtonType } from "$store/components/ui/Types.tsx"
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export type Layout = SectionLayout;
export type HeaderContent = Content;

export interface Style {
    section?: Section;
    content?: {
      alignment?: "Center" | "Left";
      bgColor?: Colors;
      bgImage?: LiveImage;
      textColor?: TextColors;
    }
    header?: HeaderStyle;
    button?: ButtonType;
}

export interface ExtendedStyle {
    section?: Section;
    content?: {
      alignment?: "Center" | "Left" | "Side to side";
      bgColor?: Colors;
      bgImage?: LiveImage;
      textColor?: TextColors;
    }
    header?: HeaderStyle;
    button?: ButtonType;
}

export interface Props {
  header?: HeaderContent;
  layout?: Layout;
  style?: ExtendedStyle;
  children: VNode;
  afterHeader?: VNode | false;
}

const DEFAULT_PROPS: Props = {
  header: {
    title: "",
    description: "",
  },
  children: <></>,
};

export default function Container({children, ...props}: Props) {
  const { header, layout, style, afterHeader } = { ...DEFAULT_PROPS, ...props };
  
  const sectionBgColor = style?.section?.bgColor || "Transparent"
  const contentBgColor = style?.content?.bgColor || "Transparent"
  const containerBgColorClasses = sectionBgColor ? colorClasses[sectionBgColor] : "";
  const contentBgColorClasses = contentBgColor ? colorClasses[contentBgColor] : "";
  
  const hasPadding = (contentBgColor !== 'Transparent' && sectionBgColor !== contentBgColor) || style?.content?.bgImage !== undefined

  const contentClasses = {
    "Center": "items-stretch",
    "Left": "",
    "Side to side": "justify-between items-center lg:flex-row"
  }

  const _header = <Header content={header} style={style?.header} lineColor={contentBgColor !== "Transparent" ? contentBgColor : sectionBgColor}/>

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
          ${afterHeader ? "grid grid-cols-2" : "flex flex-col flex-wrap"}
          ${hasPadding ? "p-4 lg:p-10" : "px-4 py-8 lg:p-16"}
          ${layoutClasses[layout?.contentWidth || "Container"]}
          ${contentBgColorClasses}
          ${style?.content?.bgImage ? "bg-cover bg-center" : ""}
          ${contentClasses[style?.content?.alignment || "Center"]}
          ${textColorClasses[style?.content?.textColor || "Auto"]}
        `}
        style={{ "background-image": style?.content?.bgImage ? `url(${style?.content?.bgImage})` : "" }}
      >
        {
          afterHeader ? (
            <div class="flex flex-col gap-6 lg:gap-10">
              { _header }
              { afterHeader }
            </div>
          ) : _header
        }
        <div class={`flex flex-col ${style?.content?.alignment == "Center" ? "items-center" : "items-left"}`}>
          {children}
        </div>
      </div>
    </div>
  );
}
