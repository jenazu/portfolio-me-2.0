import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";

type Props = {projects: Project[]};

export default function Projects({projects}: Props) {
  
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
        {projects?.map((p, i) => (
          <div
          key={p._id}
            className="flex flex-col w-screen flex-shrink-0 snap-center space-y-5
          items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              src={urlFor(p?.image).url()}
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#f7ab0a]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>
                {p.title}
              </h4>
              <div className="flex items-center space-x-2 justify-center">
                {p?.technologies.map((t) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img 
                  className="h-10 w-10"
                  key={t._id}
                  src={urlFor(t.image).url()}
                  alt=""/>
                ))}
              </div>
              <p className="text-lg text-center md:text-left">
                {p.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12" />
    </div>
  );
}
