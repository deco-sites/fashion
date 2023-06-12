import Icon from "$store/components/ui/Icon.tsx";

export interface PaymentIcon {
    label: string;
}
  
export default function PaymentMethods({ content } : { content: { title: string, items: PaymentIcon[] } }) {
    return (
        <div class="flex flex-col gap-4 text-primary-content">
            { content?.title && <h3 class="text-lg">{ content?.title }</h3> }
            <ul class="flex items-center gap-4">
                {
                    content?.items?.length > 0 && content?.items.map((item) => {
                        return (
                            <li
                                class="border border-base-100"
                                title={item.label}
                            >
                                <Icon
                                    class="text-primary-content"
                                    width={48}
                                    height={32}
                                    strokeWidth={1}
                                    id={item.label}
                                />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
