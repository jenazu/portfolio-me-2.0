import React from 'react'
import {motion} from "framer-motion"
import { Experience } from '../typings'
import { urlFor } from '../sanity'

type Props = {experience: Experience}

export default function ExperienceCard({experience}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img src={urlFor(experience.companyImage).url()}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        initial={{y:-100, opacity:0}}
        transition={{duration:1.2}}
        whileInView={{opacity: 1, y:0}}
        viewport={{once:true}}
        />
    <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light uppercase'>{experience.jobTitle}</h4>
        <p className='uppercase font-bold text-2xl mt-1'>{experience.company}</p>
        <div className='flex space-x-2 my-2'>
          {experience?.technologies?.map((t) => (

        // eslint-disable-next-line @next/next/no-img-element
        <img src={urlFor(t.image).url()} alt="" className='h-10 w-10 rounded-full' key={t._id}/>
          ))}
        
        </div>
            <p className='uppercase py-5 text-gray-300 max-h-96 pr-5 overflow-y-scroll 
            scrollbar-thin scrollbar-track-black scrollbar-thumb-[#f7ab0a]/80'>
              {new Date(experience.dateStarted).toDateString()} -{" "}
               {experience.isCurrentlyWorkingHere ? "Present" : new Date(experience.dateEnded).toDateString()}
            </p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
              {experience?.points?.map((p, index) => (

                <li key={index}>{p}</li>
              ))}
               
            </ul>
    </div>
    </article>
  )
}