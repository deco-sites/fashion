export interface Props {
  style?: {
    size: "large" | "medium" | "small";
  };

  title?: string;
  content?: string;

  button: {
    label?: string;
    variant?: "primary" | "secondary" | "tertiary";
  };

  privacyLink?: {
    href: string;
    content: string;
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
