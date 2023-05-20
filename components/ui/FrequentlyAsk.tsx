import Icon from "./Icon.tsx";

export interface Questions {
  /**
   * @description Question
   */
  question: string;
  /**
   * @description Answer
   */
  answer: string;
}

export interface Props {
  /**
   * @description List of Questions & Answers
   */
  questions?: Questions[];
  variation?: "full" | "center";
}

function FrequentlyAsk(
  { questions, variation }: Props,
) {
  return (
    <ul
      class={`container ${
        variation === "full" ? "w-full" : "sm:w-full md:w-[768px]"
      } m-auto my-20`}
    >
      {questions?.map(({ question, answer }, index) => {
        return (
          <li
            tabIndex={index}
            class="collapse collapse-arrow py-5 border-t border-gray-300"
          >
            <div class="collapse-title flex justify-between items-center">
              <h4 class="text-lg text-[#292929]">{question}</h4>
            </div>
            <p class="collapse-content">{answer}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default FrequentlyAsk;
