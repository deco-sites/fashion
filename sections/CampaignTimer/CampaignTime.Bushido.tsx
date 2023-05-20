export interface MyInterface {
  textCampaign: string;
  textButton: string;
  textLink: string;
  hours: number;
  minutes: number;
  seconds: number;
}

function CampaignTime(
  { textCampaign, textButton, textLink, hours, minutes, seconds }: MyInterface,
) {
  return (
    <div class="flex flex-row justify-center items-center min-[790px]:h-[76px] bg-[#E37A69] min-[320px]:h-[112px]">
      <div class="flex min-[320px]:flex-col min-[650px]:flex-row min-[790px]:flex-row justify-center items-center min-[320px]:gap-[16px] min-[650px]:gap-[24px] min-[790px]:gap-[64px]">
        <div class="flex flex-row items-center not-italic font-normal min-[790px]:text-xl min-[320px]:text-sm min-[650px]:text-base min-[320px]:leading-5 min-[650px]:leading-7 min-[790px]:leading-7 text-white">
          <p class="font-albert-sans flex flex-row gap-[6px]">
            {textCampaign ? "Time left for a campaign to end wth a" : textLink}
            <a href="#" class="underline">{textLink! ? "link" : textLink}</a>
          </p>
        </div>
        <div class="flex flex-row justify-center items-center min-[320px]:gap-[24px] min-[650px]:gap-[24px] min-[790px]:gap-[64px]">
          <div class="flex flex-row justify-center items-center gap-[16px]">
            <div class="flex flex-col justify-center items-center">
              <p class="font-albert-sans not-italic font-normal text-xl leading-7 flex items-center text-center text-white">
                {hours < 10 ? `0${hours}` : hours! ? 24 : hours}
              </p>
              <p class="font-albert-sans not-italic font-normal text-xs leading-4 flex items-center text-center text-white">
                Hours
              </p>
            </div>
            <p class="text-white">:</p>
            <div class="flex flex-col justify-center items-center">
              <p class="font-albert-sans not-italic font-normal text-xl leading-7 flex items-center text-center text-white">
                {minutes < 10 ? `0${minutes}` : minutes! ? 12 : minutes}
              </p>
              <p class="font-albert-sans not-italic font-normal text-xs leading-4 flex items-center text-center text-white">
                Minutes
              </p>
            </div>
            <p class="text-white">:</p>
            <div class="flex flex-col justify-center items-center">
              <p class="font-albert-sans not-italic font-normal text-xl leading-7 flex items-center text-center text-white">
                {seconds < 10 ? `0${seconds}` : seconds! ? 13 : seconds}
              </p>
              <p class="font-albert-sans not-italic font-normal text-xs leading-4 flex items-center text-center text-white">
                Seconds
              </p>
            </div>
          </div>
          <button class="flex flex-row justify-center items-center w-20 h-10 bg-[#273746] hover:bg-[#385168] transition-[0.5]">
            <span class="font-albert-sans not-italic font-normal text-base leading-6 flex items-center text-center text-white">
              {textButton ? "Button" : textButton}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default CampaignTime;
