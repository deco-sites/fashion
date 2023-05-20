export type StringsModal = {
  image: { src: string; alt: string };
  bemvindo: string;
  texto: string;
};

export type StringsInput = {
  primeiroNome: string;
  placeholderNome: string;
  email: string;
  placeholderEmail: string;
  checkBoxTxt: string;
  btnEnviar: string;
};

export interface Props {
  strings: StringsModal;
  inputStrings: StringsInput;
}

function ModalNewsLetter(
  { strings, inputStrings }: Props,
) {
  return (
    <>
      <label for="my-modal-5" class="btn">Abrir Modal</label>
      <input type="checkbox" id="my-modal-5" class="modal-toggle" checked />
      <label for="my-modal-5" class="modal cursor-pointer flex-auto">
        <div class="card lg:card-side bg-base-100 shadow-xl flex-end w-fit">
          <figure class="flex-end h-full">
            <img src={strings.image.src} alt={strings.image.alt} />
          </figure>

          <div class="card-body items-center">
            <h2 class="card-title">{strings.bemvindo}</h2>
            {strings.texto}
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">{inputStrings.primeiroNome}</span>
              </label>
              <input
                type="text"
                placeholder={inputStrings.placeholderNome}
                class="input input-bordered w-full max-w-xs"
              />

              <label class="label">
                <span class="label-text">{inputStrings.email}</span>
              </label>
              <input
                type="text"
                placeholder={inputStrings.placeholderEmail}
                class="input input-bordered w-full max-w-xs"
              />

              <label class="label cursor-pointer justify-normal gap-2">
                <input type="checkbox" class="checkbox" />
                <span class="label-text">{inputStrings.checkBoxTxt}</span>
              </label>
            </div>

            <div class="card-actions justify-center self-baseline w-full">
              <button class="btn w-full">{inputStrings.btnEnviar}</button>
            </div>
          </div>
        </div>
      </label>
    </>
  );
}

export default ModalNewsLetter;
