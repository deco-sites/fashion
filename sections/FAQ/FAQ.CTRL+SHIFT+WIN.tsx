export interface Props {
  headerInfo: {
    title: string;
    description: string;
  };

  questions: Array<{
    question: string;
    answer: string;
  }>;

  contactUs: {
    title: string;
    description: string;
    buttonText: string;
  };
}

function FAQ({ questions, headerInfo, contactUs }: Props) {
  return (
    <div class="flex justify-center w-full">
      <div class="flex flex-col items-center px-4 py-16 h-full w-full justify-between lg:max-w-5xl">
        <div class="w-full flex flex-col items-center justify-center h-1/5 pb-6">
          <h1 class="text-5xl">{headerInfo.title || "FAQs"}</h1>
          <p class="text-lg py-4">
            {headerInfo.description || "Descrição da página"}
          </p>
        </div>
        <div class="w-full flex">
          <dl class="w-full">
            {questions.map(({ question, answer }, index) => (
              <div class="w-full">
                <div class="divider"></div>
                <div
                  key={index}
                  class="collapse collapse-arrow w-full"
                  tabIndex={0}
                >
                  <div class="collapse-title">
                    <dt class="text-lg">{question}</dt>
                  </div>
                  <div class="collapse-content">
                    <dd class="text-base">{answer}</dd>
                  </div>
                </div>
              </div>
            ))}
          </dl>
        </div>
        <div class="w-full h-1/5 pt-12 flex flex-col items-center">
          <h2 class="text-4xl text-center">
            {contactUs.title || "Título complementar"}
          </h2>
          <p class="text-lg text-center mt-4">
            {contactUs.description || "Descrição complementar"}
          </p>
          <button class="btn rounded-none mt-6">
            {contactUs.buttonText || "Texto do Botão"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
