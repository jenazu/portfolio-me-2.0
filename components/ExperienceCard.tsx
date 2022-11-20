import React from 'react'
import {motion} from "framer-motion"

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img src='https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-6/310062361_507818774687074_5366263385327007205_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=4giSlGlhMHgAX8Ho_DM&_nc_ht=scontent.fhan3-2.fna&oh=00_AfApmXxChO9ierCXYtbkqVJjvcYlS8j9lsaYzUTpNnSs8g&oe=637DC87D'
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        initial={{y:-100, opacity:0}}
        transition={{duration:1.2}}
        whileInView={{opacity: 1, y:0}}
        viewport={{once:true}}
        />
    <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Frontend Developer</h4>
        <p className='uppercase font-bold text-2xl mt-1'>comartek</p>
        <div className='flex space-x-2 my-2'>
        <img src="https://www.kindpng.com/picc/m/464-4640184_css3-png-download-css-icon-transparent-png.png" alt="" className='h-10 w-10 rounded-full'/>
        <img src="https://st.depositphotos.com/1796420/4113/v/600/depositphotos_41138921-stock-illustration-vector-icon-of-orange-javascript.jpg" alt="" className='h-10 w-10 rounded-full'/>
        </div>
            <p className='uppercase py-5 text-gray-300'>Started word... - End...</p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
    </div>
    </article>
  )
}