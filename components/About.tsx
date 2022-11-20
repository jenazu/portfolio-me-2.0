import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
    initial={{
        x: -200,
        opacity: 0,
      }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 
     justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        src="https://scontent.fhan4-3.fna.fbcdn.net/v/t39.30808-6/273042313_3091780434375216_6579453515308778796_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=nCELGxPpTG0AX-TGmIo&_nc_ht=scontent.fhan4-3.fna&oh=00_AfDimqUuk-zXnwzNBFEeK9G4EgnyU1jyYL04vaZLxAYPTA&oe=637E7679"
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover 
        md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#f7ab8a]/50">little</span>{" "}
          background
        </h4>
        <p className="text-sm">
          Hello, my name is Nghia. I am from Ha Noi. I completed my
          Bachelor of Engineering degree in 2018 from Hanoi University of
          Industry. I got hired by a renowned IT company for one year now. I
          have learned the ins and outs of IT operations in my journey from a
          fresher to junior. My qualifications and work experience make me a
          suitable candidate for the profile. I am looking to join your
          organization to explore new dimensions and for the further development
          of my skills.
        </p>
      </div>
    </motion.div>
  );
}
