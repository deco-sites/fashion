export interface Props {
    textInput: string,
    nameLink: string,
    link: string
}

export default function TextCampeignTime({textInput, nameLink, link}: Props){
    return (
        <>
          {textInput ? (
            <p class="text-white font-sans font-normal text-lg">
              {textInput}{" "}
              <a href={link} class="underline cursor-pointer">{nameLink}</a>
            </p>
          )
          : (
            <p class="text-white font-sans font-normal text-lg">
              Time left for a campaign to end wth a{" "}
              <a href={!link ? "" : link} class="underline cursor-pointer">
                link
              </a>
            </p>
          )}
        </>
    )
}