import Button from "$store/components/ui/Button.tsx";
export type iDate = {
  day: number;
  month: number;
  year: number;
};

export type iButton = {
  label: string;
  href: string;
};
export type Props = {
  content: string;
  variant: "left" | "right" ;
  button: iButton;
  date: iDate;
};

export default function CampaignTimer(props: Props) {
  return (
    <>
      <div class="w-full bg-accent flex flex-row justify-center items-center md:gap-9 gap-4 text-white p-4 flex-wrap">
        <input
          type="hidden"
          value={`${props.date.year}-${props.date.month}-${props.date.day}`}
        />
        <p class={`md:flex-shrink-0 text-xl m-0 text-center ${props.variant == 'right'? "order-1": "order-2"}`}>{props.content}</p>
        <ul class={`flex items-center gap-2 ${props.variant == 'left'? "order-1": "order-2"}`}>
          <li class={`flex justify-center items-center flex-col`}>
            <p data-hour class="text-xl" />
            <span class="text-xs">Hours</span>
          </li>
          <li class={`flex justify-center items-center flex-col`}>
            <span class="text-xl">:</span>
          </li>
          <li class="flex justify-center items-center flex-col">
            <p data-minute class="text-xl" />
            <span class="text-xs">Minutes</span>
          </li>
          <li class={`flex justify-center items-center flex-col`}>
            <span class="text-xl">:</span>
          </li>
          <li class="flex justify-center items-center flex-col">
            <p data-second class="text-xl" />
            <span class="text-xs">Seconds</span>
          </li>
        </ul>
        <Button class="w-fit p-2 rounded-none order-3" href={props.button.href}>
          {props.button.label}
        </Button>
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: `
    (
        ${
            (function timer() {
              setInterval(() => {
                const val = document.querySelector("input[type=hidden]");
                const end = new Date((val as HTMLInputElement).value);
                const time = new Date();
                const count = -time.getTime() + end.getTime();

                const dataHour = document.querySelector("p[data-hour]");
                const dataMinute = document.querySelector("p[data-minute]");
                const dataSecond = document.querySelector("p[data-second]");
                if (dataHour) {
                  (dataHour as HTMLDivElement).innerText =
                    (count / (1000 * 60 * 60)).toString().split(".")[0];
                }
                if (dataMinute) {
                  (dataMinute as HTMLDivElement).innerText =
                    ((count / (1000 * 60)) % 60).toString().split(".")[0];
                }
                if (dataSecond) {
                  (dataSecond as HTMLDivElement).innerText =
                    ((count / 1000) % (60)).toString().split(".")[0];
                }
              }, 1000);
            }).toString()
          })()
    `,
        }}
      >
      </script>
    </>
  );
}
