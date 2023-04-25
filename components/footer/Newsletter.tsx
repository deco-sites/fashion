function Newsletter() {
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
      <form class="flex flex-row items-center gap-2 font-body text-body w-full sm:w-[408px]">
        <input
          class="py-2 px-3 flex-grow bg-primary rounded text-primary-content border border-solid border-base-100"
          placeholder="Seu e-mail"
        />
        <button
          class="py-2 px-3 bg-base-100 text-base-content rounded"
          type="button" // prevent form's default behavior
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default Newsletter;
