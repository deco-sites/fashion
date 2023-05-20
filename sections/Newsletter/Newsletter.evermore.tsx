export interface Props {
    callToAction: string;
    buttonText: string;
    privacyLink: string;
}

export default function Newsletter({callToAction ="Sign up for our newsletter", buttonText = "Subscribe", privacyLink = "/"}: Props) {
  return (
    <div className="bg-darkgreen text-textwhite font-albert font-extralight flex flex-col items-center gap-5 py-5 px-10 md:justify-center">
      <h3 className="text-3xl w-[70%] md:w-full text-center md:text-5xl md:p-6 mb-6 md:mb-1">
        {callToAction}
      </h3>
      <div className="flex flex-col md:flex-row w-[80%] gap-4 md:justify-center">
        <input
          className="bg-darkgreen border-[1px] border-textwhite --border-btn text-textwhite placeholder-textwhite text-md py-1 px-2 md:pr-24"
          placeholder="Enter your email"
        >
        </input>
        <button className="bg-btnblue text-black px-2 py-1 text-md">{buttonText}</button>
      </div>
      <p className="text-center text-sm">
        By subscribing you agree to with our <br />
        <a href={privacyLink} className="underline">Privacy Policy</a>.
      </p>
    </div>
  );
}
