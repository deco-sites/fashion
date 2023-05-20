import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Menu from "./Header.tsx";

export interface Props {
  link0: LiveImage;
  link1: string;
  link2: string;
  link3: string;
  link4: string;

  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
}

export default function Header(
  { link0, link1, link2, link3, link4, text1, text2, text3, text4 = "Login" }:
    Props,
) {
  return (
    <>
      <div class="mx-20 my-20 rounded-3xl flex justify-evenly items-center h-40   bg-[#18ff14bb] font-sans ">
        <img src={link0} class="max-w-16 max-h-16 " />
        <input
          class="text margin rounded-3xl border-transparent w-[30vw] h-6 "
          type="text"
          placeholder="escreva"
        />
        <ul class="items-center flex justify-evenly justify-items-center w-[500px] h-5 text-center">
          <li class="bg-white h-5 w-24 rounded-3xl">
            <a href={link1}></a>
            {text1}
          </li>
          <li class="bg-white h-5 w-24 rounded-3xl">
            <a href={link2}></a>
            {text2}
          </li>
          <li class="bg-white h-5 w-24 rounded-3xl">
            <a href={link3}></a>
            {text3}
          </li>
          <li class="bg-white hover:bg-[#699668] h-5 w-24 rounded-3xl">
            <a href={link4}></a>
            {text4}
          </li>
        </ul>
      </div>
      <Menu></Menu>
    </>
  );
}
