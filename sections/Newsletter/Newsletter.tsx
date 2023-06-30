import Header, { Content as HeaderContent, Layout as HeaderLayout } from "$store/components/ui/SectionHeader.tsx";
import { Colors, colorClasses, ButtonType, buttonClasses } from "$store/components/ui/Types.tsx"

export interface Form {
  placeholder?: string;
  buttonText?: string;
  /** @format html */
  helpText?: string;
}

export interface Props {
  header?: HeaderContent;
  form?: Form;
  style?: {
    container?: {
      bgColor?: Colors;
    };
    content?: {
      bgColor?: Colors;
      alignment?: "Center" | "Left" | "Side to side";
    }
    header?: HeaderLayout;
    button?: ButtonType;
  };
}

const DEFAULT_PROPS: Props = {
  header: {
    title: "",
    description: "",
  },
  form: {
    placeholder: "Digite seu email",
    buttonText: "Inscrever",
    helpText:
      'Ao se inscrever, você concorda com nossa <a class="link" href="/politica-de-privacidade">Política de privacidade</a>.',
  },
  style: {
    container: {
      bgColor: "Transparent",
    },
    content: {
      bgColor: "Transparent",
      alignment: "Center",
    },
    header: {
      alignment: "Center",
      fontSize: "Large",
    },
    button: {
      color: "Default",
      outline: false,
    }
  },
};

export default function Newsletter(props: Props) {
  const { header, form, style } = { ...DEFAULT_PROPS, ...props };
  
  const containerBgColor = style?.container?.bgColor
  const contentBgColor = style?.content?.bgColor
  const containerBgColorClasses = containerBgColor ? colorClasses[containerBgColor] : "";
  const contentBgColorClasses = contentBgColor ? colorClasses[contentBgColor] : "";
  
  const hasPadding = contentBgColor !== 'Transparent' && containerBgColor !== contentBgColor

  const headerLayout = (
    <Header
      content={header}
      layout={{
        alignment: style?.header?.alignment,
        fontSize: style?.header?.fontSize,
      }}
    />
  );

  const formLayout = form && (
    <form action="/" class="flex flex-col gap-4">
      <div class="flex flex-col lg:flex-row gap-3">
        <input
          class="input input-bordered lg:w-80"
          type="text"
          placeholder={form.placeholder}
        />
        <button
          class={`btn ${buttonClasses[style?.button?.color || "Default"]} ${style?.button?.outline ? "btn-outline" : ""}`}
          type="submit"
        >
          {form.buttonText}
        </button>
      </div>
      {form.helpText && (
        <div
          class="text-sm"
          dangerouslySetInnerHTML={{ __html: form.helpText }}
        />
      )}
    </form>
  );

  return (
    <div class={`${containerBgColorClasses} ${hasPadding ? "p-4 lg:p-16" : ""}`}>
      {(!style?.content?.alignment ||
        style?.content?.alignment === "Center") && (
        <div
          class={`${contentBgColorClasses} container flex flex-col rounded p-4 gap-6 lg:p-16 lg:gap-12`}
        >
          {headerLayout}
          <div class="flex justify-center">
            {formLayout}
          </div>
        </div>
      )}
      {style?.content?.alignment === "Left" && (
        <div
          class={`${contentBgColorClasses} container flex flex-col rounded p-4 gap-6 lg:p-16 lg:gap-12`}
        >
          {headerLayout}
          <div class="flex justify-start">
            {formLayout}
          </div>
        </div>
      )}
      {style?.content?.alignment === "Side to side" && (
        <div
          class={`${contentBgColorClasses} container flex flex-col rounded justify-between lg:flex-row p-4 gap-6 lg:p-16 lg:gap-12`}
        >
          {headerLayout}
          <div class="flex justify-center">
            {formLayout}
          </div>
        </div>
      )}
    </div>
  );
}
