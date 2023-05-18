export interface Item {
  icon?: string;
  title?: string;
  description?: string;

  style: {
    iconColor?: string;
    textColor?: string;
    backgroundColor?: string;
  };
}

export interface Props {
  style?: {
    icon?: "top" | "left";
    variant?: "border" | "divide" | "background";
  };

  title?: string;
  description?: string;

  items: Item[];
}

function Section(props: Props) {
  return (
    <div>
      Help Wanted
      <a href="https://www.figma.com/file/T4oBjZSaiahuqaAQA8ihls/Deco-Hackathon-III-%E2%80%A2--Blocks-Library?type=design&node-id=12-79246&t=wfDiNMGcabiNCf0T-0">
        Benefits
      </a>
    </div>
  );
}

export default Section;
