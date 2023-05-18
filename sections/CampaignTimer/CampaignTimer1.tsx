export interface Props {
  style?: {
    bgColor?: string;
    placement: "left" | "right";
  };
  /** @format date */
  expiresAt: string;

  content?: string;

  button?: {
    label: string;
    variant: "primary" | "secondary" | "tertiary";
  };
}

function Section(props: Props) {
  return (
    <div>
      Help Wanted
      <a href="https://www.figma.com/file/T4oBjZSaiahuqaAQA8ihls/Hackathon-III---deco-library?type=design&node-id=156-211371&t=wfDiNMGcabiNCf0T-0">
        Campaign timer
      </a>
    </div>
  );
}

export default Section;
