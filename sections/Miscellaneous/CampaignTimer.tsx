import { useId } from "$store/sdk/useId.ts";
import type { HTMLWidget } from "apps/admin/widgets.ts";

export interface Props {
  /**
   * @title Text
   * @default Time left for a campaign to end wth a link
   */
  text?: HTMLWidget;

  /**
   * @title Expires at date
   * @format datetime
   */
  expiresAt?: string;

  labels?: {
    /**
     * @title Text to show when expired
     */
    expired?: string;
    hours?: string;
    minutes?: string;
    seconds?: string;
  };

  link?: {
    /**
     * @title Link Text
     * @default button
     */
    text: string;
    /**
     * @title Link href
     * @default #
     */
    href: string;
  };

  layout?: {
    textPosition?: "Before counter" | "After counter";
  };
}

const snippet = (expiresAt: string, rootId: string) => {
  const expirationDate = new Date(expiresAt).getTime();

  const getDelta = () => {
    const delta = expirationDate - new Date().getTime();

    const days = Math.floor(delta / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((delta % (1000 * 60)) / 1000);
    const totalHours = (days * 24) + hours;

    return {
      hours: Math.min(totalHours, 99),
      minutes,
      seconds,
    };
  };

  const setValue = (id: string, value: number) => {
    const elem = document.getElementById(id);

    if (!elem) return;

    elem.style.setProperty("--value", value.toString());
  };

  const start = () =>
    setInterval(() => {
      const { hours, minutes, seconds } = getDelta();
      const isExpired = hours + minutes + seconds < 0;

      if (isExpired) {
        const expired = document.getElementById(`${rootId}::expired`);
        const counter = document.getElementById(`${rootId}::counter`);

        expired && expired.classList.remove("hidden");
        counter && counter.classList.add("hidden");
      } else {
        setValue(`${rootId}::hours`, hours);
        setValue(`${rootId}::minutes`, minutes);
        setValue(`${rootId}::seconds`, seconds);
      }
    }, 1_000);

  document.readyState === "complete"
    ? start()
    : addEventListener("load", start);
};

function CampaignTimer({
  expiresAt = `${new Date()}`,
  labels,
  text = "Time left for a campaign to end wth a link",
  link = { text: "Click me", href: "/hello" },
  layout = { textPosition: "Before counter" },
}: Props) {
  const id = useId();

  return (
    <>
      <div class="bg-accent text-accent-content">
        <div class="container mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-center lg:gap-16 py-4 px-6 gap-4 ">
          {layout?.textPosition !== "After counter" &&
            (
              <div
                class="text-sm text-center lg:text-xl lg:text-left lg:max-w-lg"
                dangerouslySetInnerHTML={{ __html: text }}
              >
              </div>
            )}
          <div
            id={`${id}::expired`}
            class="hidden text-sm text-center lg:text-xl lg:text-left lg:max-w-lg"
          >
            {labels?.expired || "Expired!"}
          </div>
          <div class="flex gap-8 lg:gap-16 items-center justify-center lg:justify-normal">
            <div id={`${id}::counter`}>
              <div class="grid grid-flow-col gap-3 text-center auto-cols-max items-center">
                <div class="flex flex-col text-xs lg:text-sm">
                  <span class="countdown font-normal text-xl lg:text-2xl">
                    <span id={`${id}::hours`} />
                  </span>
                  {labels?.hours || ""}
                </div>
                <div>
                  :
                </div>
                <div class="flex flex-col text-xs lg:text-sm">
                  <span class="countdown font-normal text-xl lg:text-2xl">
                    <span id={`${id}::minutes`} />
                  </span>
                  {labels?.minutes || ""}
                </div>
                <div>
                  :
                </div>
                <div class="flex flex-col text-xs lg:text-sm">
                  <span class="countdown font-normal text-xl lg:text-2xl">
                    <span id={`${id}::seconds`} />
                  </span>
                  {labels?.seconds || ""}
                </div>
              </div>
            </div>
            <div
              class={`hidden text-sm text-center lg:text-xl lg:text-left lg:max-w-lg ${
                layout?.textPosition === "After counter"
                  ? "lg:block"
                  : "lg:hidden"
              }`}
              dangerouslySetInnerHTML={{ __html: text }}
            >
            </div>
            <a
              class="btn"
              aria-label={link.text}
              href={link.href}
            >
              {link.text}
            </a>
          </div>
          <div
            class={`lg:hidden text-sm text-center lg:text-xl lg:text-left lg:max-w-lg ${
              layout?.textPosition === "After counter" ? "block" : "hidden"
            }`}
            dangerouslySetInnerHTML={{ __html: text }}
          >
          </div>
        </div>
      </div>
      <script
        type="module"
        dangerouslySetInnerHTML={{
          __html: `(${snippet})("${expiresAt}", "${id}");`,
        }}
      />
    </>
  );
}

export default CampaignTimer;
