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
  "Extra Large": "text-xl lg:text-3xl",
  "Large": "text-base lg:text-xl",
  "Medium": "text-xs lg:text-sm",
}

export const gapClasses = {
  "Extra Large": "lg:gap-1",
  "Large": "",
  "Medium": "",
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
  const line = style?.line || "None"

  return (
    <>
      {content?.title || content?.description
        ? (
          <div class={`${line === "Bottom" ? "flex flex-col pb-3" : ""} ${line === "Middle" && "flex items-center"}`}>
            {line === "Middle" && style?.alignment === "Center" &&
              <div class={`bg-[#e5e5ea] h-[1px] flex-auto mr-3 lg:mr-7`}/>
            }
            <div
              class={`flex-none flex flex-col leading[120%]
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
            {line !== "None" &&
              <div class={`bg-[#e5e5ea] h-[1px] flex-auto ${line === "Bottom" ? "mt-3" : "ml-3 lg:ml-7"}`}/>
            }
          </div>
        )
        : null}
    </>
  );
}

export default Header;
