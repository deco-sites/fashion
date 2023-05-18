import { Image as ImageWidget } from "deco-sites/std/components/types.ts";

export interface Banner {
  style: {
    colorInverted?: boolean;
    textAlignment?: "left" | "right" | "center";
    textContainer?: "none" | "small" | "medium" | "large";
  };
  mobile: ImageWidget;
  desktop: ImageWidget;
  alt: string;
  tagline?: string;
  heading?: string;
  content?: string;
  buttons?: Array<{
    variant: "primary" | "secondary";
    label: string;
  }>;
}

export interface Props {
  style: {
    controls?: "bottom" | "side";
    indicators?: "round" | "dash";
  };
  banners: Banner[];
}

function Section(props: Props) {
  return (
    <div>
      Help Wanted
      <a href="https://www.figma.com/file/T4oBjZSaiahuqaAQA8ihls/Hackathon-III---deco-library?type=design&node-id=12-94898&t=wfDiNMGcabiNCf0T-0">
        Full Banner
      </a>
    </div>
  );
}

export default Section;
