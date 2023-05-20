interface Props {
  title: string;
}

export default function LatestPosts({ title }: Props) {
  return (
    <div class="w-full h-96 p-4">
      <div class="
      bg-[#6D8B61] 
      flex 
      items-center
      flex-col
      p-5
      gap-10
      text-[#FFFFFF] 
      w-full 
      h-full">
        <div class="flex w-[296px]">
          <h3 class="font-fontFamily        text-center text-4xl p-4">
            Sign up for our newsletter
          </h3>
        </div>

        <div class="flex flex-col gap-4 h-[88px] w-full">
          <input
            type="text"
            placeholder="Enter your email"
            class="font-fontFamily 
          bg-[#6D8B61] 
          border
          border-[#AAAAAA] 
          placeholder-[#FFFFFF]
          text-lg pl-2 pt-2 pb-2 w-full"
          >
          </input>

          <button class="font-fontFamily bg-[#FFFFFF] border w-full pl-2 pt-2 pb-2 text-center text-lg text-zinc-950">
            Subscribe
          </button>

          <p class="font-fontFamily text-base text-center">
            By subscribing you agree to with our <br></br>
            <span class="font-fontFamily underline text-base text-center ">
              Privacy Policy.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
