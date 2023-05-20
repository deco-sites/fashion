import { useEffect, useState } from "preact/hooks";

interface Props {
  campaignDate: Date;
}

type Time = {
  hours: string;
  minutes: string;
  seconds: string;
};

function timeLeft(eventDate: Date): Time {
  const currentDate = new Date();
  const timeLeftInMilliseconds = Math.abs(
    currentDate.getTime() - eventDate.getTime(),
  );
  const hours = Math.floor(timeLeftInMilliseconds / 36e5).toString();
  const minutes = Math.floor(timeLeftInMilliseconds / 6e4).toString();
  const seconds = Math.floor(timeLeftInMilliseconds / 1e3).toString();

  return {
    hours,
    minutes,
    seconds,
  };
}

const CampaignTimerHamilton = ({ campaignDate }: Props) => {
  const [fullTimeLeft, setFullTimeLeft] = useState<Time>(
    timeLeft(campaignDate),
  );

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setFullTimeLeft(timeLeft(campaignDate));
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  return (
    <div className="flex items-center gap-2">
      <div className="flex flex-col w-12 items-center">
        <span className="text-xl">
          {fullTimeLeft.hours.padStart(2, "0")}
        </span>
        <span className="text-xs">Hours</span>
      </div>
      <span className="text-xl">:</span>
      <div className="flex flex-col w-12 items-center">
        <span className="text-xl">
          {fullTimeLeft.minutes.padStart(2, "0")}
        </span>
        <span className="text-xs">Minutes</span>
      </div>
      <span className="text-xl">:</span>
      <div className="flex flex-col w-12 items-center">
        <span className="text-xl">
          {fullTimeLeft.seconds.padStart(2, "0")}
        </span>
        <span className="text-xs">Seconds</span>
      </div>
    </div>
  );
};

export default CampaignTimerHamilton;
