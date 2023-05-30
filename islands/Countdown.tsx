import { useEffect, useState } from "preact/hooks";

const useCountdown = (targetDate: string) => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime(),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown: number) => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
  const totalHours = (days * 24) + hours;

  return [days, hours, minutes, seconds, totalHours];
};

const Countdown = ({ targetDate }: { targetDate: string }) => {
  const [days, hours, minutes, seconds, totalHours] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0 || !targetDate) {
    return <span class="text-accent-content text-2xl">Expired</span>;
  } else {
    return (
      <div
        class={`grid grid-flow-col gap-5 text-center auto-cols-max items-center`}
      >
        <div class="flex flex-col text-accent-content">
          <span class="countdown  font-normal text-5xl">
            <span style={{ "--value": totalHours }}></span>
          </span>
          Hours
        </div>
        <div>
          :
        </div>
        <div class="flex flex-col text-accent-content">
          <span class="countdown  font-normal text-5xl">
            <span style={{ "--value": minutes }}></span>
          </span>
          Minutes
        </div>
        <div>
          :
        </div>
        <div class="flex flex-col text-accent-content">
          <span class="countdown  font-normal text-5xl">
            <span style={{ "--value": seconds }}></span>
          </span>
          Seconds
        </div>
      </div>
    );
  }
};

export default Countdown;
