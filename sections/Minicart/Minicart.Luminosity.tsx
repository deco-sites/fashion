export interface Props {
  productName: string;
  productSize: string;
  productFirstColor: string;
  productSecondColor: string;
  productQuantity: number;
  productPreviousPrice: string;
  productDiscountedPrice: string;
}

export default function MiniCart({
  productName,
  productSize,
  productFirstColor,
  productSecondColor,
  productQuantity,
  productPreviousPrice,
  productDiscountedPrice,
}: Props) {
  return (
    <div class="bg-base-100 relative flex h-40 w-[520px] flex-col shadow-xl">
  <figure class="m-3 items-center">
    <img class="center h- w-32" src="https://dw0jruhdg6fis.cloudfront.net/producao/24866891/G/camisa_preta.jpg" alt="" />
  </figure>

  <div class="gap-54 absolute ml-32 mt-1 flex gap-60 p-4">
    <h2 class="flex-none text-black">{productName}</h2>
    <button>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#000000" viewBox="0 0 256 256">
        <path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path>
      </svg>
    </button>
  </div>
  <div class="absolute ml-36 mt-14 flex flex-col justify-center text-xs">
    <p class="text-gray-400">Size: {productSize}</p>
    <p class="text-gray-400">Color: {productFirstColor}</p>
    <p class="text-gray-400">Color: {productSecondColor}</p>
  </div>

  <div class="text-decoration-dashed absolute ml-36 mt-28 flex flex-row justify-center text-xs">
    <p class="text-gray-400 line-through text-base">$ {productPreviousPrice}</p>
    <p class="text-red-500 text-base ml-1">$ {productDiscountedPrice}</p>
    <div class="ml-40 border p-3">- {productQuantity} +</div>
  </div>
</div>

  );
}
