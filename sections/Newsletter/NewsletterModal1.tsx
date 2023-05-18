import { Image as ImageWidget } from "deco-sites/std/components/types.ts";

export interface Props {
  style: {
    placement?: "right" | "center" | "left";
    border?: boolean;
  };
  image: {
    src: ImageWidget;
    alt: string;
  };

  headline?: string;
  content?: string;

  labelName: string;
  labelEmail: string;

  consent?: string;
  policyLink?: string;

  submitLabel?: string;
}

function Section(props: Props) {
  return (
    <div>
      Help Wanted
      <a href="https://www.figma.com/file/T4oBjZSaiahuqaAQA8ihls/Hackathon-III---deco-library?type=design&node-id=208-205845&t=wfDiNMGcabiNCf0T-0">
        Newsletter Modal
      </a>
    </div>
  );
}

export default Section;
