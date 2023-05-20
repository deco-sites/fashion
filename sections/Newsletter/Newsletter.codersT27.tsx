import { useSignal } from "@preact/signals";
import { Runtime } from "$store/runtime.ts";
import type { JSX } from "preact";

const subscribe = Runtime.create(
  "deco-sites/std/actions/vtex/newsletter/subscribe.ts",
);

export default function LatestPosts() {
  const loading = useSignal(false);

  const handleSubmit: JSX.GenericEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    try {
      loading.value = true;

      const email =
        (e.currentTarget.elements.namedItem("email") as RadioNodeList)?.value;

      await subscribe({ email });
    } finally {
      loading.value = false;
    }
  };

  return (
    <div class="w-full p-4 lg:p-8">
      <div class="bg-[#6D8B61] flex items-center flex-col p-5 gap-5 text-[#FFFFFF] w-full h-full">
        <div class="flex w-full justify-center">
          <h3 class="font-fontFamily text-center text-4xl lg:text-5xl p-4 mb-5">
            Sign up for our newsletter
          </h3>
        </div>

        <form
          class="flex flex-col lg:flex-row gap-4 w-full lg:w-2/5 lg:max-w-md"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Enter your email"
            class="font-fontFamily bg-[#6D8B61] border border-[#AAAAAA] placeholder-[#FFFFFF] text-lg p-2 w-full lg:p-1 lg:pl-2"
          >
          </input>
          <button
            class="font-fontFamily bg-[#FFFFFF] border lg:w-1/3 p-2 text-center text-lg text-zinc-950 lg:p-1"
            disabled={loading}
          >
            Subscribe
          </button>
        </form>
        <p class="font-fontFamily text-sm w-2/3 text-center lg:w-2/5 lg:text-left lg:max-w-md">
          By subscribing you agree to with our {""}
          <span class="font-fontFamily underline text-sm">Privacy Policy.</span>
        </p>
      </div>
    </div>
  );
}