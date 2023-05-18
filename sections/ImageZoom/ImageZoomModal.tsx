export interface Image {
  url?: string;
  alternateName?: string;
}

export interface Props {
  style: {
    placement: "left" | "buttom";
  };

  images: Image[];
}

function Section(props: Props) {
  return (
    <div>
      Help Wanted
      <a href="https://www.figma.com/file/T4oBjZSaiahuqaAQA8ihls/Deco-Hackathon-III-%E2%80%A2--Blocks-Library?type=design&node-id=206-200281&t=wfDiNMGcabiNCf0T-0">
        Image Zoom Modal
      </a>
    </div>
  );
}

export default Section;
