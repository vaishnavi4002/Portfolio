import About from "./components/About"
import ContactMe from "./components/ContactMe"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Project from "./components/Project"
import Tech from "./components/Tech"
import { Element } from "react-scroll"
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {


  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 
    selection:text-cyan-900">
      <div  className="fixed w-full h-full top-0 -z-10 ">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,
      rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div  className="  container mx-auto px-8">
      <Navbar />
      <Element name="home">< Hero/></Element>
      <Element name="about"><About/></Element>
      <Element name ="tech"> <Tech/></Element>
      <Element name ="project"><Project/></Element>
      <Element name="contact"><ContactMe/></Element>
    
      <Footer/>
      </div>
      
    </div>

  )
}

export default App
