import type { HTML } from "deco-sites/std/components/types.ts";
import pixelToRem from "../helpers/pixelToRem.tsx";

export interface Props {
  /**
   * @description Give a name for this HTML for styles purpouse
   */
  name: string;
  /**
   * @description Choose the HTML size between full page size or centralized
   */
  width?: "full" | "centralized";
  /**
   * @description Html for your text with title, subtitle and paragraphs
   */
  section: HTML;
  /**
   * @description Title Styles based on H1 and H2, choose your alignment and font size, save and see the result
   */
  titleStyles?: {
    align?: "center" | "left" | "right" | "justify";
    size?: number;
  };
  /**
   * @description SubTitle Styles based on H3, H4, H5 AND H6, choose your alignment and font size, save and see the result
   */
  subtitleStyles?: {
    align?: "center" | "left" | "right" | "justify";
    size?: number;
  };
  /**
   * @description Paragraph Styles, choose your alignment and font size, save and see the result
   */
  paragraphStyles?: {
    align?: "center" | "left" | "right" | "justify";
    size?: number;
  };
  /**
   * @description Links Styles,  choose your alignment, font size, type and color, save and see the result
   */
  linkStyles?: {
    /**
     * @label Choose your type alignment, save to see the result
     */
    align?: "center" | "left" | "right" | "justify";
    /**
     * @description Choose your font size, save to see the result
     */
    size?: number;
    /**
     * @description Choose your type of link, save to see the result
     */
    type?: "button" | "link";
    /**
     * @description Choose your font color, save to see the result
     */
    color?: string;
  };
}

function Paragraph(
  {
    name,
    width,
    section,
    titleStyles,
    subtitleStyles,
    paragraphStyles,
    linkStyles,
  }: Props,
) {
  const nameForClass = name ? name.replace(/\s/g, "") : "noName";
  return (
    <>
      <style>
        {`
             .content.${nameForClass} h1, .content.${nameForClass} h2{
                text-align: ${titleStyles?.align ? titleStyles.align : "left"};
                font-size: ${
          titleStyles?.size ? pixelToRem(titleStyles.size, 16) : "0.875rem"
        };
             }

             .content.${nameForClass} h3,.content.${nameForClass} h4,.content.${nameForClass} h5,.content.${nameForClass} h6 {
                text-align: ${
          subtitleStyles?.align ? subtitleStyles.align : "left"
        };
                font-size: ${
          subtitleStyles?.size
            ? pixelToRem(subtitleStyles.size, 16)
            : "0.875rem"
        }
             }

             .content.${nameForClass} p,.content.${nameForClass} span,.content.${nameForClass} a {
                text-align: ${
          paragraphStyles?.align ? paragraphStyles.align : "left"
        };
                font-size: ${
          paragraphStyles?.size
            ? pixelToRem(paragraphStyles.size, 16)
            : "0.875rem"
        }
             }

             .content.${nameForClass} a {
                text-align: ${linkStyles?.align ? linkStyles.align : "left"};
                font-size: ${
          linkStyles?.size ? pixelToRem(linkStyles.size, 16) : "0.875rem"
        };
                padding: ${
          linkStyles?.type === "button" ? "8px 12px" : "inherit"
        };
                background: ${
          linkStyles?.type === "button" ? "#273746" : "inherit"
        };
                color: ${linkStyles?.color ? linkStyles.color : "inherit"}
             }
            `}
      </style>
      <div
        class={`${
          width === "full" ? "w-full " : "w-[300px] md:w-[768px]"
        } m-auto px-4 md:px-16`}
      >
        <div
          class={`content ${nameForClass} mb-20`}
          dangerouslySetInnerHTML={{ __html: section }}
        />
      </div>
    </>
  );
}

export default Paragraph;
