import Button from "$store/components/ui/Button.tsx";
import Container from "$store/components/ui/Container.tsx";
import Text from "$store/components/ui/Text.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Avatar from "$store/components/ui/Avatar.tsx";
import Breadcrumb from "$store/components/ui/Breadcrumb.tsx";
import QuantitySelector from "$store/components/ui/QuantitySelector.tsx";
import type { ComponentChildren } from "preact";

const colors = [
  "default",
  "header",
  "badge",
  "footer",
  "interactive",
  "interactive-inverse",
  "hover",
  "hover-inverse",
] as const;

const typography = [
  "heading-1",
  "heading-2",
  "heading-3",
  "menu",
  "button",
  "body",
  "caption",
  "list-price",
] as const;

const tones = [
  "default",
  "default-inverse",
  "subdued",
  "subdued-inverse",
  "price",
  "section-title",
  "positive",
  "critical",
] as const;

const buttons = [
  ["primary", "Primary"],
  ["secondary", "Secondary"],
  ["tertiary", "Tertiary"],
  [
    "icon",
    <Icon id="ShoppingCart" width={20} height={20} strokeWidth={2} />,
  ],
] as const;

const icons = [
  "ChevronLeft",
  "ChevronRight",
  "ChevronUp",
  "ChevronDown",
  "QuestionMarkCircle",
  "User",
  "ShoppingCart",
  "Bars3",
  "Heart",
  "MagnifyingGlass",
  "XMark",
  "Elo",
  "Mastercard",
  "Visa",
  "Pix",
  "Logo",
  "Facebook",
  "Instagram",
  "Tiktok",
  "Truck",
  "Discount",
  "Return",
  "CreditCard",
  "Deco",
  "Discord",
  "FilterList",
  "Plus",
  "Minus",
  "MapPin",
  "Phone",
  "Trash",
  "WhatsApp",
  "ArrowsPointingOut",
] as const;

function DesignSystemItem(
  { title, children }: { title: string; children: ComponentChildren },
) {
  return (
    <li class="py-4">
      <div class="flex flex-col gap-8">
        <Text variant="heading-2">{title}</Text>
        {children}
      </div>
    </li>
  );
}

function DesignSystem() {
  return (
    <ul class="flex flex-col divide-y p-4">
      <DesignSystemItem title="Colors">
        <ul class="grid grid-cols-2 sm:grid-cols-4 items-start gap-4">
          {colors.map((color) => (
            <li class="flex flex-col items-center">
              <div
                class={`rounded-full border border-default h-10 w-10 bg-${color}`}
              />
              bg-{color}
            </li>
          ))}
        </ul>
      </DesignSystemItem>

      <DesignSystemItem title="Tones - text color">
        <ul class="grid grid-cols-2 sm:grid-cols-4 items-start gap-4">
          {tones.map((tone) => (
            <li class="flex flex-col items-center">
              <div
                class={`rounded-full border border-default h-10 w-10 flex justify-center items-center text-${tone}`}
              >
                <svg
                  height={40}
                  width={40}
                  fill="currentColor"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="50" cy="50" r="50" />
                </svg>
              </div>
              text-{tone}
            </li>
          ))}
        </ul>
      </DesignSystemItem>

      <DesignSystemItem title="Typography">
        <ul class="flex flex-col gap-2">
          {typography.map((font) => (
            <li>
              <Text variant={font} class="capitalize">{font}</Text>
            </li>
          ))}
        </ul>
      </DesignSystemItem>

      <DesignSystemItem title="Container">
        <div class="bg-blue-200">
          <Container class="bg-white border border-default">
            <div class="w-full flex justify-center items-center h-40">
              Container
            </div>
          </Container>
        </div>
      </DesignSystemItem>

      <DesignSystemItem title="Button">
        <ul class="flex flex-wrap flex-row gap-8">
          {buttons.map(([variant, children]) => (
            <li class="flex gap-2">
              <Button variant={variant}>{children}</Button>
              <Button variant={variant} disabled>{children}</Button>
              <Button variant={variant} loading>{children}</Button>
            </li>
          ))}
        </ul>
      </DesignSystemItem>

      <DesignSystemItem title="Icons">
        <ul class="flex flex-row flex-wrap gap-4">
          {icons.map((id) => (
            <li class="flex gap-2">
              <Icon id={id} width={20} height={20} strokeWidth={1} />
            </li>
          ))}
        </ul>
      </DesignSystemItem>

      <DesignSystemItem title="Avatar">
        <div class="flex gap-2">
          <Avatar variant="abbreviation" content="PP" />
          <Avatar variant="abbreviation" content="PP" disabled />
          <Avatar variant="color" content="azul-clara" />
          <Avatar variant="color" content="branca" />
          <Avatar variant="color" content="cinza-escura" />
        </div>
      </DesignSystemItem>

      <DesignSystemItem title="Breadcrumb">
        <Breadcrumb
          itemListElement={[
            {
              "@type": "ListItem",
              name: "Segment 1",
              item: "http://localhost:8000/a",
              position: 1,
            },
            {
              "@type": "ListItem",
              name: "Segment 2",
              item: "http://localhost:8000/a/b",
              position: 2,
            },
            {
              "@type": "ListItem",
              name: "Segment 3",
              item: "http://localhost:8000/a/b/c",
              position: 3,
            },
          ]}
        />
      </DesignSystemItem>

      <DesignSystemItem title="QuantitySelector">
        <div class="w-min">
          <QuantitySelector quantity={10} />
        </div>
      </DesignSystemItem>
    </ul>
  );
}

export default DesignSystem;
