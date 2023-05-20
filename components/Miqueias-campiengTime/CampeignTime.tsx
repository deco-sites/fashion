import CountdownCampingTime from "../../islands/CountdownCampingTime.tsx";
import TextCampeignTime from './TextCampeignTime.tsx'

export interface Props {
  hours: number;
  minutes: number;
  second: number;
  campaignDescription: string;
  clickableLinkDescription: string;
  campaignLink: string;
  buttonDecription: string;
}

export default function CampignTime(
  { hours, minutes, second, campaignDescription, clickableLinkDescription, campaignLink, buttonDecription }: Props,
) {
  return (
    <div class="w-full h-19 bg-red-300 flex items-center justify-center gap-4">
      <div class="container py-2 flex items-center justify-around flex-col mb-4 sm:flex-row">
          <div class="block sm:hidden">
            <TextCampeignTime textInput={campaignDescription} nameLink={clickableLinkDescription} link={campaignLink}/>
          </div>
          <div class="w-full flex flex-row gap-6 items-center justify-center sm:gap-16">
            <CountdownCampingTime
            HoursInput={hours}
            MinutesInput={minutes}
            SecondInput={second}
          />
          <div class="hidden sm:block">
            <TextCampeignTime textInput={campaignDescription} nameLink={clickableLinkDescription} link={campaignLink}/>
          </div>
          <button class="px-4 py-2 bg-black text-white rounded transition hover:bg-slate-700">
            {buttonDecription ? "Button" : {buttonDecription} }
          </button>
          </div>
      </div>
    </div>
  );
}
