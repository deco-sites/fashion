import CountdownCampingTime from "../../islands/CountdownCampingTime.tsx";

export interface Props {
  hours: number;
  minutes: number;
  second: number;
  textInput: string;
  nameLink: string;
  link: string;
  button: string;
}

export default function CampignTime(
  { hours, minutes, second, textInput, nameLink, link, button }: Props,
) {
  return (
    <div class="w-full h-19 bg-red-300 flex items-center justify-center gap-4">
      <div class="container py-2 flex items-center justify-around">
        <CountdownCampingTime
          HoursInput={hours}
          MinutesInput={minutes}
          SecondInput={second}
        />
        {textInput
          ? (
            <p class="text-white font-sans font-normal text-lg">
              {textInput}{" "}
              <a href={link} class="underline cursor-pointer">{nameLink}</a>
            </p>
          )
          : (
            <p class="text-white font-sans font-normal text-lg">
              Time left for a campaign to end wth a{" "}
              <a href={!link ? "" : link} class="underline cursor-pointer">
                link
              </a>
            </p>
          )}
        <button class="px-4 py-2 bg-black text-white rounded transition hover:bg-slate-700">
          {button}
        </button>
      </div>
    </div>
  );
}
