export interface Props {
  title?: string;
  text?: string;
  headers: string[];
  rows: Array<string[]>;
}

export default function MeasurementModal({
  title = "Medidas",
  text = "Compare suas medidas com as deste produto",
  headers,
  rows,
}: Props) {
  return (
    <div className="w-screen h-screen absolute top-0 left-0 flex justify-center items-center bg-black/10 p-8">
      <div className="bg-white w-full h-full pt-12 px-4 pb-10 relative">
        <label className="btn btn-outline btn-circle absolute right-4 top-4">
          ✕
        </label>
        <h5>{title}</h5>
        <span>{text}</span>
        <table>
          <thead>
            <tr>
              {headers.map((col) => <th>{col}</th>)}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => <tr>{row.map((cel) => <td>{cel}</td>)}</tr>)}
            <tr>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
