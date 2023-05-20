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
    <div class="card card-side bg-base-100 shadow-xl">
      <figure class="w-96">Imagem</figure>
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
        </div>

        <div class="card-actions justify-end">
        </div>
      </div>
    </div>
  );
}

export default ModalNewsLetter;
