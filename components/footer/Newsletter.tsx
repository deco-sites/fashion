import { useSignal } from "@preact/signals";
import { Runtime } from "$store/runtime.ts";
import type { JSX } from "preact";

const subscribe = Runtime.create(
  "deco-sites/std/actions/vtex/newsletter/subscribe.ts",
);

function Newsletter() {
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
    <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-20">
      <div class="flex flex-col gap-2 max-w-[400px]">
        <span class="font-medium text-2xl text-primary-content">
          Cadastre-se
        </span>
        <span class="text-sm text-primary-content">
          Fique por dentro das novidades e ganhe 15% de desconto na primeira
          compra. Para mais informações clique aqui.
        </span>
      </div>
      <form
        class="font-body text-body w-full sm:w-[408px] form-control"
        onSubmit={handleSubmit}
      >
        <div class="input-group">
          <input
            name="email"
            class="flex-grow input input-primary"
            placeholder="Seu e-mail"
          />
          <button class="btn disabled:loading" disabled={loading}>
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Newsletter;
