import { Link } from "react-scroll"

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-end items-center bg-orange-500 w-full h-16">
      <div className="flex justify-between">
        <Link className="px-7" to="about" smooth={true} duration={500}>ABOUT</Link>
        <Link className="px-7"to="projects" smooth={true} duration={500}>PROJECTS</Link>
        <Link className="px-7"to="skills" smooth={true} duration={500}>TECHNOLOGIES</Link>
        <Link className="px-7" to="contact" smooth={true} duration={500}>CONTACT</Link>     
      </div>
    </nav> 
  )
}

export default Navbar