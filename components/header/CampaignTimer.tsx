import CountDownTimer from "../../islands/CountDownTimer.tsx";

export interface CampaignTimerProps {
  campaign_data: {
    text: string;
    link: string;
    endTime: string;
    btnText: string;
    text_side: "right" | "left";
    coupon?: string;
    bg_color: string;
    text_color: string;
  };
}

function CampaignTimer(
  { campaign_data }: CampaignTimerProps,
) {
  

  return (
    <div
      className={"w-full h-auto bg-red-500 flex justify-center items-center gap-2 flex-wrap px-3 py-1 text-center"}
      style={{
        background: campaign_data.bg_color,
        color: campaign_data.text_color,
      }}
    >
      {(campaign_data.text_side === "left" || window.innerWidth < 550)
        ? (
          <>
            <span className="px-3">{campaign_data.text}</span>
            <CountDownTimer endDate={campaign_data.endTime} />
            <button className="btn px-3 rounded-none">
              {campaign_data.btnText}
            </button>
          </>
        )
        : (
          <>
            <CountDownTimer endDate={campaign_data.endTime} />
            <span className="px-3">{campaign_data.text}</span>
            <button className="btn px-3 rounded-none">
              {campaign_data.btnText}
            </button>
          </>
        )}
    </div>
  );
}

export default CampaignTimer;
