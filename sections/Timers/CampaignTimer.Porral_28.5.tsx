import Timer, { TimerProps } from "$store/islands/CampaignTimer-Porral_28-5.tsx";

export interface Props {
  title: string;
  url: string;
  /** @title Word link number */
  /** @description Number of the word that will redirect to the event page */
  wordLink: number;
  timer: TimerProps;
  /** @title Button text */
  buttonText: string;
}

export default function CampaingTimer({
  title,
  url,
  wordLink,
  timer,
  buttonText,
}: Props) {
  return (
    <>
      <div class="bg-secondary text-base-100 text-sm text-center md:text-xl flex flex-col md:flex-row md:justify-center md:gap-16 items-center gap-4 px-8 py-4">
        <span>
          {title.split(" ").slice(0, wordLink - 1).join(" ")}{" "}
          <a class="underline" href={url}>
            {title.split(" ")[wordLink - 1]}
          </a>{" "}
          {title.split(" ").slice(wordLink).join(" ")}
        </span>
        <div class="flex md:w-min w-full gap-8 box-border justify-center md:items-center md:gap-16">
          <Timer endDate={timer.endDate} />
          <button class="btn rounded-none capitalize min-h-0 max-h-11 text-base font-normal">
            {buttonText}
          </button>
        </div>
      </div>
    </>
  );
}
