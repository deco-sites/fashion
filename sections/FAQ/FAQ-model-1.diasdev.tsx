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
      <h1>{title}</h1>
      <p>{description}</p>
      {
        question.map(({question, response}) => (
          <div>
            <details>
              <summary>{question}</summary>
              <p>{response}</p>
            </details>
          </div>
        ))
      }
      <h2>{titleOthers}</h2>
      <p>{others}</p>
      <button className="btn btn-accent">Contact</button>
    </div>
  );
}

export default FAQ;