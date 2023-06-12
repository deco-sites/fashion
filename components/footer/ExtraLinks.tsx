export default function ExtraLinks({ content }: { content: Array }) {
  return (
    <>
      {content?.length > 0 && (
        <div class="flex flex-col md:flex-row gap-5 lg:gap-10">
          {content.map((item) => (
            <a class="link text-sm" href={item.href}>{item.label}</a>
          ))}
        </div>
      )}
    </>
  );
}
