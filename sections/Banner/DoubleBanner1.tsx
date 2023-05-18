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
    proportions?: "1-1" | "2-3" | "3-2";
  };
  banners: Banner[];
}

function Section(props: Props) {
  return (
    <div>
      Help Wanted
      <a href="https://www.figma.com/file/T4oBjZSaiahuqaAQA8ihls/Hackathon-III---deco-library?type=design&node-id=161-221670&t=wfDiNMGcabiNCf0T-0">
        Double Banner
      </a>
    </div>
  );
}

export default Section;
