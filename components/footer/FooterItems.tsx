import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";

export type Item = {
    label: string;
    href: string;
};
  
export default function FooterItems({ sections } : { sections: Array }) {
    return (
        <>
            {/* Desktop view */}
            <ul class="hidden lg:flex flex-row gap-20">
                {sections.map((section) => (
                    <li>
                    <div class="flex flex-col gap-2">
                        <span class="font-medium text-lg text-primary-content">
                            {section.label}
                        </span>
                        <ul class={`flex flex-col gap-2 flex-wrap text-sm`}>
                            {section.items?.map((item) => (
                                <li>
                                    <a href={item.href} class="text-primary-content link link-hover">{item.label} </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    </li>
                ))}
            </ul>

            {/* Mobile view */}
            <ul class="flex flex-col sm:hidden sm:flex-row gap-4">
              {sections.map((section) => (
                <li>
                  <span class="text-primary-content">
                    <details>
                      <summary>
                        {section.label}
                      </summary>
                      <ul
                        class={`flex flex-col gap-2 px-2 pt-2`}
                      >
                        {section.items?.map((item) => (
                          <li>
                            <a href={item.href} class="text-primary-content">{item.label} </a>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </span>
                </li>
              ))}
            </ul>
        </>
    )
}
