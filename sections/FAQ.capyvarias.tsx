import Icon from "$store/components/ui/Icon.tsx";

export type Variant = "text-center" | "text-left" | "split";

export type Question = {
  question: string;
  answer: string;
};

export interface Props {
  title?: string;
  description?: string;
  questions?: Array<Question>;
  contact_title?: string;
  contact_description?: string;
  contact_button_text?: string;
  variant?: Variant;
}

function showAnswer(event: MouseEvent) {
  console.log("show answer");
}

function ContactButton({ contact_button_text }: Props) {
  return <button class="btn btn-primary w-fit">{contact_button_text}</button>;
}

export default function FAQ({
  title,
  description,
  questions = [],
  contact_title,
  contact_description,
  contact_button_text,
  variant = "text-center",
}: Props) {
  return (
    <div
      className={`flex flex-col ${
        variant === "split" ? "lg:flex-row" : ""
      } mt-20 mx-4 lg:mx-72 gap-10`}
    >
      <div
        className={`flex flex-col flex-1 gap-5 ${
          variant === "text-center" ? "items-center px-4" : ""
        }`}
      >
        <h2
          className={`text-4xl ${
            variant === "text-center" ? "text-center" : ""
          }`}
        >
          {title}
        </h2>
        <p className={`${variant === "text-center" ? "text-center" : ""}`}>
          {description}
        </p>
        {variant === "split"
          ? <ContactButton contact_button_text={contact_button_text} />
          : <></>}
      </div>
      <div class="flex flex-col flex-1">
        {questions.map((item) => (
          <div onClick={showAnswer}>
            <div class="flex flex-row justify-between border-t border-gray-300 py-4 cursor-pointer">
              <span>{item.question}</span>
              <span>
                <Icon id="ChevronDown" width={20} height={20} strokeWidth={2} />
              </span>
            </div>
            <p className={`hidden p-2`}>
              {item.answer}
            </p>
          </div>
        ))}
      </div>
      {variant !== "split"
        ? (
          <div
            className={`flex flex-col gap-4 ${
              variant === "text-center" ? "items-center" : "items-start"
            }`}
          >
            <h3
              className={`text-3xl ${
                variant === "text-center" ? "text-center" : ""
              }`}
            >
              {contact_title}
            </h3>
            <p
              className={`${variant === "text-center" ? "text-center" : ""}`}
            >
              {contact_description}
            </p>
            <ContactButton contact_button_text={contact_button_text} />
          </div>
        )
        : <></>}
    </div>
  );
}
