import Button from "$store/components/ui/Button.tsx";

export interface Props {
  /**
   * @format date-time
   */
  date: string;
  text: string;
  labelButton: string;
}

function CampaignTimer({ text, labelButton, date }: Props) {
  const now = new Date().getTime();
  const futureDate = new Date(date).getTime();

  const timeleft = futureDate - now;

  const msPerSecond = 1000;
  const msPerMinute = msPerSecond * 60;
  const msPerHour = msPerMinute * 60;

  const hours = Math.floor(timeleft / msPerHour);
  const minutes = Math.floor((timeleft % msPerHour) / msPerMinute);
  const seconds = Math.floor((timeleft % msPerMinute) / msPerSecond);

  return (
    <div class="bg-orange-500 py-4">
      <div class="flex flex-wrap justify-center items-center lg:gap-16">
        <div class="mb-4 w-full text-white lg:w-max lg:my-0">
          <p class="text-center text-sm lg:text-xl">{text}</p>
        </div>
        <div class="mr-6 flex text-center text-white lg:mr-0">
          <div class="flex w-12 flex-col">
            <div class="text-xl" id="timer">{hours}</div>
            <div class="text-xs">hours</div>
          </div>
          <span class="mx-2 text-xl">:</span>
          <div class="flex w-12 flex-col">
            <div class="text-xl" id="timer">{minutes}</div>
            <div class="text-xs">minutes</div>
          </div>
          <span class="mx-2 text-xl">:</span>
          <div class="flex w-12 flex-col">
            <div class="text-xl" id="timer">{seconds}</div>
            <div class="text-xs">seconds</div>
          </div>
        </div>
        <Button class="rounded-none">{labelButton}</Button>
      </div>
    </div>
  );
}

export default CampaignTimer;
