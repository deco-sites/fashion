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
      alignment?: "Center" | "Left" | "Side to side top" | "Side to side middle";
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
    "Side to side top": "justify-between lg:grid lg:grid-flow-col",
    "Side to side middle": "justify-between items-center lg:flex-row lg:flex-nowrap",
  }

  const _header = <Header content={header} style={style?.header}/>

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
          flex flex-col flex-wrap gap-6 lg:gap-12
          ${afterHeader ? "lg:grid lg:grid-cols-2" : ""}
          ${hasPadding ? "p-4 lg:p-10" : "px-4 py-8 lg:py-16"}
          ${layoutClasses[layout?.contentWidth || "Container"]}
          ${contentBgColorClasses}
          ${style?.content?.bgImage ? "bg-cover bg-center" : ""}
          ${contentClasses[style?.content?.alignment || "Center"]}
          ${textColorClasses[style?.content?.textColor || "Auto"]}
        `}
        style={{ "background-image": style?.content?.bgImage ? `url(${style?.content?.bgImage})` : "" }}
      >
        {
          header?.title || header?.description || afterHeader ? (
            <div class="flex flex-col gap-6 lg:gap-10 lg:px-6 lg:min-w-[22rem]">
              <Header content={header} style={style?.header}/>
              { afterHeader }
            </div>
          ) : ""
        }
        <div class={`flex flex-col w-full ${style?.content?.alignment == "Center" ? "items-center" : "items-left"}`}>
          {children}
        </div>
      </div>
    </div>
  );
}
