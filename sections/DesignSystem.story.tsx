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
  "decorative-one",
  "decorative-two",
  "interactive-default",
  "dark-interactive-default",
  "icon-brand",
  "icon-subdued",
] as const;

const typography = [
  "heading-strong",
  "heading-regular",
  "subheading-strong",
  "display-strong",
  "body-strong",
  "body-regular",
  "caption-strong",
  "caption-regular",
  "subcaption-regular",
] as const;

const tones = [
  "default",
  "subdued",
  "critical",
  "interactive-default",
] as const;

const icons = [
  "Circle",
  "ChevronLeft",
  "ChevronRight",
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
  "ChevronUp",
] as const;

function DesignSystemItem(
  { title, children }: { title: string; children: ComponentChildren },
) {
  return (
    <li class="py-4">
      <div class="flex flex-col gap-8">
        <Text variant="display-strong">{title}</Text>
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
                class={`rounded-full border border-default h-8 w-8 bg-${color}`}
              />
              bg-{color}
            </li>
          ))}
        </ul>
      </DesignSystemItem>

      <DesignSystemItem title="Typography">
        <ul class="flex flex-col gap-2">
          {typography.map((font) => (
            <li>
              <Text variant={font}>{font}</Text>
            </li>
          ))}
        </ul>
      </DesignSystemItem>

      <DesignSystemItem title="Tones">
        <ul class="flex flex-row gap-2">
          {tones.map((tone) => (
            <li>
              <Text tone={tone}>{tone}</Text>
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
        <ul class="flex flex-row gap-8">
          {(["default", "quiet", "icon"] as const).map((variant) => (
            <li class="flex gap-2">
              <Button variant={variant}>{variant}</Button>
              <Button variant={variant} loading></Button>
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
          breadcrumbList={{
            "@type": "BreadcrumbList",
            itemListElement: [
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
            ],
            numberOfItems: 3,
          }}
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
