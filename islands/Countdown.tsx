import { useEffect, useState } from "preact/hooks";

interface CountdownProps {
  targetDate: string;
}

function getTimeDifference(targetDate: string) {
  const difference = new Date(targetDate).getTime() - new Date().getTime();

  // Convert milliseconds to seconds
  const seconds = Math.floor(difference / 1000);

  // Convert seconds to minutes
  const minutes = Math.floor(seconds / 60);

  // Convert minutes to hours
  const hours = Math.floor(minutes / 60);

  // Return the time difference as an object
  return {
    hours: hours % 24,
    minutes: minutes % 60,
    seconds: seconds % 60,
  };
}

export default function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState(getTimeDifference(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeDifference(targetDate));
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, [targetDate]);

  return (
    <div className="flex items-center gap-2">
      <div className="flex flex-col items-center text-textwhite">
        <p className="text-lg">
          {timeLeft.hours < 10 ? "0" + String(timeLeft.hours) : timeLeft.hours}
        </p>
        <p className="text-xs">Hours</p>
      </div>
      <p>:</p>
      <div className="flex flex-col items-center">
        <p className="text-lg">
          {timeLeft.minutes < 10
            ? "0" + String(timeLeft.minutes)
            : timeLeft.minutes}
        </p>
        <p className="text-xs">Minutes</p>
      </div>
      <p>:</p>
      <div className="flex flex-col items-center">
        <p className="text-lg">
          {timeLeft.seconds < 10
            ? "0" + String(timeLeft.seconds)
            : timeLeft.seconds}
        </p>
        <p className="text-xs">Seconds</p>
      </div>
    </div>
  );
}
