import FooterAccordion, { sections } from "../components/FooterAccordion.tsx";
import Icon from "../components/ui/Icon.tsx";

export default function Footer() {
  return (
    <footer class="w-full">
      <div class="hidden md:block bg-[#353535] w-full">
        <div class="flex justify-between p-8 w-9/12 mx-auto">
          {sections.map(({ label, content }) => (
            <div class="flex flex-col mr-12">
              <span class="text-white uppercase mb-4 text-xs">{label}</span>
              {content}
            </div>
          ))}
        </div>
      </div>

      <div class="md:hidden w-full">
        <FooterAccordion />
      </div>

      <div className="flex flex-row flex-col justify-between justify-center items-center px-3 pt-2 pb-5 w-full">
        <div class="flex flex-col items-center">
          <ul class="flex items-center justify-center mt-3">
            <li class="mr-[8px] last:m-0">
              <a
                href="#"
                class="flex items-center justify-center w-8 h-8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon id="Facebook" class="w-auto" />
              </a>
            </li>
            <li class="mr-[8px] last:m-0">
              <a
                href="https://www.instagram.com/deco.cx"
                class="flex items-center justify-center w-8 h-8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon id="Instagram" class="w-auto" />
              </a>
            </li>
            <li class="mr-[8px] last:m-0">
              <a
                href="#"
                class="flex items-center justify-center w-8 h-8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon id="Tiktok" class="w-auto" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="w-full">
        <div class="flex justify-center px-3 pb-4">
          <p class="text-xs text-center">
            Site by deco.cx
          </p>
        </div>
      </div>
    </footer>
  );
}
