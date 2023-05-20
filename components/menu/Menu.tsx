export interface Props {
  link1: string;
  link2: string;
  link3: string;
  link4: string;
}

export default function Menu({ link1, link2, link3, link4 }: Props) {
  return (
    <div class="flex justify-evenly  w-screen font-sans ">
      <div class=" group  w-[188px] text-center">
        <p class="border-b-2 border-black"></p>
        <ul class="hidden group-hover:block h-80  w-[68vw] absolute left-[16vw] bg-gray-400">
          <li class="my-4">
            <a href={link1}>produto1</a>
          </li>
          <li class="my-4">
            <a href={link2}>produto2</a>
          </li>
          <li class="my-4">
            <a href={link3}>produto3</a>
          </li>
          <li class="my-4">
            <a href={link4}>produto4</a>
          </li>
        </ul>
      </div>
      <div class="items-center group  w-[188px] text-center">
        <p class="border-b-2 border-black"></p>
        <ul class="hidden group-hover:block h-80  w-[68vw] absolute left-[16vw] items-center text-center bg-gray-400">
          <li class="my-4">
            <a href={link1}>produto1</a>
          </li>
          <li class="my-4">
            <a href={link2}>produto2</a>
          </li>
          <li class="my-4">
            <a href={link3}>produto3</a>
          </li>
          <li class="my-4">
            <a href={link4}>produto4</a>
          </li>
        </ul>
      </div>
      <div class="group w-[188px] text-center">
        <p class="border-b-2 border-black"></p>
        <ul class="hidden group-hover:block h-80  w-[68vw] absolute right-[15vw] bg-gray-400 ">
          <li class="my-4">
            <a href={link1}></a>produto1
          </li>
          <li class="my-4">
            <a href={link2}>produto2</a>
          </li>
          <li class="my-4">
            <a href={link3}>produto3</a>
          </li>
          <li class="my-4">
            <a href={link4}>produto4</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
