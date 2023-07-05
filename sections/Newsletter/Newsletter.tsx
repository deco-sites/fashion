import { getButtonClasses } from "$store/components/ui/Types.tsx"
import Container, { HeaderContent, Layout, ExtendedStyle } from "$store/components/ui/Container.tsx"

export interface Form {
  placeholder?: string;
  buttonText?: string;
  /** @format html */
  helpText?: string;
}

export interface Props {
  header?: HeaderContent;
  form?: Form;
  layout?: Layout;
  style?: ExtendedStyle;
}

const DEFAULT_PROPS: Props = {
  header: {
    title: "",
    description: "",
  },
  form: {
    placeholder: "Digite seu email",
    buttonText: "Inscrever",
    helpText: "",
  },
};

export default function Newsletter(props: Props) {
  const { header, form, layout, style } = { ...DEFAULT_PROPS, ...props };
  
  return (
    <Container header={header} layout={layout} style={style}>
      <form action="/" class="flex flex-col gap-4">
        <div class="flex flex-col lg:flex-row gap-3">
          <input
            class="input input-bordered lg:w-80"
            type="text"
            placeholder={form?.placeholder}
          />
          <button
            class={getButtonClasses(style?.button || {})}
            type="submit"
          >
            {form?.buttonText}
          </button>
        </div>
        {form?.helpText && (
          <div
            class="text-sm"
            dangerouslySetInnerHTML={{ __html: form?.helpText }}
          />
        )}
      </form>
    </Container>
  );
}
