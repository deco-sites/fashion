export interface Props {
  link: string;
  hours: number;
  minutes: number;
  seconds: number;
  button: string;
}

export default function Navbar(params: Props) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-2 lg:gap-16 bg-red-300 p-4">
      <p className="lg:text-xl text-center text-white text-sm">Time left for a campaign to end with a <a href={params.link ?? "#"} className="font-medium underline hover:no-underline">link</a></p>
      <div className="flex justify-center lg:gap-14">
        <div className="grid grid-flow-col gap-6 p-3">
          <div className="flex flex-col items-center">
            <span className="countdown text-xl text-white">
              <span style={{"--value":params.hours ?? 12}}></span>
            </span>
            <a className="text-white text-xs">Hours</a>
          </div> 
          <div className="flex flex-col items-center">
            <span className="countdown font-sans text-xl text-white">
              <span style={{"--value":params.minutes ?? 20}}></span>
            </span>
            <p className="text-white text-xs">Minutes</p>
          </div> 
          <div className="flex flex-col items-center">
            <span className="countdown font-sans text-xl text-white">
              <span style={{"--value":params.seconds ?? 10}}></span>
            </span>
            <p className="text-white text-xs">Seconds</p>
          </div>
        </div>
        <button className="ml-4 h-10 btn bg-slate-800 rounded-none">
          {params.button ?? "Button"}
        </button>
      </div>

    </div>
  )
}