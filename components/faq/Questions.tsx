import type { Questions } from "./Faq.tsx";
import QuestionAnswer from "./QuestionAnswer.tsx";
// import { signal } from "@preact/signals";

function QuestionsComponent({ questions }: {
    questions: Questions[];
}) {
  return (
    <div class="">
        <div class="justify-left">
            <ul>
                {questions.map((questionAnswer) => (
                    <QuestionAnswer questionAnswer={questionAnswer} />
                ))}
            </ul>
        </div>
    </div>
  );
}

export default QuestionsComponent;