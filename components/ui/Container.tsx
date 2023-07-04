import type { VNode } from "preact";
import Header, { Content, Style as HeaderStyle } from "$store/components/ui/SectionHeader.tsx";
import { Layout as SectionLayout, Section, layoutClasses, Colors, colorClasses, ButtonType } from "$store/components/ui/Types.tsx"
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export type Layout = SectionLayout;
export type HeaderContent = Content;

export interface Style {
    section?: Section;
    content?: {
      alignment?: "Center" | "Left";
      bgColor?: Colors;
      bgImage?: LiveImage;
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
    }
    header?: HeaderStyle;
    button?: ButtonType;
}

export interface Props {
  children: VNode;
  header?: HeaderContent;
  layout?: Layout;
  style?: ExtendedStyle;
}

const DEFAULT_PROPS: Props = {
  children: <></>,
  header: {
    title: "",
    description: "",
  },
};

export default function Container({children, ...props}: Props) {
  const { header, layout, style } = { ...DEFAULT_PROPS, ...props };
  
  const sectionBgColor = style?.section?.bgColor
  const contentBgColor = style?.content?.bgColor
  const containerBgColorClasses = sectionBgColor ? colorClasses[sectionBgColor] : "";
  const contentBgColorClasses = contentBgColor ? colorClasses[contentBgColor] : "";
  
  const hasPadding = (contentBgColor !== 'Transparent' && sectionBgColor !== contentBgColor) || style?.content?.bgImage !== undefined

  const contentClasses = {
    "Center": "items-stretch",
    "Left": "",
    "Side to side": "justify-between items-center lg:flex-row"
  }

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
          flex flex-wrap flex-col rounded gap-6 lg:gap-12
          ${hasPadding ? "p-2 lg:p-10" : "p-4 lg:p-16"}
          ${layoutClasses[layout?.contentWidth || "Container"]}
          ${contentBgColorClasses}
          ${style?.content?.bgImage ? "bg-cover bg-center" : ""}
          ${contentClasses[style?.content?.alignment || "Center"]}
        `}
        style={{ "background-image": style?.content?.bgImage ? `url(${style?.content?.bgImage})` : "" }}
      >
        <Header content={header} style={style?.header}/>
        <div class={`flex flex-col ${style?.content?.alignment == "Center" ? "items-center" : "items-left"}`}>
          {children}
        </div>
      </div>
    </div>
  );
}
