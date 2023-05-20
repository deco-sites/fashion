import Icon from "$store/components/ui/Icon.tsx";
import Button from "$store/components/ui/Button.tsx";

export interface Props {
  title?: string;
  text?: string;
  headers: string[];
  rows: Array<string[]>;
}

export default function MeasurementModal({
  title = "Medidas",
  text = "Compare suas medidas com as deste produto:",
  headers,
  rows,
}: Props) {
  return (
    <div className="w-screen h-screen absolute top-0 left-0 flex justify-center items-center bg-black/10 p-8">
      <dialog
        open={true}
        className="bg-white w-full h-full pt-12 px-4 pb-10 relative text-[#292929]"
      >
        <section className="flex flex-col gap-5">
          <Button class="btn btn-outline btn-circle absolute right-4 top-4 border-[#AAAAAA]">
            <Icon id="XMark" width={28} height={28} strokeWidth={2} />
          </Button>
          <header>
            <h5 className="text-2xl leading-8">{title}</h5>
          </header>
          <span className="text-base leading-6">{text}</span>
          <table className="table-auto text-sm">
            <thead>
              <tr>
                {headers.map((col) => <th className="pb-6">{col}</th>)}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr className="border-b border-[#F0F0F0]">
                  {row.map((cel) => <td className="py-2 text-center">{cel}
                  </td>)}
                </tr>
              ))}
              <tr>
              </tr>
            </tbody>
          </table>
        </section>
      </dialog>
    </div>
  );
}
