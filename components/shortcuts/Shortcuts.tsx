import {
  default as ShortcutButton,
  Props as ShortcutButtonProps,
} from "$store/components/shortcuts/ShortcutButton.tsx";

export interface Props {
  buttons: ShortcutButtonProps[];
}

function Shortcuts({ buttons }: Props) {
  return (
    <ul className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col border border-base-300">
      {buttons.map((button) => {
        return (
          <li className="leading-none group">
            <ShortcutButton {...button} />
          </li>
        );
      })}
    </ul>
  );
}

export default Shortcuts;
