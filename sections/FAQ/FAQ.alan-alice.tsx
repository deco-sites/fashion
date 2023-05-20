export interface QuestionProps {
  question: string;
  answer: string;
}

export interface LinkProps {
  label: string;
  url: string;
  openNewTab?: boolean;
}

export interface FaqProps {
  title: string;
  subtitle: string;
  questions: QuestionProps[];
  moreQuestions: {
    textBig: string;
    textSmall: string;
    link: LinkProps;
  };
}

const Link = (props: LinkProps) => {
  const { label = "Contact", url, openNewTab = false } = props;

  const target = openNewTab ? "_blank" : "";

  return (
    <a
      className="text-base py-2 px-3 bg-[#273746] text-[#ffffff] hover:bg-black"
      href={url}
      target={target}
    >
      {label}
    </a>
  );
};

const Faq = ({
  title = "FAQs",
  subtitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  questions = [
    {
      question: "Question text goes here",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ],
  moreQuestions = {
    textBig: "Still have a question?",
    textSmall: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: { label: "Contact", url: "#", openNewTab: false },
  },
}: FaqProps) => {
  return (
    <div class="flex justify-center m-4">
      <div class="flex flex-col justify-center items-center border-gray-400 max-w-[768px]">
        <div class="mb-20">
          <p class="text-5xl text-center mb-6 text-[#292929]">
            {title}
          </p>
          <p class="text-lg text-center text-[#292929]">
            {subtitle}
          </p>
        </div>

        <div class="mb-20">
          <ul>
            {questions.map((item) => {
              return (
                <li class="collapse collapse-arrow pt-2 pb-2 pr-0 pl-0 border-t border-gray-400 text-[#292929]">
                  <input type="checkbox" className="peer" />
                  <div class="collapse-title flex items-center justify-between p-0">
                    <p class="text-lg">{item.question}</p>
                  </div>
                  <div class="collapse-content">
                    <p class="text-base">{item.answer}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div class="w-full flex items-center flex-col">
          <p class="text-4xl text-center mb-4 ">
            {moreQuestions.textBig}
          </p>
          <p class="text-center mb-6 text-lg">
            {moreQuestions.textSmall}
          </p>
          <div class="flex justify-center">
            <Link {...moreQuestions.link} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
