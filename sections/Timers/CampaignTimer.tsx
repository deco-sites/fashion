import { useId } from "preact/hooks";
import { HTML } from "deco-sites/std/components/types.ts";

export interface Props {
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

  /**
   * @title Text
   * @default Time left for a campaign to end wth a link
   */
  text?: HTML;

  link?: {
    /**
     * @title Link Text
     * @default button
     */
    label: string;
    /**
     * @title Link href
     * @default #
     */
    href: string;
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
      hours: totalHours,
      minutes,
      seconds,
    };
  };

  const setValue = (id: string, value: number) => {
    const elem = document.getElementById(id);

    if (!elem) return;

    elem.style.setProperty("--value", value.toString());
  };

  setInterval(() => {
    const { hours, minutes, seconds } = getDelta();
    const isExpired = hours + minutes + seconds < 0;

    if (isExpired) {
      const expired = document.getElementById(`${rootId}::expired`);
      const counter = document.getElementById(`${rootId}::counter`);
      const link = document.getElementById(`${rootId}::link`);

      expired?.classList.remove("hidden");
      counter?.classList.add("hidden");
    } else {
      setValue(`${rootId}::hours`, hours);
      setValue(`${rootId}::minutes`, minutes);
      setValue(`${rootId}::seconds`, seconds);
    }
  }, 1_000);
};

function CampaignTimer({
  expiresAt = `${new Date()}`,
  labels,
  text = "Time left for a campaign to end wth a link",
  link = { label: "Click me", href: "/hello" },
}: Props) {
  const id = useId();

  return (
    <>
      <div class="bg-accent text-accent-content">
        <div class="py-4 grid grid-cols-1 sm:grid-cols-3 place-items-center gap-4">
          <div class="sm:justify-self-end">
            <span dangerouslySetInnerHTML={{ __html: text }} />
          </div>
          <div class="h-20">
            <div id={`${id}::expired`} class="hidden h-full">
              <span class="flex items-center text-2xl h-full">
                {labels?.expired || "Expired!"}
              </span>
            </div>

            <div id={`${id}::counter`}>
              <div class="grid grid-flow-col gap-5 text-center auto-cols-max items-center">
                <div class="flex flex-col">
                  <span class="countdown font-normal text-5xl">
                    <span id={`${id}::hours`} />
                  </span>
                  {labels?.hours || "Hours"}
                </div>
                <div>
                  :
                </div>
                <div class="flex flex-col">
                  <span class="countdown font-normal text-5xl">
                    <span id={`${id}::minutes`} />
                  </span>
                  {labels?.minutes || "Minutes"}
                </div>
                <div>
                  :
                </div>
                <div class="flex flex-col">
                  <span class="countdown font-normal text-5xl">
                    <span id={`${id}::seconds`} />
                  </span>
                  {labels?.seconds || "Seconds"}
                </div>
              </div>
            </div>
          </div>
          <a
            class="btn no-animation sm:justify-self-start"
            aria-label={link.label}
            href={link.href}
          >
            {link.label}
          </a>
        </div>
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: `(${snippet})("${expiresAt}", "${id}");`,
        }}
      />
    </>
  );
}

export default CampaignTimer;
