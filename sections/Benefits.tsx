import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";

interface Benefit {
  title: string;
  description: string;
  style: "clean" | "bordered" | "card";
}

export interface Props extends Benefit {
  style: "clean" | "bordered" | "card";
  headerTitle: string;
  headerDescription: string;
  benefits: Array<{ title: string; description: string }>;
}

const Benefit = ({ title, description, style }: Benefit) => {
  const iconSvg = style === "card"
    ? "/svg/icon-benefit-white.svg"
    : "/svg/icon-benefit.svg";
  const lgClean =
    "lg:border-r-2 lg:border-b-0 lg:pr-[10%] lg:first-of-type:ml-0 lg:ml-9";
  const bordered = "flex-col text-center lg:my-6";
  const card = "bg-[#53B4DA] !border-0 text-white !pr-0";
  return (
    <div
      className={`${lgClean} flex py-4 items-center gap-y-3  gap-x-5 last-of-type:border-0 border-b-[1px] border-[#AAAAAA]
      ${style !== "clean" && bordered}
      ${style === "card" && card}`}
    >
      <div>
        <img src={iconSvg} alt="Benefit Icon" />
      </div>
      <div>
        <h4 className="mb-1">{title}</h4>
        <h5
          className={`text-sm text-[#787878] 
          ${style !== "clean" && "hidden lg:block"}
          ${style === "card" && "text-white"}
          `}
        >
          {description}
        </h5>
      </div>
    </div>
  );
};
export default function Benefits(
  { style, headerTitle, headerDescription, benefits }: Props,
) {
  const bordered =
    "grid-cols-2 gap-y-6 border-[1px] border-[#AAAAAA] px-4 [&>*:nth-child(3)]:border-b-0";
  const card = "!border-0 gap-x-4";
  return (
    <section className="p-6">
      <div>
        <h2 className="text-2xl text-center mb-2">{headerTitle}</h2>
        <h3 className="text-[#787878] text-center">{headerDescription}</h3>
      </div>
      <div
        className={`mt-8 grid lg:grid-cols-4 
        ${style !== "clean" && bordered}
        ${style === "card" && card}`}
      >
        {benefits.map((benefit) => (
          <Benefit
            title={benefit.title}
            description={benefit.description}
            style={style}
          />
        ))}
      </div>
    </section>
  );
}
