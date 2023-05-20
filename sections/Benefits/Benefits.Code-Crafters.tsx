import Icon, {AvailableIcons} from '$store/components/ui/Icon.tsx';

export interface Props {
  title: string;
  description: string;
  items: {
    icon: AvailableIcons;
    title: string;
    description: string;
  }[];
}

export default function Benefits({title, description, items}: Props) {
  return (
    <div class="bg-gray-500 p-10">
    <div class="text-center bg-red-400">
      <h1 class="text-4xl">{title}</h1>
      <p>{description}</p>
    </div>
    <div class="stats stats-vertical lg:stats-horizontal shadow">
      {items.map(({icon: id = "Deco", title, description}) => (
        <div class="stat" key={title}>
          <Icon id={id} width={40} height={40} strokeWidth={1} />
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      ))}
    </div>
  </div>
  )
}
