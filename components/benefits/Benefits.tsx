
import Icon, {
  AvailableIcons,
} from "$store/components/ui/Icon.tsx";

export type IconItem = {
  icon: AvailableIcons
}

export interface Card{
    title: string;
    desc: string;
    style: "type1" | "type2" 
    card: {
      icon: IconItem;
      subtitle: string;
      legend?: string;
    }[]
}
export interface Props{
    cards: Card[];
}
function Benefits({cards}: Props) {
  return (
      <div class="">
        <div class="mx-auto flex flex-col justify-center py-4 items-center">
          <span class="font-thin text-2xl">{cards[0].title}</span>
          <span class="text-gray-500 text-lg">{cards[0].desc}</span>
        </div>
        {cards && cards.map((card, index) => (
          <div key={index} class={`${card.style === "type1" ? " grid grid-cols-2 border-[3px] border-gray-300 md:grid-cols-4" : ""} ${card.style === "type2" ? "flex flex-col md:grid md:grid-cols-4" : ""}`}>
            {card.card && card.card.map((item, indexCard) => (
              <div key={indexCard} class={`${card.style === "type1" ? "flex-col items-center justify-center md:border-r-4 md:border-gray-300 md:my-4" : ""}  ${indexCard === card.card.length - 1 && card.style === "type1" ? "md:border-none" : "md:border-r-4"}
              ${indexCard === 0 && card.style === "type2" ? " border-b-2 md:border-none md:border-r-none" : "md:border-r-none"}
               ${card.style === "type2" ? "flex flex-row border-b-2 md:border-r-none  md:border-l-2 md:border-b-0 ml-4 border-gray-400-500 w-4/5 md:grid md:grid-cols-4" : "border-r-none"} `}>
                <div class="px-4 py-4 flex items-center justify-center">
                  <span><Icon
                      id={item.icon.icon}
                      width={30}
                      height={30}
                      strokeWidth={0.01}
                      fill="#2cd5ff"
                      /></span>
                </div>
                <div class={`flex flex-col py-2 ${card.style === "type1" ? "flex-col items-center justify-center" : ""}  ${card.style === "type2" ? "w-[160px]" : ""} `}>
                  <span class="font-thin text-xl md:text-sm">{item.subtitle}</span>
                  <span class={`text-gray-500 md:text-sm ${card.style === "type1" ? "hidden md:block" : ""} ${card.style === "type2" ? "block" : ""}`}>{item?.legend}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
  )
}

export default Benefits