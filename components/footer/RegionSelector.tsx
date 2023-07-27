export type Item = {
  label: string;
  href: string;
};

export interface RegionOptions {
  currency?: Item[];
  language?: Item[];
}

export default function RegionSelector(
  { content }: { content?: RegionOptions },
) {
  return (
    <>
      {content && content.language && content.currency &&
        (content?.language?.length > 0 || content?.currency?.length > 0) && (
        <div class="flex flex-wrap gap-4 text-base-content">
          {content?.currency?.length > 0 && (
            <select class="select select-bordered select-sm h-10">
              {content.currency.map((crr) => <option>{crr.label}</option>)}
            </select>
          )}
          {content?.language?.length > 0 && (
            <select class="select select-bordered select-sm h-10">
              {content.language.map((lng) => <option>{lng.label}</option>)}
            </select>
          )}
        </div>
      )}
    </>
  );
}
