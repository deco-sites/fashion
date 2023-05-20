import Icon from "$store/components/ui/Icon.tsx";

export interface Props {
  title?: string;
  describe: string;
  callToActionTitle?: string;
  callToActionDescribe?: string;
  question: string[];
  answer: string[];
}

export default function FAQ({
  title,
  describe,
  question,
  answer,
  callToActionTitle,
  callToActionDescribe,
}: Props) {
  return (
    <div className="mb-16 w-screen max-w-[768px] max-h-[781px] flex flex-col m-auto">
      <h2 className="text-5xl mt-16 mx-4 text-center mb-4">
        {title ?? "FAQs"}
      </h2>
      <p className="mx-8 text-center px-16 text-lg xl:px-0">{describe}</p>
      <div className="flex flex-col mt-20 px-4">
        {question.map((question, index) => (
          <>
            <div className="relative px-4 border-t border-[#AAAAAA]">
              <input
                type="checkbox"
                id={`FAQ - ${index}`}
                className="absolute peer opacity-0"
              />
              <label
                htmlFor={`FAQ - ${index}`}
                className="flex items-center text-lg my-5 leading-7"
              >
                {question}
              </label>
              <div className="absolute top-1/2 -translate-y-1/2 right-5 rotate-0 peer-checked:rotate-180 text-lg duration-200">
                <Icon id="ChevronDown" width={28} height={16} strokeWidth={4} />
              </div>
              <div className="max-h-0 overflow-hidden peer-checked:max-h-full ">
                <p className="p-2 text-sm m-0">
                  {answer[index]}
                </p>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center ">
        <h3 className="mt-24 text-4xl">
          {callToActionTitle ?? "Still have a question?"}
        </h3>
        <p className="mt-4 mb-6 px-16 xl:px-0 text-center">
          {callToActionDescribe ?? ""}
        </p>
        <button className="btn rounded-none font-['Albert Sans'] capitalize font-normal">
          Contact
        </button>
      </div>
    </div>
  );
}
