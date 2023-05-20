export type BenefitItem = {
  icon: { src: string; alt: string };
  title: string;
  description: string;
};

export type HeaderItem = {
  title: string;
  description: string;
};

export interface Props {
  benefit: BenefitItem;
  header: HeaderItem;
}

function Benefit(
  { benefit, header }: Props,
) {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content text-center">
        <h1>{header.title}</h1>
        <p>{header.description}</p>
      </div>

      <div class="hero-content flex w-full text-center">
        <div class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
          <figure>
            <img src={benefit.icon.src} alt={benefit.icon.alt} />
          </figure>
          <h3>{benefit.title}</h3>
          <p>{benefit.description}</p>
        </div>

        <div class="divider divider-horizontal" />

        <div class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
          <figure>
            <img src={benefit.icon.src} alt={benefit.icon.alt} />
          </figure>
          <h3>{benefit.title}</h3>
          <p>{benefit.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Benefit;
