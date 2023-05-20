import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { useState } from "preact/hooks";

export interface Props {
  title: string;
  subtitle: string;
  logo: LiveImage[];
  texts: string[];
  photo: LiveImage[];
  name: string[];
  position: string[];
  company: string[];
}

export default function Navbar(params: Props) {
  const [value, setValue] = useState(0);
  function next(index: number) {
    if (index < params.texts.length - 1) {
      return `#${index + 1}`;
    }
    return `#${index}`;
  }

  function prev(index: number) {
    if (index == 0) {
      return `#${index}`;
    } else {
      return `#${index - 1}`;
    }
  }
  
  function seting(index: number) {
    if (index >= 0 && index < params.texts.length) {
      setValue(index);
    }
  }
  return (
    <div className="flex flex-col items-center bg-white gap-4 p-4">
      <h1 className="text-4xl text-black mt-5">
        {params.title ?? "Title"}
      </h1>
      <h2 className="text-2xl text-black text-center">
        {params.subtitle ??
          "Subtitle"}
      </h2>
      <div className="carousel w-full min-h-min">
        {params.texts?.map((text, i) => (
          <div
            id={i.toString()}
            className="carousel-item flex-col relative w-full justify-center items-center"
          >
            <div className="avatar mt-12 mb-4">
              <div className="w-24 rounded-xl">
                <img
                  className="fill-none"
                  src={params.logo[i]}
                />
              </div>
            </div>
            <a className="text-center text-black w-60 lg:w-3/4 text-xl">
              {text}
            </a>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href={prev(i)} className="btn btn-circle">❮</a>
              <a href={next(i)} className="btn btn-circle">❯</a>
            </div>
            <div className="avatar mt-6 lg:mt-14 mb-3">
              <div className="w-24 rounded-full">
                <img
                  className="fill-none"
                  src={params.photo[i]}
                />
              </div>
            </div>
            <p className="text-black text-center text-lg">{params.name[i]}</p>
            <p className="text-black text-center text-lg">
              {params.position[i]}, {params.company[i]}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-row gap-4">
        {params.texts?.map((_, i) => (
          <div
            className={`${
              value === i ? "bg-black" : "bg-slate-400"
            } rounded-full h-2 w-2`}
          />
        ))}
      </div>
    </div>
  );
}
