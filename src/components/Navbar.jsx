
import logo from '../react-portfolio-assets-kevin-main/assets/vlogo.jpg'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className=" mb-10 flex justify-between items-center py-6">
    <div className=" ml-6 flex flex-shrink-0 items-center">
      <img  className="w-20"   src={logo}  alt="logo" />
    </div>
    
    <ul className="flex space-x-4">
        <li>
          <Link to="home" smooth={true}
            duration={500}
            className="text-white cursor-pointer" >Home</Link>
        </li>
        <li>
          <Link to="about" smooth={true}
            duration={500}
            className="text-white cursor-pointer">About</Link>
        </li>
        <li>
          <Link to="tech" smooth={true}
            duration={500}
            className="text-white cursor-pointer">Technologies</Link>
        </li>
        <li>
          <Link to="project" smooth={true}
            duration={500}
            className="text-white cursor-pointer">Projects</Link>
        </li>
        <li>
          <Link to="contact" smooth={true}
            duration={500}
            className="text-white cursor-pointer">Contact</Link>
        </li>
      </ul>
    
    <div className="m-5 flex justify-center gap-4 text-2xl">
    <Link to="https://www.linkedin.com/in/vaishnavi-wani-b1a29b22a/"><FaLinkedin /></Link>
    <Link to="https://github.com/vaishnavi4002"><FaGithub /></Link>
    <Link to="https://github.com/vaishnavi4002"> <FaInstagram /></Link>
    <Link to="https://github.com/vaishnavi4002"> <FaSquareXTwitter /></Link>
     
    </div>
  </nav>
  );
}

export default Navbar
