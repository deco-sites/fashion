export interface Props {
  /**
   * @default FAQs
   */
  title?: string;
  /**
   * @default Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
   */
  subtitle?: string;
  questions?: Question[];
  /**
   * @default Still have a question?
   */
  footerTitle?: string;
  /**
   * @default Lorem ipsum dolor sit amet, consectetur adipiscing elit.
   */
  footerSubtitle?: string;
  contact?: Contact;
  /**
   *  @title Text Alignment
   *  @default center
   */
  textAlignment: "left" | "center" | "right";
  /**
   *  @default compact
   */
  mode: "compact" | "full";
}

export interface Question {
  question: string;
  answer: string;
}

export interface Contact {
  /**
   * @default Contact Us
   */
  text?: string;
  /**
   * @default #
   */
  url?: string;
}

const DEFAULT_PROPS = {
  questions: [
    ...Array(5).map(() => ({
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    })),
  ],
  footerTitle: "",
  footerSubtitle: "",
};

function FAQ(
  {
    mode,
    title,
    subtitle,
    questions = DEFAULT_PROPS.questions,
    footerTitle,
    footerSubtitle,
    textAlignment,
    contact,
  }: Props,
) {
  const alignment = `text-${textAlignment}`;

  return (
    <div
      class={`${
        mode === "full" ? "container" : "max-w-screen-md mx-auto"
      } py-10 px-4 my-16`}
    >
      <div class="flex flex-col gap-6">
        <h2 class={`text-5xl ${alignment} text-[#292929]`}>{title}</h2>
        <p class={`text-lg ${alignment} text-[#292929]`}>{subtitle}</p>
      </div>
      <ul class="my-20">
        {questions.map(({ question, answer }) => (
          <div class="collapse">
            <input type="checkbox" class="peer" />
            <button
              type="button"
              class="collapse-title px-0 py-5 flex justify-between items-center border border-transparent border-t-[#292929]"
            >
              <span class="text-lg text-[#292929]">{question}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                class="text-[#292929] stroke-2"
              >
                <use href="/sprites.svg#ChevronDown" />
              </svg>
            </button>
            <div class="collapse-content px-2">
              <p>{answer}</p>
            </div>
          </div>
        ))}
      </ul>
      {contact && (
        <div class="flex flex-col gap-4">
          <h2 class={`text-5xl ${alignment} text-[#292929]`}>{footerTitle}</h2>
          <p class={`text-lg ${alignment} text-[#292929]`}>{footerSubtitle}</p>
          <a
            href={contact.url}
            class={`block text-lg py-2 px-3 bg-slate-800 text-white uppercase ${alignment} ${
              textAlignment === "center"
                ? "self-center"
                : textAlignment === "right"
                ? "self-end"
                : "self-start"
            }`}
          >
            {contact.text}
          </a>
        </div>
      )}
    </div>
  );
}

export default FAQ;
