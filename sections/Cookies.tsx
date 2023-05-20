export interface Props {
  message: string;
  link: string;
}
export default function Cookies({ message, link }: Props) {
  return (
    <div>
      <div className="flex justify-between"></div>
      <div>Cookie policy</div>
      <button>X</button>
      <div>{message}</div>
      <a href={link} className="text-[#6D8B61] underline">
        Read our cookie policy
      </a>
    </div>
  );
}
