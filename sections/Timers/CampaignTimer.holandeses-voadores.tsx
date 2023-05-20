export interface Props {
  width: "full" | "compact";
  title: string;
  labelLink: string;
  url: string;
  timer: number;
  labelButton: string;
}

export default function CampaignTimer(
  { width, title, labelLink, url, timer, labelButton }: Props,
) {
  const containerClass = width === "full" ? "w-full" : "w-1/2";

  return (
    <div
      className={`flex flex-row items-center justify-between flex-wrap gap-4 px-12 py-6 ${containerClass} bg-red-400`}
    >
      <div className="flex flex-row gap-1 text-gray-100 text-xl">
        {title}{" "}
        <a href={url} className="underline text-gray-100 text-xl">
          {labelLink}
        </a>
      </div>

      <div className="flex gap-5 font-sans text-gray-100 text-4xl">
        <div className="flex flex-col text-center">
          <span className="countdown font-sans  text-4xl">
            <span style={{ "--value": timer }}></span>
          </span>
          <span className="text-gray-100 text-sm">Hours</span>
        </div>
        :
        <div className="flex flex-col text-center">
          <span className="countdown text-gray-100 font-sans text-4xl">
            <span style={{ "--value": 0 }}></span>
          </span>
          <span className="text-gray-100 text-sm">Minutes</span>
        </div>
        :
        <div className="flex flex-col text-center">
          <span className="countdown text-gray-100 font-sans text-4xl">
            <span style={{ "--value": 0 }}></span>
          </span>
          <span className="text-gray-100 text-sm">Seconds</span>
        </div>
      </div>

      <button className="btn bg-gray-700 rounded-none">
        {labelButton}
      </button>
    </div>
  );
}
