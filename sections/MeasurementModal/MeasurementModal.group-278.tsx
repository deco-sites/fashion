import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";

export interface Props {
  title?: string;
  text?: string;
  headers?: string[];
  rows?: Array<string[]>;
  productUrl?: string;
  productAltText?: string;
}

export default function MeasurementModal({
  productUrl,
  productAltText,
  headers,
  rows,
  title,
  text,
}: Props) {
  const titleDefault = "Medidas";
  const textDefault = "Compare suas medidas com as deste produto:";
  const headersDefault = ["Col 1", "Col 2", "Col 3"];
  const rowsDefault = [["Cel 1", "Cel 2", "Cel 3"]];
  return (
    <div className="w-screen h-screen absolute top-0 left-0 flex justify-center items-center bg-black/10 p-8">
      <dialog
        open
        className="bg-white w-full h-full relative text-[#292929] max-w-[800px] lg:max-h-[400px] p-0 lg:shadow-md"
      >
        <section className="flex w-full h-full">
          <div className="hidden lg:flex max-w-[300px] w-full h-full bg-[#F0F0F0] justify-center items-center">
            {productUrl?.length
              ? (
                <img
                  src={productUrl}
                  alt={productAltText}
                  className="w-full h-full object-cover"
                />
              )
              : <ImageIcon />}
          </div>
          <div className="flex flex-col gap-5 w-full max-w-[500px] pt-12 px-4 lg:p-10 pb-10">
            <Button class="btn btn-outline btn-circle absolute right-4 top-4 border-[#AAAAAA]">
              <Icon id="XMark" width={28} height={28} strokeWidth={2} />
            </Button>
            <header>
              <h5 className="text-2xl leading-8">{title ?? titleDefault}</h5>
            </header>
            <span className="text-base leading-6">{text ?? textDefault}</span>
            <table className="table-auto text-sm">
              <thead>
                <tr>
                  {headers?.length
                    ? (
                      headers?.map((col) => <th className="pb-6">{col}</th>)
                    )
                    : (
                      headersDefault.map((col) => (
                        <th className="pb-6">{col}</th>
                      ))
                    )}
                </tr>
              </thead>
              <tbody>
                {rows?.length && rows[0].length
                  ? (rows?.map((row) => (
                    <tr className="border-b border-[#F0F0F0]">
                      {row?.map((cel) => (
                        <td className="py-2 text-center">{cel}</td>
                      ))}
                    </tr>
                  )))
                  : (
                    rowsDefault.map((row) => (
                      <tr className="border-b border-[#F0F0F0]">
                        {row.map((cel) => (
                          <td className="py-2 text-center">{cel}</td>
                        ))}
                      </tr>
                    ))
                  )}
                <tr>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </dialog>
    </div>
  );
}

function ImageIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="53"
      height="53"
      fill="none"
      viewBox="0 0 56 56"
    >
      <path
        stroke="#787878"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M38 14.667h.033M1.333 38l13.334-13.334c1.52-1.462 3.245-2.232 5-2.232s3.48.77 5 2.232l16.666 16.667m-6.666-6.666L38 31.332c1.52-1.463 3.245-2.233 5-2.233s3.48.77 5 2.233L54.667 38M11.333 1.333h33.334c5.523 0 10 4.478 10 10v33.334c0 5.523-4.477 10-10 10H11.333c-5.522 0-10-4.477-10-10V11.333c0-5.522 4.478-10 10-10z"
      >
      </path>
    </svg>
  );
}
