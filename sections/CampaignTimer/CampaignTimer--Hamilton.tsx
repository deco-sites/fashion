import CampaignTimerHamilton from '../../islands/CampaignTimerHamilton.tsx'

export interface Props {
  textCampaign: string;
  date: string;
  buttonText: string;
  buttonLink: string;
}

const CampaignTimer = (
  {
    textCampaign,
    date,
    buttonText,
    buttonLink,
  }: Props,
) => {
  const campaignDate = new Date(date);

  return (
    <div className="flex flex-col bg-[#E37A69] font-sans text-white w-100">
      <div className="text-sm mt-4 w-100 text-center">{textCampaign}</div>
      <div className="flex my-4 mx-9 gap-6 justify-center">
        <CampaignTimerHamilton campaignDate={campaignDate}/>
        <button
          href={buttonLink}
          className="btn-primary cursor-pointer py-2 px-3 text-base"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default CampaignTimer;
