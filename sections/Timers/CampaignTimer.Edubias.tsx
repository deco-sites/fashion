export interface Props {
  title: string;
  hours?: number;
  minutes?: number;
  seconds: number;
}

export default function CampaignTimer(
  { title, hours = 0, minutes = 0, seconds = 0 }: Props,
) {
  return (
    <div className="h-28 p-4 bg-red-400 flex flex-col justify-center items-center text-white">
      <h2 className="text-sm mb-4">{title}</h2>
      <div className="flex">
        <div className="flex">
          <div>
            <p>{hours}</p>
            <p>Hours</p>
          </div>
          <p>:</p>
          <div>
            <p>{minutes}</p>
            <p>Minutes</p>
          </div>
          <p>:</p>
          <div>
            <p>{seconds}</p>
            <p>Seconds</p>
          </div>
        </div>
        <button>Button</button>
      </div>
    </div>
  );
}
