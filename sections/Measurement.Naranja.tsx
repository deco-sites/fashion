import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Table {
  data: Array<{ column: string; values: string[] }>;
  image?: LiveImage;
}

function generateTable({ data }: Table) {
  let rows = 0;
  data.forEach(({ values }) => {
    if (values.length > rows) {
      rows = values.length;
    }
  });
  const dataTable = [];
  for (let i = 0; i < rows; i += 1) {
    const tr = [];
    for (let z = 0; z < data.length; z += 1) {
      tr.push(<td className="py-2 px-7 text-center">{data[z].values[i]}</td>);
    }
    dataTable.push(
      <tr className="border-b-[1px] border-b-[#F0F0F0]">{tr}</tr>,
    );
  }
  return dataTable;
}
export default function Measurement({ data, image }: Table) {
  return (
    <div className="bg-black/75 w-full h-screen fixed top-0 left-0 z-[999]">
      <button className="absolute w-6 h-6 top-14 right-14">
        <img
          src="/svg/close.svg"
          alt="Close Button"
          className="w-full h-full"
        />
      </button>
      <div className="h-screen m-8 bg-white  flex">
        <div className="hidden md:block w-80 h-full">
          <img src={image} alt="" />
        </div>
        <div className="px-10">
          <div className="text-2xl mt-12">Medidas</div>
          <p className="my-5">Compare suas medias com as deste produto:</p>
          <div className=" flex justify-center">
            <table>
              <thead>
                <tr>
                  {data.map((data) => (
                    <th className="font-normal">{data.column}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {generateTable({ data })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
