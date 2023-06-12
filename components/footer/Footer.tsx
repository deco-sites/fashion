import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import Newsletter from "$store/islands/Newsletter.tsx";
import FooterItems from "$store/components/footer/FooterItems.tsx";
import Social from "$store/components/footer/Social.tsx";
import PaymentMethods from "$store/components/footer/PaymentMethods.tsx";
import MobileApps from "$store/components/footer/MobileApps.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import type { ComponentChildren } from "preact";

export type Item = {
  label: string;
  href: string;
};

export type Section = {
  label: string;
  items: Item[];
};

export interface SocialItem {
  label: "Discord" | "Facebook" | "Instagram" | "Linkedin" | "Tiktok" | "Twitter" ;
  link: string;
}

export interface PaymentItem {
  label: "Diners" | "Elo" | "Mastercard" | "Pix" | "Visa" ;
}

export interface MobileApps {
  /** @description Link to the app */
  apple?: string;
  /** @description Link to the app */
  android?: string;
}

export interface Props {
  logo?: {
    image: LiveImage;
    description?: string;
  }
  sections?: Section[];
  social?: {
    title?: string;
    items: SocialItem[];
  }
  payments?: {
    title?: string;
    items: PaymentItem[];
  }
  mobileApps?: MobileApps;
  extraLinks?: Item[];
}

function PoweredBy() {
  return (
    <span class="flex items-center gap-1 text-primary-content">
      Powered by{" "}
      <a
        href="https://www.deco.cx"
        aria-label="powered by https://www.deco.cx"
      >
        <Icon id="Deco" height={20} width={60} strokeWidth={0.01} />
      </a>
    </span>
  )
}

function FooterContainer(
  { children, class: _class = "" }: {
    class?: string;
    children: ComponentChildren;
  },
) {
  return <div class={`flex flex-col gap-8 py-6 px-4 sm:py-12 sm:px-0 ${_class}`}>{children}</div>;
}

function Logo({logo} : Props) {
  return (
    <div class="flex flex-col gap-3">
      <div class="w-28 max-h-16">
        <img
          class="w-28 max-h-16"
          src={logo?.image}
          alt={logo?.description}
          width={200}
          height={200}
        />
      </div>
      <div class="text-base">
        { logo?.description }
      </div>
    </div>
  )
}

function ExtraLinks({ content } : { content: Array }) {
  return (
    <>
      {
        content?.length > 0 && (
          <div class="flex gap-10">
            {
              content.map(item => (
                <a class="link link-hover text-sm" href={item.href}>{item.label}</a>
              ))
            }
          </div>      
        )
      }
    </>
  )
}

function Footer({
  logo,
  sections = [],
  social = [],
  payments = [],
  mobileApps = { apple: "", android: "" },
  extraLinks = [],
}: Props) {
  return (
    <footer class="w-full bg-primary flex flex-col divide-y divide-primary-content text-primary-content">
      <div class="container mx-auto">
        <div class="w-full flex flex-col divide-y divide-primary-content">
          <FooterContainer>
            <Logo logo={logo} />
            <MobileApps content={mobileApps} />
            <Newsletter />
            <FooterItems sections={sections} />
            <PaymentMethods content={payments} />
            <Social content={social} />
            <ExtraLinks content={extraLinks} />
            <PoweredBy />
          </FooterContainer>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
