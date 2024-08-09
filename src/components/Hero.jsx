
import profileImg from '../react-portfolio-assets-kevin-main/assets/profilephoto.jpg'

import { motion } from "framer-motion";
const container=(delay)=>(
    {
        hidden:{x:-100,opacity:0},
        visible:{
            x:0,
            opacity:1,
            transition:{duration:0.6,delay:delay},
        }
    }
)
function Hero() {
  return (
    <div className="border-b border-neutral-900 pd-4 lg:mb-35">
      <div  className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
               <div className="flex flex-col items-center lg:items-start">
                  <motion.h1 
                  variants={container(0)}
                  initial='hidden'
                  animate='visible'
                  className="pb-16 text-6xl tracking-tight font-thin lg:mt-16 lg:text-6xl">
                  Vaishnavi Wani</motion.h1>

                  <motion.span 
                   variants={container(0.5)}
                   initial='hidden'
                   animate='visible'
                  className="bg-gradient-to-r from-pink-300 via-slate-500
                  to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"> Software Developer</motion.span>

                  <motion.p
                   variants={container(1)}
                   initial='hidden'
                   animate='visible'
                     className="my-2 max-w-xl py-6 font-light tracking-tighter">
I am a skilled web developer with expertise in HTML, CSS, Tailwind CSS, 
React, JavaScript and Django. I am proficient in building responsive and 
dynamic web applications, utilizing modern frameworks and libraries to deliver high-quality user experiences.
                  </motion.p>
               </div>
        </div>

        <div className='w-full lg:w-1/2 lg:p-8'>
            <div  className='flex justify-center'>
                 <motion.img
                 initial={{x:100, opacity:0}}
                 animate={{x:0,opacity:1}}
                 transition={{duration:1,delay:1.}}
                 className='opacity-60   w-1/2 lg:w-3/4' src={profileImg} alt="profile-img"  />

            </div>

        </div>
      </div>
    </div>
  )
}

export default Hero
