export type teste = {
  a: string;
  b?: string;
};

export default function TestComp({ a, b }: teste) {
  return (
    <>
      <div>TestComp</div>
      <div>
        <h2>{a}</h2>
        <h3>{b}</h3>
      </div>
    </>
  );
}
