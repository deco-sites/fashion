export default function MobileApps(
  { content }: { content: { apple?: string; android?: string } },
) {
  return (
    <>
      {(content?.apple || content?.android) && (
        <div class="flex gap-2 lg:flex-wrap">
          {content?.apple && (
            <a href={content?.apple} target="_blank">
              <img
                loading="lazy"
                width="135"
                height="40"
                src="/image/app-apple.png"
              />
            </a>
          )}
          {content?.android && (
            <a href={content?.android} target="_blank">
              <img
                loading="lazy"
                width="135"
                height="40"
                src="/image/app-android.png"
              />
            </a>
          )}
        </div>
      )}
    </>
  );
}
