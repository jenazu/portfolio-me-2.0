import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hello, the Name's Pham Nghia",
      "React-Developer.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        src="https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/315521305_1225902871319728_754656927356546421_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=092uRPcLgMQAX8gxB4t&_nc_ht=scontent.fhan17-1.fna&oh=03_AdR_Ccnd0BK2L7qV6CRkXV_MTJH9__z2oKCvOW3yWdyWKg&oe=639EDD7E"
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
      />
      <div>
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1>
          <span className="text-5xl lg:text-6xl font-semibold px-10">
            {text}
          </span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div>
          <button>About</button>
          <button>Experience</button>
          <button>Skills</button>
          <button>Projects</button>
          <button></button>
        </div>
      </div>
    </div>
  );
}
