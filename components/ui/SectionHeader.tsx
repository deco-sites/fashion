export interface Layout {
  alignment?: "Center" | "Left";
  fontSize?: "Normal" | "Large";
  colorReverse?: boolean;
}

export interface Content {
  title?: string;
  description?: string;
}

export interface Props {
  content?: Content;
  layout?: Layout;
}

function Header(props: Props) {
  return (
    <>
      {props.content?.title || props.content?.description
        ? (
          <div
            class={`flex flex-col gap-2 ${
              props.layout?.alignment === "Left" ? "text-left" : "text-center"
            }`}
          >
            {props.content?.title &&
              (
                <h1
                  class={`text-2xl leading-8 lg:leading-10
                  ${
                    props.layout?.colorReverse
                      ? "text-primary-content"
                      : "text-base-content"
                  }
                  ${props.layout?.fontSize === "Normal" ? "lg:text-3xl" : "lg:text-4xl"}
                `}
                >
                  {props.content?.title}
                </h1>
              )}
            {props.content?.description &&
              (
                <h2
                  class={`
                  leading-6 lg:leading-8
                  ${
                    props.layout?.colorReverse ? "text-primary-content" : "text-neutral"
                  }
                  ${props.layout?.fontSize === "Normal" ? "lg:text-xl" : "lg:text-2xl"}
                `}
                >
                  {props.content?.description}
                </h2>
              )}
          </div>
        )
        : null}
    </>
  );
}

export default Header;
