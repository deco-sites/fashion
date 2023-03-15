import Text from "$store/components/ui/Text.tsx";
import Button from "$store/components/ui/Button.tsx";
import Container from "$store/components/ui/Container.tsx";
import { useId } from "preact/hooks";

const script = (id: string) => `
const callback = () => {
  const KEY = 'store-cookie-consent';
  const ACCEPTED = 'accepted';
  const HIDDEN = "translate-y-[200%]";
  
  const consent = localStorage.getItem(KEY);
  const elem = document.getElementById("${id}");
  
  if (consent !== ACCEPTED) {
    elem.querySelector('[data-button-cc-accept]').addEventListener('click', function () {
      localStorage.setItem(KEY, ACCEPTED);
      elem.classList.add(HIDDEN);
    });
    elem.querySelector('[data-button-cc-close]').addEventListener('click', function () {
      elem.classList.add(HIDDEN);
    });
    elem.classList.remove(HIDDEN);
  }
};

window.addEventListener('scroll', callback, { once: true });
`;

function CookieConsent() {
  const id = useId();

  return (
    <>
      <div
        id={id}
        class="transform-gpu translate-y-[200%] transition fixed bottom-0 sm:bottom-4 w-screen"
      >
        <Container class="px-4 py-4 rounded border border-default flex flex-col sm:flex-row gap-4 items-start sm:items-center shadow bg-default z-50">
          <Text class="flex-grow" variant="caption">
            Utilizamos cookies em nosso site para melhorar seu desempenho,
            segurança e personalizar conteúdo e anúncios.
          </Text>

          <a href="https://www.deco.cx">
            <Text class="underline" variant="caption">
              Nossa política de privacidade
            </Text>
          </a>

          <div class="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <Button data-button-cc-accept variant="primary">Aceitar</Button>
            <Button data-button-cc-close variant="secondary">Fechar</Button>
          </div>
        </Container>
      </div>
      <script type="module" dangerouslySetInnerHTML={{ __html: script(id) }} />
    </>
  );
}

export default CookieConsent;
