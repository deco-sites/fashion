export interface Props {
  contact: string;
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

export default function FAQ({ questions, contact }: Props) {
  return (
    <div class="base-500">
      <div class="container sm:w-1/2 px-4 my-16">
        <h2 class="text-5xl text-center mb-6">FAQs</h2>
        <p class="text-lg text-center mb-20 p-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
        <ul>
          {questions.map(({
            question,
            answer,
          }) => (
            <div tabIndex={0} class="collapse collapse-arrow">
              <div>
                <li class="collapse-title border-t text-xl font-medium px-0">
                  {question}
                </li>
              </div>
              <div class="collapse-content px-0 collapse-close">
                <li>{answer}</li>
              </div>
            </div>
          ))}
        </ul>
        <h3 class="text-4xl text-center mt-20 mb-3 p-text">
          Still have a question?
        </h3>
        <p class="text-lg text-center mb-6 p-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <a href={contact} class="my-btn">Contact</a>
      </div>
    </div>
  );
}
