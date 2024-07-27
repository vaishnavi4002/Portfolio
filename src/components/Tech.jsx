
import {RiReactjsLine} from "react-icons/ri"
import { SiHtml5, SiCss3, SiJavascript } from 'react-icons/si';
import { motion } from "framer-motion";

const iconvariant=(duration)=>({

    initial:{y:-10},
    animate:{
        y:[-10,10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse"
        }
    }
})

const Tech = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h2 className="my-20 text-center text-4xl">Technologies</h2>
          <div className="flex flex-wrap justify-center items-center gap-4">
              
               <motion.div 
               variants={iconvariant(2.5)}
               initial="initial"
               animate="animate"
               className="rounded-2xl border-4 border-neutral-800 p-4">
                  <SiHtml5 className="text-6xl text-orange-400"/>
               </motion.div>
               <motion.div
                variants={iconvariant(3)}
                initial="initial"
                animate="animate" 
               className="rounded-2xl border-4 border-neutral-800 p-4">
                  <SiCss3 className="text-6xl text-blue-400"/>
               </motion.div>
               <motion.div 
                variants={iconvariant(5)}
                initial="initial"
                animate="animate"
               className="rounded-2xl border-4 border-neutral-800 p-4">
                  <SiJavascript className="text-6xl text-yellow-400"/>
               </motion.div>
               <motion.div
                variants={iconvariant(2)}
                initial="initial"
                animate="animate"
               className="rounded-2xl border-4 border-neutral-800 p-4">
                  <RiReactjsLine className="text-6xl text-cyan-400"/>
               </motion.div>
          </div>
    </div>
  )
}

export default Tech
