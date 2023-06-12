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

export interface NewsletterForm {
  placeholder?: string;
  buttonText?: string;
  /** @format html */
  helpText?: string;
}

export interface Props {
  logo?: {
    image: LiveImage;
    description?: string;
  }
  newsletter?: {
    title?: string;
    /** @format textarea */
    description?: string;
    form?: NewsletterForm;
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
  backToTheTop?: {
    text?: string;
  }
  layout?: {
    backgroundColor?: "Primary" | "Secondary" | "Accent" | "Base 100" | "Base 100 inverted"
    variation: "Variation 1" | "Variation 2" | "Variation 3" | "Variation 4" | "Variation 5"
  }
}

function PoweredBy() {
  return (
    <span class="flex items-center gap-1 text-sm">
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

function Logo({logo} : Props) {
  return (
    <div class="flex flex-col gap-3">
      <div class="w-28 max-h-16">
        <img
          src={logo?.image}
          alt={logo?.description}
          width={200}
          height={200}
        />
      </div>
      <div class="">
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
                <a class="link text-sm" href={item.href}>{item.label}</a>
              ))
            }
          </div>      
        )
      }
    </>
  )
}

function colorClasses(layout) {
  switch (layout?.backgroundColor) {
    case "Primary":
      return "bg-primary text-primary-content";
    case "Secondary":
      return "bg-secondary text-secondary-content";
    case "Accent":
      return "bg-accent text-accent-content";
    case "Base 100":
      return "bg-base-100 text-base-content";
    case "Base 100 inverted":
      return "bg-base-content text-base-100";
    default:
      return "bg-primary text-primary-content";
    }
}

function Divider() {
  return (
    <div class="w-full flex">
      <div class="w-full border-b"></div>
    </div>
  )
}

function Footer({
  logo,
  newsletter,
  sections = [],
  social = [],
  payments = [],
  mobileApps = { apple: "", android: "" },
  extraLinks = [],
  backToTheTop,
  layout,
}: Props) {
  return (
    <footer class={`w-full flex flex-col py-10 ${colorClasses(layout)}`}>
      <div class="container mx-auto">
        {
          (!layout?.variation || layout?.variation == 'Variation 1') && (
            <div class="flex flex-col gap-10">
              <div class="flex justify-between gap-12">
                <Logo logo={logo} />
                <FooterItems sections={sections} />
                <Newsletter content={newsletter} />
              </div>
              <Divider/>
              <div class="flex justify-between items-end gap-10">
                <PaymentMethods content={payments} />
                <Social content={social} />
                <MobileApps content={mobileApps} />
              </div>
              <Divider/>
              <div class="flex justify-between gap-10">
                <PoweredBy />
                <ExtraLinks content={extraLinks} />
              </div>
            </div>
          )
        }
        {
          layout?.variation == 'Variation 2' && (
            <div class="flex flex-col gap-10">
              <div class="flex gap-10">
                <div class="flex flex-col gap-10 w-1/2">
                  <Logo logo={logo} />
                  <Social content={social} />
                  <PaymentMethods content={payments} />
                  <MobileApps content={mobileApps} />
                </div>
                <div class="flex flex-col gap-20 w-1/2 pr-10">
                  <Newsletter content={newsletter} />
                  <FooterItems sections={sections} justify />
                </div>
              </div>
              <Divider/>
              <div class="flex justify-between gap-10">
                <PoweredBy />
                <ExtraLinks content={extraLinks} />
              </div>
            </div>
          )
        }
        {
          layout?.variation == 'Variation 3' && (
            <div class="flex flex-col gap-10">
              <Logo logo={logo} />
              <div class="flex gap-10">
                <div class="flex flex-col gap-10 w-2/5">
                  <Newsletter content={newsletter} />
                  <PaymentMethods content={payments} />
                  <MobileApps content={mobileApps} />
                </div>
                <div class="flex gap-10 w-3/5">
                  <FooterItems sections={sections} justify />
                  <Social content={social} vertical />
                </div>
              </div>
              <Divider/>
              <div class="flex justify-between gap-10">
                <PoweredBy />
                <ExtraLinks content={extraLinks} />
              </div>
            </div>
          )
        }
        {
          layout?.variation == 'Variation 4' && (
            <div class="flex flex-col gap-10">
              <div class="flex justify-between gap-10">
                <Newsletter content={newsletter} tiled />
              </div>
              <Divider/>
              <div class="flex gap-20 justify-between">
                <FooterItems sections={sections} />
                <div class="flex flex-col gap-20 w-2/5 pl-10">
                  <div class="flex gap-20">
                    <div class="w-1/2">
                      <PaymentMethods content={payments} />
                    </div>
                    <div class="w-1/2">
                      <Social content={social} />
                    </div>
                  </div>
                  <MobileApps content={mobileApps} />
                </div>
              </div>
              <Divider/>
              <div class="flex justify-between gap-10 items-end">
                <Logo logo={logo} />
                <PoweredBy />
              </div>
            </div>
          )
        }
        {
          layout?.variation == 'Variation 5' && (
            <div class="flex flex-col gap-10">
              <div class="flex justify-between gap-10">
                <Newsletter content={newsletter} tiled />
              </div>
              <Divider/>
              <Logo logo={logo} />
              <div class="flex gap-20 justify-between">
                <FooterItems sections={sections} />
                <div class="flex flex-col gap-10 w-2/5 pl-10">
                  <PaymentMethods content={payments} />
                  <Social content={social} />
                  <MobileApps content={mobileApps} />
                </div>
              </div>
              <Divider/>
              <div class="flex justify-between gap-10 items-end">
                <PoweredBy />
                <ExtraLinks content={extraLinks} />
              </div>
            </div>
          )
        }
      </div>
      {
        backToTheTop?.text && (
          <div class="w-full flex items-center justify-center">
            <a href="#top" class="btn">{backToTheTop?.text} <Icon id="ChevronUp" width={24} height={24} /></a>
          </div>  
        )
      }
    </footer>
  );
}

export default Footer;
