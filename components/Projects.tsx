import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row
    max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        projects
      </h3>
      <div
        className="relactive w-full flex overflow-x-scroll overflow-y-hidden snap-x
      snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80"
      >
        {projects.map((p, i) => (
          <div
            className="flex flex-col w-screen flex-shrink-0 snap-center space-y-5
          items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4faVt2tCZlWXRnk7OlYWjHMfiFFle4eCq6NpGXLFlIbrpsfwgqGCflWFFxZf4GztAtUM&usqp=CAU"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#f7ab0a]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>
                UPS clone
              </h4>
              <p className="text-lg text-center md:text-left">
                The imported SVG React Component accepts a title prop along with
                other props that a svg element accepts. Use this prop to add an
                accessible title to your svg component.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12" />
    </div>
  );
}
