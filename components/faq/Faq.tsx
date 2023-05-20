import TopPartSection from './TopPart.tsx'

export interface TopPart {
    title: string;
    text: string;
  }

export interface Questions {
    question: string
    answer: string
}
  export interface Props {
    topPart: TopPart
    questions: Questions[]
  }

  function Faq({topPart, questions = []}: Props) {
    return (
        <div class="flex flex-row justify-center items-start px-64 gap-12 py-28">
            <div class="">
                <TopPartSection topPart={topPart} />
           </div>
        </div>
    );
  }

  export default Faq