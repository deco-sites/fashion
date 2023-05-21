import { useEffect, useState } from "preact/hooks";

const Countdown = ({ date }: { date: string }) => {
  const now = new Date().getTime();
  const futureDate = new Date(date).getTime();

  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const msPerSecond = 1000;
  const msPerMinute = msPerSecond * 60;
  const msPerHour = msPerMinute * 60;

  useEffect(() => {
    const timer = setInterval(() => {
      const updatedNow = new Date().getTime();
      const updatedTimeleft = futureDate - updatedNow;

      setHours(Math.floor(updatedTimeleft / msPerHour));
      setMinutes(Math.floor((updatedTimeleft % msPerHour) / msPerMinute));
      setSeconds(Math.floor((updatedTimeleft % msPerMinute) / msPerSecond));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div class="mr-6 flex text-center text-white lg:mr-0 order-2">
      {futureDate > now
        ? (
          <>
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
          </>
        )
        : <p class="text-sm lg:text-xl">Expirado</p>}
    </div>
  );
};

export default Countdown;
