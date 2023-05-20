export interface Props {
  title?: string;
  description: string;
  question: Array<{
    question: string;
  response: string;
  }>;
  titleOthers: string;
  others: string;
}

function FAQ({question, description, title = 'FAQ', titleOthers, others}: Props) {
  return(
    <div>
      <div className="text-center m-auto w-96 mb-20">
        <h1 className="font-normal text-5xl text-neutral-800 mt-16">{title}</h1>
        <p className="font-normal text-xl">{description}</p>
      </div>
      <div className="w-96 m-auto text-center">
        {
          question.map(({question, response}) => (
            <details class="question py-8 border-neutral-400 border-t-2 w-full">
              <summary class="flex items-center text-xl text-neutral-800">{question}
              <button class="ml-auto rotate-90">
              <svg class="fill-current opacity-100 w-5 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
            </button>
            </summary>
    
            <div class="mt-4 leading-normal text-md ">{response}</div>
          </details>
          ))
        }
      <h2 className="text-4xl text-neutral-800 font-normal mt-20 mb-4">{titleOthers}</h2>
      <p className="font-normal text-xl mb-4 text-justify">{others}</p>
      <button className="btn">Contact</button>
      </div>
    </div>
  );
}

export default FAQ;