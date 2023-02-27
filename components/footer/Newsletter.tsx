import Text from "$store/components/ui/Text.tsx";

function Newsletter() {
  return (
    <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-20">
      <div class="flex flex-col gap-2 max-w-[400px]">
        <Text variant="display-strong" tone="interactive-default">
          Cadastre-se
        </Text>
        <Text variant="caption-regular" tone="interactive-default">
          Fique por dentro das novidades e ganhe 15% de desconto na primeira
          compra. Para mais informações clique aqui.
        </Text>
      </div>
      <form class="flex flex-row items-center gap-2 font-body-strong text-body-strong w-full sm:w-[408px]">
        <input
          class="py-2 px-3 flex-grow bg-decorative-one rounded text-interactive-default border-1 border-default"
          placeholder="Seu e-mail"
        />
        <button
          class="py-2 px-3 bg-dark-interactive-default rounded"
          type="bgutton" // prevent form's default behavior
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default Newsletter;
