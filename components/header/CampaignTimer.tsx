import CountDownTimer from "../../islands/CountDownTimer.tsx";
import CouponCopy from "../../islands/CouponCopy.tsx";

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
      className={`w-full h-auto bg-red-500 flex justify-center items-center gap-2 flex-wrap px-3 py-1 text-center`}
      style={{
        background: campaign_data.bg_color,
        color: campaign_data.text_color,
      }}
    >
      {(campaign_data.text_side === "left" || window.innerWidth < 550)
        ? (
          <>
            <span className="px-3 max-w-lg">{campaign_data.text}</span>
            <CountDownTimer endDate={campaign_data.endTime} />
            {campaign_data.coupon && (<CouponCopy  btnText={campaign_data.btnText} coupon={campaign_data.coupon}/>)}
          </>
        )
        : (
          <>
            <CountDownTimer endDate={campaign_data.endTime} />
            <span className="px-3 max-w-lg">{campaign_data.text}</span>
            {campaign_data.coupon && (<CouponCopy  btnText={campaign_data.btnText} coupon={campaign_data.coupon}/>)}
          </>
        )}
    </div>
  );
}

export default CampaignTimer;
