export interface Props {
  /** @title Subtítulo do Topo */
  /** @description Subtítulo do Topo  */
  subtitleTop?: string;
  questions: Array<{
    question: string;
    answer: string;
  }>;
  /** @title Titulo do Rodapé */
  /** @description Titulo do Rodapé  */
  titleTop?: string;
  /** @title Subtítulo do Rodapé */
  /** @description Subtítulo do Rodapé  */
  subtitlebot?: string;
  /** @title Texto CTA */
  /** @description Texto CTA  */
  botao: string;
}

export default function FAQ(props: Props) {
  const {
    subtitleTop =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    subtitlebot = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    botao = "Contact",
    questions = [{
      question: "Pergunta de exemplo",
      answer: "Resposta de exemplo",
    }],
  } = props;
  return (
    <div class="container-faq max-w-screen-md  m-auto pt-200px max-[700px]:mx-4">
      <div class="top text-center mt-10 sm:mt-10">
        <h1 class="text-5xl base-content not-italic leading-12 font-normal my-6">
          FAQs
        </h1>
        <p class="tect-lg base-content not-italic leading-7font-normal my-6 max-[700px]:w-64 m-auto">
          {props.subtitleTop}
        </p>
      </div>

      <div class="middle my-16">
        {props.questions.map(({ question, answer }) => (
          <div
            tabIndex={0}
            class="collapse collapse-arrow border-t border-neutral bg-base-100 py-2"
          >
            <input type="checkbox" />
            <div class="collapse-title text-lg not-italic leading-7 font-normal px-0">
              {question}
            </div>
            <div class="collapse-content">
              <p class="base-300 not-italic font-normal">{answer}</p>
            </div>
          </div>
        ))}
      </div>

      <div class="bottom text-center">
        <h3 class="text-4xl base-content not-italic leading-10 font-normal my-3 max-[700px]:w-64 m-auto">
          {props.titleTop}
        </h3>
        <p class="text-lg base-content not-italic leading-7 font-normal my-4 max-[700px]:w-64 m-auto">
          {props.subtitlebot}
        </p>
        <button className="btn rounded-none capitalize my-3 bg-primary font-normal">
          {props.botao}
        </button>
      </div>
    </div>
  );
}
