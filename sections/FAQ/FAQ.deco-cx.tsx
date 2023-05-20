export interface Props {
  mode: "full" | "compact";
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

export default function FAQ({ questions, mode }: Props) {
  const containerClass = mode === "compact" ? "w-1/2" : "w-full"

  return (
    <div class={containerClass}>
      <ul>
        {questions.map(({
          question,
        }) => <li>{question}</li>)}
      </ul>
    </div>
  );
}
