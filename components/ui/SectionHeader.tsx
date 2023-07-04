import { TextColors, textColorClasses } from "$store/components/ui/Types.tsx"

export interface Style {
  textColor?: TextColors;
  fontSize?: "Extra Large" | "Large" | "Medium";
  fontWeight?: "Semibold" | "Normal" | "Light";
  textTransform?: "Normal" | "Uppercase" | "Lowercase" | "Capitalize";
  line?: "None" | "Bottom" | "Middle";
  alignment?: "Center" | "Left";
}

export interface Content {
  title?: string;
  description?: string;
}

export interface Props {
  content?: Content;
  style?: Style;
}

export const alignmentClasses = {
  "Center": "text-center",
  "Left": "text-left",
}

export const fontSizeClasses = {
  "Extra Large": "text-3xl lg:text-5xl",
  "Large": "text-2xl lg:text-3xl",
  "Medium": "text-base lg:text-xl",
}

export const fontSizeDescriptionClasses = {
  "Extra Large": "text-2xl lg:text-3xl",
  "Large": "text-base lg:text-xl",
  "Medium": "text-xs lg:text-sm",
}

export const gapClasses = {
  "Extra Large": "gap-1",
  "Large": "gap-0",
  "Medium": "gap-0",
}

export const fontWeightClasses = {
  "Semibold": "font-semibold",
  "Normal": "font-normal",
  "Light": "font-light",
}

export const textTransformClasses = {
  "Normal": "normal-case",
  "Uppercase": "uppercase",
  "Lowercase": "lowercase",
  "Capitalize": "capitalize",
}

function Header(props: Props) {
  const {
    content,
    style,
  } = props;

  const fontSize = style?.fontSize || "Extra Large";

  return (
    <>
      {content?.title || content?.description
        ? (
          <div
            class={`flex flex-col leading[120%]
              ${gapClasses[fontSize]}
              ${alignmentClasses[style?.alignment || "Center"]}
              ${textColorClasses[style?.textColor || "Auto"]}
              ${fontWeightClasses[style?.fontWeight || "Semibold"]}
              ${textTransformClasses[style?.textTransform || "Normal"]}
            `}
          >
            {content?.title &&
              (
                <h1 class={`${fontSizeClasses[fontSize]}`}>
                  {content?.title}
                </h1>
              )}
            {content?.description &&
              (
                <h2 class={`opacity-60 ${fontSizeDescriptionClasses[fontSize]}`}>
                  {content?.description}
                </h2>
              )}
          </div>
        )
        : null}
    </>
  );
}

export default Header;
