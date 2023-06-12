import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";

export interface SocialIcon {
    label: string;
    link: string;
}
  
export default function Social({ content } : { content: { title: string, items: SocialIcon[] } }) {
    return (
        <div class="flex flex-col gap-4 text-primary-content">
            { content?.title && <h3 class="text-lg">{ content?.title }</h3> }
            <ul class="flex items-center gap-4">
                {
                    content?.items?.length > 0 && content?.items.map((item) => {
                        return (
                            <li>
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${item.label} Logo`}
                                    class="btn btn-circle btn-outline btn-sm"
                                >
                                    <Icon
                                        class="text-primary-content"
                                        width={20}
                                        height={20}
                                        id={item.label}
                                    />
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
