import TopPartComponent from "./TopPart.tsx";
import BottomPartComponent from "./BottomPart.tsx";
import QuestionsComponent from "./Questions.tsx";

export interface TopPart {
  title: string;
  text: string;
}

export interface Questions {
  question: string;
  answer: string;
}

export interface BottomPart {
  title: string;
  text: string;
  contactUrl: string;
}

export interface Props {
  topPart: TopPart;
  questions: Questions[];
  bottomPart: BottomPart;
}

function Faq({ topPart, bottomPart, questions = [] }: Props) {
  return (
    <>
      {/* Mobile Version */}
      <div className="md:hidden relative">
        <div class="flex flex-col justify-center items-start px-8 gap-6 py-14">
          <TopPartComponent topPart={topPart} />
          <div class="w-full">
            <QuestionsComponent questions={questions} />
          </div>
          <div class="mx-auto">
            <BottomPartComponent bottomPart={bottomPart} />
          </div>
        </div>
      </div>

      {/* Desktop Version */}
      <div className="hidden md:block relative">
        <div class="flex flex-col justify-center items-start px-64 gap-12 py-28">
          <TopPartComponent topPart={topPart} />
          <div class="w-full">
            <QuestionsComponent questions={questions} />
          </div>
          <div class="mx-auto">
            <BottomPartComponent bottomPart={bottomPart} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Faq;