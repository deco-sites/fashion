export interface Props {
  title: string;
  hora: number;
  minuto: number;
  segundo: number;
}

export default function CampaingTimer({ title, hora, minuto, segundo }: Props) {
  return (
    <div class="w-full h-32 bg-red-400 flex flex-col content-center justify-center items-center font-sans font-normal text-white gap-2 lg:h-24 lg:flex-row  justify-between px-20 ">
      <p class="w-full text-base text-center ">{title}</p>

      <div class="w-full flex content-center justify-center items-center gap-2 lg:gap-5">
        <div class="w-auto h-11 flex gap-3">
          <div class="flex flex-col items-center w-14 ">
            <span class="text-xl">{hora}</span>
            <span class="text-xs">Hora</span>
          </div>
          <div class="flex items-center">:</div>
          <div class="flex flex-col items-center w-14 ">
            <span class="text-xl">{minuto}</span>
            <span class="text-xs">Minuto</span>
          </div>
          <div class="flex items-center">:</div>
          <div class="flex flex-col items-center w-14 ">
            <span class="text-xl">{segundo}</span>
            <span class="text-xs">Segundo</span>
          </div>
        </div>
        <button class="w-16 h-10 bg-slate-700 text-base">
          Button
        </button>
      </div>
    </div>
  );
}
