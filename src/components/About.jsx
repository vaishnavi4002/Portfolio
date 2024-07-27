
import aboutImg from '../react-portfolio-assets-kevin-main/assets/about.jpg'
import { motion } from 'framer-motion'
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">About <span className="text-neutral-500">Me</span> </h2>

          <div className="flex flex-wrap">
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:0.5}}
            className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                     <img  className="w-3/4 rounded-2xl" src={aboutImg} alt="about"  />
                </div>
            </motion.div>
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:100}}
            transition={{duration:0.5}}
            className='w-full lg:w-1/2 lg:p-8'>
                   <p className='my-2 max-w-xl py-6'>
                   I am a skilled web developer with expertise in HTML, CSS, Tailwind CSS, React, and JavaScript. With a passion for creating responsive and dynamic web applications, I leverage modern frameworks and libraries to deliver high-quality user experiences. My proficiency in building efficient and user-friendly interfaces allows me to bring creative ideas to life, ensuring seamless interaction and performance across various devices. Whether working on a solo project or collaborating with a team, I am committed to continuous learning and staying updated with the latest industry trends to provide the best solutions in web development.
                   </p>
            </motion.div>

        
         </div>
    </div>

     
  )
}

export default About
