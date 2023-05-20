import type { Image as ImageType } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
  mainTitle: string;
  mainSubTitle: string;
  content: ContentBenefit[];
}

export interface ContentBenefit {
  title: string;
  description: string;
  imgSrc: ImageType;
}

const Benefits = (
  { mainTitle, mainSubTitle, content }: Props,
) => {
  return (
    <div className="lg:py-10">
      <div className="flex flex-col py-4 gap-y-2 lg:pb-10">
        <h2 className="text-[#292929] text-2xl text-center lg:text-3xl">
          {mainTitle}
        </h2>
        <h3 className="text-[#787878] text-base text-center lg:text-2xl">
          {mainSubTitle}
        </h3>
      </div>
      <div>
        <div>
          <ul className="divide-y-[1px] justify-center items-center px-6 lg:divide-y-0  lg:flex lg:flex-row lg:px-8  lg:divide-x-[1px]">
            {content?.map((content) => (
              <li className=" flex gap-x-[20.69px]  lg:px-8 ">
                <div className="flex items-center pl-2">
                  <Image
                    alt="Icon benefit"
                    height={30}
                    width={30.31}
                    src={content.imgSrc}
                  />
                </div>
                <div className="flex-col gap-x-1 py-4  lg:py-0 lg:w-[160px] xl:w-[223.33px] xl:pr-6 ">
                  <h4 className=" text-[#292929] base-content text-base font-normal lg:text-xl">
                    {content.title}
                  </h4>
                  <h5 className="text-[#787878] text-[13px] lg:text-sm">
                    {content.description}
                  </h5>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Benefits;
