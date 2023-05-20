import Countdown from "../../islands/Countdown.tsx";

export interface Props {
  title: string;
  link: string;
  targetDate: string;
  button_text: string;
  button_link: string;
}

export default function Timer(
  {
    title = "Time left for a campaign to end with a link",
    link = "www.google.com",
    targetDate = "2023-05-20T18:19:50",
    button_text = "Visitar",
  }: Props,
) {
  return (
    <div className="bg-[#E37A69] w-full text-textwhite flex justify-center font-albert font-light">
      <div className="flex flex-col md:flex-row p-2 gap-2 md:gap-10 md:items-center">
        <a href={link} className="text-md flex-1">
          {title}
        </a>
        <div className="flex justify-between items-center gap-6">
          <Countdown targetDate={targetDate} />
          <button className="px-3 py-2 bg-btnblue text-textwhite text-sm">
            {button_text}
          </button>
        </div>
      </div>
    </div>
  );
}
