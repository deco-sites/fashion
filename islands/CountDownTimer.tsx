import { useState } from "preact/hooks";

interface Timer {
  hours: number;
  minutes: number;
  seconds: number;
}

interface Props {
  endDate: string;
}

const defaultTimer = {
  hours: 0,
  minutes: 0,
  seconds: 0,
};

export default function CountDownTimer({ endDate }: Props) {
  const [timer, setTimer] = useState<Timer>(defaultTimer);

  function scriptCountDown() {
    const now = new Date().getTime();
    const countDownDate = dateFormat(endDate);

    const x = setTimeout(function () {
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      ) + days * 24;
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / (1000));

      if (seconds === timer.seconds) return;

      setTimer({
        hours,
        minutes,
        seconds,
      });
    }, 1000);
  }

  function dateFormat(date: string) {
    const dateArrFormat = date.split(" ");
    const dateArr = dateArrFormat[0].split("/");
    const dateFormated = new Date(
      `${dateArr.reverse().join("-")} ${dateArrFormat[1]}`,
    ).getTime();
    return dateFormated;
  }

  scriptCountDown();

  return (
    <div className="flex gap-5 justify-center items-center px-3">
      <div className="flex flex-col justify-center items-center">
        <span>{timer.hours < 10 ? "0" + timer.hours : timer.hours}</span>
        <span>Hours</span>
      </div>
      <span>:</span>
      <div className="flex flex-col justify-center items-center">
        <span>{timer.minutes < 10 ? "0" + timer.minutes : timer.minutes}</span>
        <span>Minutes</span>
      </div>
      <span>:</span>
      <div className="flex flex-col justify-center items-center">
        <span>{timer.seconds < 10 ? "0" + timer.seconds : timer.seconds}</span>
        <span>Seconds</span>
      </div>
    </div>
  );
}
