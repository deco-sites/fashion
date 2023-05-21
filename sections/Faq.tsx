export interface Props {
  title: string;
  subtitle: string;
  question: string;
  subquestion: string;
  contact: string;
  button: string;
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

export default function FAQ({ questions, contact, button, title, subtitle, question, subquestion }: Props) {
  return (
    <div class="flex justify-center px-4 ">
      <div class="py-16 sm:w-1/2 flex flex-col">
        <section class="text-center">
          <h2 class="text-5xl">
            {title}
          </h2>
          <p class="text-lg mt-6 mb-20">
            {subtitle}
          </p>
        </section>
        <ul>
          {questions.map(({
            question,
            answer,
          }) => (
            <div tabIndex={0} class="collapse collapse-arrow">
              <div>
                <li class="collapse-title border-t text-lg text-start px-0">
                  {question}
                </li>
              </div>
              <div class="collapse-content collapse-close text-start px-0">
                <li>{answer}</li>
              </div>
            </div>
          ))}
        </ul>
        <section class="text-center">
          <h3 class="text-4xl px-4 mx-4 mt-20 mb-4">
            {question}
          </h3>
          <p class="text-lg px-4 mx-4 mb-6">
            {subquestion}
          </p>
          <button type="button" href={contact} class="bg-primary hover:bg-slate-700 text-white py-2 px-3">{button}</button>
        </section>
      </div>
    </div>
  );
}
