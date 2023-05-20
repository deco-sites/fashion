export interface LogoGalleryProps {
  title: string;
  description: string;
  logos?: Array<{
    srcUrl: string;
    alt?: string;
  }>;
}

export default function LogoGallery(
  { title, description, logos }: LogoGalleryProps,
) {
  return (
    <div>
      <h1 class="font-bold text-center">{title}</h1>
      <p class="p-4">{description}</p>

      <ul class="carousel rounded-box flex justify-center items-center overflow-hidden">
        {logos?.map((logo) => (
          <li class="carousel-item mr-3 w-[100px]">
            <img src={logo.srcUrl} alt={logo.alt} />
          </li>
        ))}
      </ul>
    </div>
  );
}