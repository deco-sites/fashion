import Button from "$store/components/ui/Button.tsx";
import Countdown from "$store/islands/Countdown.tsx";

export interface Props {
  /**
   * @format date-time
   */
  date?: string;
  text?: string;
  labelButton?: string;
  link?: string;
}

function CampaignTimer({ text = 'Texto de chamada', labelButton = 'Botão', date = 'Sun May 21 2023 10:27:31 GMT-0300', link = '#' }: Props) {
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
    <div class="bg-primary py-4">
      <div class="flex flex-wrap justify-center items-center lg:gap-16">
        <div class="mb-4 w-full text-white lg:w-max lg:my-0">
          <p class="text-center text-sm lg:text-xl">{text}</p>
        </div>
        <Countdown date={date} />
        <a href={link}>
            <Button class="rounded-none">{labelButton}</Button>
        </a>
      </div>
    </div>
  );
}

export default CampaignTimer;
