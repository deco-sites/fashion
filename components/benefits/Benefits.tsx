import { asset } from "$fresh/runtime.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
  title: string;
  subtitle: string;
  image?: { src?: string; alt?: string };
}
export default function Benefits(props: Props) {
  return (
    <div class="my-10">
      <div class="container flex flex-col m-auto">
        <h1 class="font-medium text-4xl text-center">{props.title}</h1>
        <p class="font-medium text-2xl text-center text-[#787878]">
          {props.subtitle}
        </p>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-[16px] m-10">
        <div class="flex flex-col items-center p-6 max-w-full h-[160px] bg-[#53B4DA]">
          {props.image?.src && (
            <Image
              class="object-cover"
              src={props.image.src}
              alt={props.image.alt}
              width={30}
              height={30}
              loading="lazy"
            />
          )}
          <h1 class="text-xl my-2 font-[400] text-[#FFFFFF] text-center leading-[28px]">
            Benefits title
          </h1>
          <p class="text-sm font-[400] text-[#FFFFFF] text-center leading-[20px]">
            Description of benefits
          </p>
        </div>
        <div class="flex flex-col items-center p-6 max-w-full h-[160px] bg-[#53B4DA]">
          {props.image?.src && (
            <Image
              class="object-cover"
              src={props.image.src}
              alt={props.image.alt}
              width={30}
              height={30}
              loading="lazy"
            />
          )}
          <h1 class="text-xl my-2 font-[400] text-[#FFFFFF] text-center leading-[28px]">
            Benefits title
          </h1>
          <p class="text-sm font-[400] text-[#FFFFFF] text-center leading-[20px]">
            Description of benefits
          </p>
        </div>
        <div class="flex flex-col items-center p-6 max-w-full h-[160px] bg-[#53B4DA]">
          {props.image?.src && (
            <Image
              class="object-cover"
              src={props.image.src}
              alt={props.image.alt}
              width={30}
              height={30}
              loading="lazy"
            />
          )}
          <h1 class="text-xl my-2 font-[400] text-[#FFFFFF] text-center leading-[28px]">
            Benefits title
          </h1>
          <p class="text-sm font-[400] text-[#FFFFFF] text-center leading-[20px]">
            Description of benefits
          </p>
        </div>
        <div class="flex flex-col items-center p-6 max-w-full h-[160px] bg-[#53B4DA]">
          {props.image?.src && (
            <Image
              class="object-cover"
              src={props.image.src}
              alt={props.image.alt}
              width={30}
              height={30}
              loading="lazy"
            />
          )}
          <h1 class="text-xl my-2 font-[400] text-[#FFFFFF] text-center leading-[28px]">
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
