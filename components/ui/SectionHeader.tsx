export default function Header(
  props: {
    title: string;
    fontSize?: "Normal" | "Large"
    description: string;
    alignment: "center" | "left",
    colorReverse?: boolean,
  },
) {
  return (
    <>
      {props.title || props.description
        ? (
          <div
            class={`flex flex-col gap-2 text-${props.alignment ? props.alignment : "center"}`}
          >
            {props.title &&
              (
                <h1 class={`text-2xl leading-8 lg:leading-10
                  ${props.colorReverse ? "text-primary-content" : "text-base-content"}
                  ${props.fontSize === "Normal" ? "lg:text-3xl" : "lg:text-4xl"}
                `}>
                  {props.title}
                </h1>
              )}
            {props.description &&
              (
                <h2 class={`
                  leading-6 lg:leading-8
                  ${props.colorReverse ? "text-primary-content" : "text-neutral"}
                  ${props.fontSize === "Normal" ? "lg:text-xl" : "lg:text-2xl"}
                `}>
                  {props.description}
                </h2>
              )}
          </div>
        )
        : <></>}
    </>
  );
}
