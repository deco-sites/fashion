import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";

export type Item = {
    label: string;
    href: string;
};
  
export default function FooterItems({ sections, justify = false } : { sections: Item[], justify: boolean }) {
    return (
        <>
            {/* Desktop view */}
            <ul class={`hidden lg:flex flex-row gap-10 ${justify && 'justify-between'}`}>
                {sections.map((section) => (
                    <li>
                      <div class="flex flex-col gap-2">
                          <span class="font-medium text-lg">
                              {section.label}
                          </span>
                          <ul class={`flex flex-col gap-2 flex-wrap text-sm`}>
                              {section.items?.map((item) => (
                                  <li>
                                      <a href={item.href} class="block py-1 link link-hover">{item.label} </a>
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
                  <details>
                    <summary>
                      {section.label}
                    </summary>
                    <ul
                      class={`flex flex-col gap-2 px-2 pt-2`}
                    >
                      {section.items?.map((item) => (
                        <li>
                          <a href={item.href}>{item.label} </a>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ))}
            </ul>
        </>
    )
}
