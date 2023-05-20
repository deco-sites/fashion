import type { Questions } from "./Faq.tsx";
import QuestionAnswer from "./QuestionAnswer.tsx";
// import { signal } from "@preact/signals";

function QuestionsComponent({ questions }: {
  questions: Questions[];
}) {
  return (
    <>
        {/* Mobile Version */}
        <div className="md:hidden relative">
            <div class="justify-left py-4">
                <ul>
                {questions.map((questionAnswer) => (
                    <QuestionAnswer questionAnswer={questionAnswer} />
                ))}
                </ul>
            </div>
        </div>

        {/* Desktop Version */}
        <div className="hidden md:block relative">
            <div class="justify-left py-4">
                <ul>
                {questions.map((questionAnswer) => (
                    <QuestionAnswer questionAnswer={questionAnswer} />
                ))}
                </ul>
            </div>
        </div>
    </>
  );
}

export default QuestionsComponent;
