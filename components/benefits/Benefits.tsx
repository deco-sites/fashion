import { asset } from "$fresh/runtime.ts";

export interface Props {
  title: string;
}
export default function Benefits(props: Props) {
  return (
    <div class="my-10">
      <div class="container flex flex-col m-auto">
        <h1 class="font-medium text-4xl text-center">Benefits title</h1>
        <p class="font-medium text-2xl text-center text-neutral-subtitle">
          Description of benefits
        </p>
      </div>
      <div class="flex flex-col md:flex-row flex-wrap gap-[16px] m-10">
        <div class="flex-1 flex-col md:flex-row p-6 max-w-full h-[160px] bg-[#53B4DA]">
          <img
            class="container mb-3 w-[30px] h-[30px]"
            src={asset("/icon-deco-4x.png")}
          />
          <h1 class="text-xl mb-2 font-[400] text-[#FFFFFF] text-center leading-[28px]">
            Benefits title
          </h1>
          <p class="text-sm font-[400] text-[#FFFFFF] text-center leading-[20px]">
            Description of benefits
          </p>
        </div>
        <div class="flex-1 flex-col md:flex-row p-6 max-w-full h-[160px] bg-[#53B4DA]">
          <img
            class="container mb-3 w-[30px] h-[30px]"
            src={asset("/icon-deco-4x.png")}
          />
          <h1 class="text-xl mb-2 font-[400] text-[#FFFFFF] text-center leading-[28px]">
            Benefits title
          </h1>
          <p class="text-sm font-[400] text-[#FFFFFF] text-center leading-[20px]">
            Description of benefits
          </p>
        </div>
        <div class="flex-1 flex-col md:flex-row p-6 max-w-full h-[160px] bg-[#53B4DA]">
          <img
            class="container mb-3 w-[30px] h-[30px]"
            src={asset("/icon-deco-4x.png")}
          />
          <h1 class="text-xl mb-2 font-[400] text-[#FFFFFF] text-center leading-[28px]">
            Benefits title
          </h1>
          <p class="text-sm font-[400] text-[#FFFFFF] text-center leading-[20px]">
            Description of benefits
          </p>
        </div>
        <div class="flex-1 flex-col md:flex-row p-6 max-w-full h-[160px] bg-[#53B4DA]">
          <img
            class="container mb-3 w-[30px] h-[30px]"
            src={asset("/icon-deco-4x.png")}
          />
          <h1 class="text-xl mb-2 font-[400] text-[#FFFFFF] text-center leading-[28px]">
            Benefits title
          </h1>
          <p class="text-sm font-[400] text-[#FFFFFF] text-center leading-[20px]">
            Description of benefits
          </p>
        </div>
      </div>
    </div>
  );
}
