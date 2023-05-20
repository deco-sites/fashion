export interface Props {
  title: string;
  hours?: string;
  minutes?: string;
  seconds: string;
  textButton: string;
}

export default function CampaignTimer(
  { title, hours = "00", minutes = "00", seconds, textButton }: Props,
) {
  return (
    <div class="h-28 py-4 px-16 w-screen bg-accent flex flex-col justify-center
      items-center text-accent-content gap-4 md:flex-row md:gap-16">
      <h2 class="text-sm leading-5 md:text-xl">{title}</h2>
      <div class="flex gap-6 md:gap-16">
        <div class="flex gap-2 items-center">
          <div class="flex flex-col items-center">
            <p class="text-xl leading-7">{hours}</p>
            <p class="text-xs leading-4">Hours</p>
          </div>
          <p class="text-xl leading-7">:</p>
          <div class="flex flex-col items-center">
            <p class="text-xl leading-7">{minutes}</p>
            <p class="text-xs leading-4">Minutes</p>
          </div>
          <p class="text-xl leading-7">:</p>
          <div class="flex flex-col items-center">
            <p class="text-xl leading-7">{seconds}</p>
            <p class="text-xs leading-4">Seconds</p>
          </div>
        </div>
        <button class="flex items-center gap-2 py-2 px-3 justify-center bg-primary
          text-primary-content leading-6">
          {textButton}
        </button>
      </div>
    </div>
  );
}
