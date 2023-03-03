import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import Text from "$store/components/ui/Text.tsx";
import Container from "$store/components/ui/Container.tsx";

import Newsletter from "./Newsletter.tsx";
import type { ComponentChildren } from "preact";

export type IconItem = { icon: AvailableIcons };
export type StringItem = {
  label: string;
  href: string;
};

export type Item = StringItem | IconItem;

export type Section = {
  label: string;
  children: Item[];
};

const isIcon = (item: Item): item is IconItem =>
  // deno-lint-ignore no-explicit-any
  typeof (item as any)?.icon === "string";

const defaultSections: Section[] = [
  {
    label: "Sobre",
    children: [
      {
        label: "Quem somos",
        href: "https://www.deco.cx",
      },
      {
        label: "Privacidade e segurança",
        href: "https://www.deco.cx",
      },
      {
        label: "Termos de uso",
        href: "https://www.deco.cx",
      },
      {
        label: "Trabalhe Conosco",
        href: "https://www.deco.cx",
      },
    ],
  },
  {
    label: "Atendimento",
    children: [
      {
        label: "Central de Atendimento",
        href: "https://www.deco.cx",
      },
      {
        label: "Fale conosco pelo WhatsApp",
        href: "https://www.deco.cx",
      },
      {
        label: "Troca e Devolução",
        href: "https://www.deco.cx",
      },
    ],
  },
  {
    label: "Minha Conta",
    children: [
      {
        label: "Login/Cadastro",
        href: "https://www.deco.cx",
      },
      {
        label: "Meus pedidos",
        href: "https://www.deco.cx",
      },
    ],
  },
  {
    label: "Formas de Pagamento",
    children: [
      {
        icon: "Pix",
      },
      {
        icon: "Visa",
      },
      {
        icon: "Elo",
      },
      {
        icon: "Mastercard",
      },
    ],
  },
];

function SectionItem({ item }: { item: Item }) {
  return (
    <Text variant="caption" tone="default-inverse">
      {isIcon(item)
        ? (
          <div class="border-default border-1 py-1.5 px-2.5">
            <Icon
              id={item.icon}
              width={25}
              height={20}
              strokeWidth={0.01}
            />
          </div>
        )
        : (
          <a href={item.href}>
            {item.label}
          </a>
        )}
    </Text>
  );
}

function FooterContainer(
  { children, class: _class = "" }: {
    class?: string;
    children: ComponentChildren;
  },
) {
  return <div class={`py-6 px-4 sm:py-12 sm:px-0 ${_class}`}>{children}</div>;
}

export interface Props {
  sections?: Section[];
}

function Footer({ sections = defaultSections }: Props) {
  return (
    <footer class="w-full bg-footer flex flex-col divide-y-1 divide-default">
      <div>
        <Container class="w-full flex flex-col divide-y-1 divide-default">
          <FooterContainer>
            <Newsletter />
          </FooterContainer>

          <FooterContainer>
            {/* Desktop view */}
            <ul class="hidden sm:flex flex-row gap-20">
              {sections.map((section) => (
                <li>
                  <div>
                    <Text variant="heading-3" tone="default-inverse">
                      {section.label}
                    </Text>

                    <ul
                      class={`flex ${
                        isIcon(section.children[0]) ? "flex-row" : "flex-col"
                      } gap-2 pt-2`}
                    >
                      {section.children.map((item) => (
                        <li>
                          <SectionItem item={item} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>

            {/* Mobile view */}
            <ul class="flex flex-col sm:hidden sm:flex-row gap-4">
              {sections.map((section) => (
                <li>
                  <Text variant="body" tone="default-inverse">
                    <details>
                      <summary>
                        {section.label}
                      </summary>

                      <ul
                        class={`flex ${
                          isIcon(section.children[0]) ? "flex-row" : "flex-col"
                        } gap-2 px-2 pt-2`}
                      >
                        {section.children.map((item) => (
                          <li>
                            <SectionItem item={item} />
                          </li>
                        ))}
                      </ul>
                    </details>
                  </Text>
                </li>
              ))}
            </ul>
          </FooterContainer>
        </Container>
      </div>

      <div>
        <Container class="w-full">
          <FooterContainer class="flex justify-between w-full">
            <Text
              class="flex items-center gap-1"
              variant="body"
              tone="default-inverse"
            >
              Powered by{" "}
              <a
                href="https://www.deco.cx"
                aria-label="powered by https://www.deco.cx"
              >
                <Icon id="Deco" height={20} width={60} strokeWidth={0.01} />
              </a>
            </Text>

            <ul class="flex items-center justify-center gap-2">
              <li>
                <a
                  href="https://www.instagram.com/deco.cx"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram logo"
                >
                  <Icon
                    class="text-default-inverse"
                    width={32}
                    height={32}
                    id="Instagram"
                    strokeWidth={1}
                  />
                </a>
              </li>
              <li>
                <a
                  href="http://www.deco.cx/discord"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Discord logo"
                >
                  <Icon
                    class="text-default-inverse"
                    width={32}
                    height={32}
                    id="Discord"
                    strokeWidth={5}
                  />
                </a>
              </li>
            </ul>
          </FooterContainer>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
