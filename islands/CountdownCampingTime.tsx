import {useState, useEffect} from 'preact/hooks';

export interface Props {
    HoursInput: number,
    MinutesInput: number,
    SecondInput: number
}

export default function CountdownCampingTime({HoursInput, MinutesInput, SecondInput}: Props){

    const [hrs, setHrs] = useState(HoursInput);
    const [minutes, setMinutes] = useState(MinutesInput);
    const [sec, setSec] = useState(SecondInput);

    useEffect(() => {
        const contadorInterval = setInterval(() => {
          if (sec > 0) {
            setSec(sec - 1);
          } else {
            if (minutes > 0) {
                setMinutes(minutes - 1);
                setSec(59);
            } else {
              if (hrs > 0) {
                setHrs(hrs - 1);
                setMinutes(59);
                setSec(59);
              }
            }
          }
        }, 1000);
    
        return () => {
          clearInterval(contadorInterval);
        };
      }, [hrs, minutes, sec]);

    return (
        <div class="flex flex-row gap-3 items-center">
            <div class="flex flex-col items-center gap-0.5">
                <p class="text-white font-sans text-lg">{hrs < 10 && '0'}{hrs}</p>
                <span class="text-white font-sans text-xs">Hours</span>
            </div>
            <span class="text-white font-semibold">:</span>
            <div class="flex flex-col items-center gap-0.5">
                <p class="text-white font-sans text-lg">{minutes < 10 && '0'}{minutes}</p>
                <span class="text-white font-sans text-xs">Minutes</span>
            </div>
            <span class="text-white font-semibold">:</span>
            <div class="flex flex-col items-center gap-0.5">
                <p class="text-white font-sans text-lg">{sec < 10 && '0'}{sec}</p>
                <span class="text-white font-sans text-xs">Second</span>
            </div>
        </div>
    )

} 