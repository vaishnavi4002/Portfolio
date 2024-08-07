import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import project1Img from '../react-portfolio-assets-kevin-main/assets/voiceAssistant.jpeg'
import project2Img from '../react-portfolio-assets-kevin-main/assets/portfolio.png'
import project3Img from '../react-portfolio-assets-kevin-main/assets/littlelemon.jpg'
import { motion } from "framer-motion";

const projects = [
  {
       img: project1Img,
       title: "Virtual Desktop Voice Assistant",
       desc: "Developed a Virtual Desktop Voice Assistant website using Python and various libraries and APIs. Implemented essential features such as voice-based Wikipedia search, web browser integration, user authentication, and more.",
       tech: "Python, HTML, CSS, Django"
  },
  {
    img: project3Img,
    title: "Little Lemon Restaurant",
    desc: "Developed a dynamic and responsive React website for Little Lemon Restaurant. Utilized a RESTful Table-booking API for querying available reservation times and integrated form validation functionality.",
    tech: "HTML, CSS, Tailwind CSS, React"
   },
  {
      img: project2Img,
      title: "Portfolio website",
      desc: "This site features a modern, responsive design with interactive components, including a dynamic navigation bar and project gallery. It emphasizes performance through lazy loading and efficient state management with React hooks.",
      tech: "HTML, Tailwind CSS, React"
 },
]

const Project = () => {
return (
  <div className="border-b border-neutral-800 pb-4 items-center">
    <div className="my-10">
      <h2 className="text-center text-4xl">Projects</h2>
    </div>
    <motion.div
      initial={{x:-100, opacity:0}}
      whileInView={{x:0, opacity:1}}
      transition={{duration:0.5, delay:0.5}}
      className="flex flex-wrap justify-center gap-10"
    >
      {projects.map((project, index) => (
        <Card key={index} className="w-80">
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h3" color="blue-gray" className="mb-4 text-center">
              {project.title}
            </Typography>
            <Typography className="text-md">
              {project.desc}
              <br />
              <span className="text-cyan-600 text-sm">{project.tech}</span>
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>See More</Button>
          </CardFooter>
        </Card>
      ))}
    </motion.div>
  </div>
)
}

export default Project;
