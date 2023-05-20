import { useSignal } from "@preact/signals";
import { Runtime } from "$store/runtime.ts";
import type { JSX } from "preact";

const subscribe = Runtime.create(
  "deco-sites/std/actions/vtex/newsletter/subscribe.ts",
);

export interface Props {
  title?: string;
  placeholder?: string;
  link_privacy_policy?: string;
}

function Newsletter({ title, placeholder, link_privacy_policy }: Props) {
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
    <div class="flex bg-secondary p-4 sm:p-16 sm:max-h-fit flex-col sm:flex-row items-center gap-6  w-full sm:gap-20">
      <form
        class="font-body text-body w-full sm:flex sm:flex-row sm:items-baseline  sm:justify-between form-control"
        onSubmit={handleSubmit}
      >
        <h1 class="text-3xl text-secondary-content sm:mb-0 mb-10">
          {title ? title : `Sign up for our  
          newsletter`}
        </h1>
        <div>
          <div class="flex flex-col sm:flex-row sm:gap-4 sm:items-center mb-4 ">
            <input
              name="email"
              class="py-2 px-3 outline-none flex-1 placeholder:text-Body bg-transparent sm:max-h-[36px]  placeholder:text-secondary-content mb-4 sm:mb-0 w-full max-w-[328px] border-base-300 border-[1px] border-solid "
              type="email"
              placeholder={placeholder ? placeholder : "Enter your email"}
            />
            <button
              class="bg-base-100 py-[6px] h-full w-fit px-3 text-base  dis ing"
              disabled={loading}
            >
              Subscribe
            </button>
          </div>
          <p class="text-sm text-secondary-content ">
            By subscribing you agree to with our{" "}
            <a
              class="underline"
              href={link_privacy_policy ? link_privacy_policy : ""}
            >
              Privacy Policy
            </a>.
          </p>
        </div>
      </form>
    </div>
  );
}

export default Newsletter;
