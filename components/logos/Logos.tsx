export interface Props {
  title: string;
  description: string;
}

function Logos({ title, description }: Props) {
  return (
    <section>
      <h1>{title}</h1>
      <h4>{description}</h4>
    </section>
  );
}

export default Logos;
