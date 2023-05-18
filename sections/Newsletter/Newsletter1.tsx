export interface Props {
  style: {
    placement?: "right" | "center" | "left";
    border?: boolean;
  };
  headline?: string;
  consent?: string;
  policyLink?: string;
  labelEmail?: string;
  placeholder?: string;

  submitLabel?: string;
}

function Section(props: Props) {
  return (
    <div>
      Help Wanted
      <a href="https://www.figma.com/file/T4oBjZSaiahuqaAQA8ihls/Hackathon-III---deco-library?type=design&node-id=12-79249&t=wfDiNMGcabiNCf0T-0">
        Newsletter
      </a>
    </div>
  );
}

export default Section;
