import Icon from "$store/components/ui/Icon.tsx";

export interface Question {
  question: string;
  answer: string;
}

function QuestionAnswer({ questionAnswer }: { questionAnswer: Question }) {
  const { question, answer } = questionAnswer;

  return (
    <>
      {/* Mobile Version */}
      <div className="md:hidden relative">
        <div class="border-t border-gray-400 py-2">
            <details>
            <summary class="flex justify-between py-2 text-lg">
                {question}
                <Icon id="ChevronDown" width={20} height={20} strokeWidth={2} />
            </summary>
            <p>
                {answer}
            </p>
            </details>
        </div>
      </div>

      {/* Desktop Version */}
      <div className="hidden md:block relative">
        <div class="border-t border-gray-400 py-2">
            <details>
            <summary class="flex justify-between py-2 text-lg">
                {question}
                <Icon id="ChevronDown" width={20} height={20} strokeWidth={2} />
            </summary>
            <p>
                {answer}
            </p>
            </details>
        </div>
      </div>
    </>
  );
}

export default QuestionAnswer;
