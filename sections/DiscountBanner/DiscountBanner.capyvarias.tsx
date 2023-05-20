export interface Props {
  messages: string[];
  slideTimeInSeconds: number;
}

export default function DiscountBanner({messages, slideTimeInSeconds = 10}: Props) {
  return (
    <div class="bg-primary w-full">
      <div class="flex gap-4 w-max animate-[slideleft_10s_linear_infinite]" style={`animation-duration: ${slideTimeInSeconds}s;`}>
        {messages?.map((message, index) => (
          <div class="pt-1 pb-1 md:pt-2 md:pb-2 flex gap-4 items-center text-primary-content group">
            <p>{message}</p>
            <span class="bg-primary-content h-1 w-1 rounded group-last:hidden"></span>
          </div>
        ))}
      </div>
    </div>
  );
}
