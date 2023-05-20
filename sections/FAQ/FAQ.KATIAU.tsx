export interface Props {
    subtitletop?: string;
  questions: Array<{
    question: string;
    answer: string;
  }>;
    subtitlebot?: string;
    botao: string;
}

export default function FAQ({ subtitletop, questions, subtitlebot, botao }: Props) {
  return (
    <div class="container-faq">
      <div class="top">
        <h1 class="text-48">FAQs</h1>
        <p>{subtitletop}</p>
      </div>

      <div class="middle">
        {questions.map(({ question, answer }) => (
          <div
            tabIndex={0}
            class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <input type="checkbox" />
            <div class="collapse-title text-xl font-medium">
              {question}
            </div>
            <div class="collapse-content">
              <p>{answer}</p>
            </div>
          </div>
        ))}
      </div>

      <div class="bottom">
        <h3>Still have a question?</h3>
        <p>{subtitlebot}</p>
        <button className="btn">{botao}</button>
      </div>
    </div>
  );
}