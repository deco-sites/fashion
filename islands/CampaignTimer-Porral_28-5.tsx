import { useEffect, useState } from "preact/hooks";

interface ReadableDate {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function diffToDate(
  targetDate: Date,
): ReadableDate {
  const now: number = new Date().getTime();
  const diff: number = targetDate.getTime() - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days: number = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours: number = Math.floor(
    (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes: number = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds: number = Math.floor((diff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

export interface TimerProps {
  endDate: string;
}

function updateTime({ days, hours, minutes, seconds }: ReadableDate) {
  if (!(days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0)) {
    seconds--;
    if (seconds < 0) {
      minutes--;
      seconds = 59;
    }
    if (minutes < 0) {
      hours--;
      minutes = 59;
    }
    if (hours < 0) {
      days--;
      hours = 23;
    }
  }
  return { days, hours, minutes, seconds };
}

export default function Timer({ endDate }: TimerProps) {
  const [timeRemaining, setTimeRemaining] = useState(
    diffToDate(new Date(endDate)),
  );

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeRemaining) {
        setTimeRemaining(updateTime);
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <div class="flex max-w-xs items-center gap-3">
        <div class="w-1/4 flex flex-col items-center gap-0.5">
          <span class="text-xl">
            {timeRemaining.days.toString().padStart(2, "0")}
          </span>
          <span class="text-xs">dia{timeRemaining.days !== 1 ? "s" : ""}</span>
        </div>
        <div class="text-xl">:</div>
        <div class="w-1/4 flex flex-col items-center gap-0.5">
          <span class="text-xl">
            {timeRemaining.hours.toString().padStart(2, "0")}
          </span>
          <span class="text-xs">horas</span>
        </div>
        <div class="text-xl">:</div>
        <div class="w-1/4 flex flex-col items-center gap-0.5">
          <span class="text-xl">
            {timeRemaining.minutes.toString().padStart(2, "0")}
          </span>
          <span class="text-xs">minutos</span>
        </div>
        <div class="text-xl">:</div>
        <div class="w-1/4 flex flex-col items-center gap-0.5">
          <span class="text-xl">
            {timeRemaining.seconds.toString().padStart(2, "0")}
          </span>
          <span class="text-xs">segundos</span>
        </div>
      </div>
    </>
  );
}
