export type StringsModal = {
  bemvindo: string;
  texto: string;
};

export type StringsLabel = {
  primeiroNome: string;
  placeholderNome: string;
  placeholderEmail: string;
  email: string;
};

export interface Props {
  strings: StringsModal;
  inputLabels: StringsLabel;
  checkBoxTxt: string;
}

function ModalNewsLetter(
  { strings, inputLabels, checkBoxTxt }: Props,
) {
  return (
    <>
      <label for="my-modal-5" class="btn">Abrir Modal</label>
      <input type="checkbox" id="my-modal-5" class="modal-toggle" checked />
      <label for="my-modal-5" class="modal cursor-pointer">
        <div class="card card-side bg-base-100 shadow-xl flex flex-wrap">
          <figure class="flex-end h-full">
            <img src="/NKP Modal.jpg" alt="" />
          </figure>
          <div class="card-body items-center">
            <h2 class="card-title">{strings.bemvindo}</h2>
            <p>{strings.texto}</p>

            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">{inputLabels.primeiroNome}</span>
              </label>
              <input
                type="text"
                placeholder={inputLabels.placeholderNome}
                class="input input-bordered w-full max-w-xs"
              />

              <label class="label">
                <span class="label-text">{inputLabels.email}</span>
              </label>
              <input
                type="text"
                placeholder={inputLabels.placeholderEmail}
                class="input input-bordered w-full max-w-xs"
              />

              <label class="label cursor-pointer">
                <input type="checkbox" class="checkbox" />
                <span class="label-text justify-start">{checkBoxTxt}</span>
              </label>
            </div>

            <div class="card-actions justify-center">
              <button class="btn">Enviar</button>
            </div>
          </div>
        </div>
      </label>
    </>
  );
}

export default ModalNewsLetter;
