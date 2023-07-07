import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";

export type Item = {
  label: string;
  href: string;
};

export type Section = {
  label: string;
  items: Item[];
};

export default function FooterItems(
  { sections, justify = false }: { sections: Section[]; justify: boolean },
) {
  return (
    <>
      {sections.length > 0 && (
        <>
          {/* Tablet and Desktop view */}
          <ul class={`hidden md:flex flex-row gap-6 lg:gap-10 ${justify && "lg:justify-between"}`}>
            {sections.map((section) => (
              <li class="flex flex-col gap-2">
                <span class="font-medium text-lg">
                  {section.label}
                </span>
                <ul class={`flex flex-col gap-2 flex-wrap text-sm`}>
                  {section.items?.map((item) => (
                    <li>
                      <a href={item.href} class="block py-1 link link-hover">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          {/* Mobile view */}
          <ul class="flex flex-col md:hidden gap-4">
            {sections.map((section) => (
              <li>
                <details class="collapse collapse-arrow join-item">
                  <summary class="collapse-title p-0 min-h-0">
                    {section.label}
                  </summary>
                  <ul
                    class={`flex flex-col pl-0 pt-2 collapse-content`}
                  >
                    {section.items?.map((item) => (
                      <li>
                        <a href={item.href} class="block py-1 link link-hover">
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
