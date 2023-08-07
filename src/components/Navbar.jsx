import { useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const toggleDarkMode = () => {
    const html = document.querySelector("html");
    html.classList.toggle("dark");
  };
  return (
    <nav className="flex flex-row justify-end items-center bg-mybg w-full h-16 text-mytext fixed dark:bg-mybgd dark:text-mytextd">
      <div className="flex">
        <Link
          className="px-7 cursor-pointer"
          to="about"
          smooth={true}
          duration={500}
        >
          ABOUT
        </Link>
        <Link
          className="px-7 cursor-pointer"
          to="projects"
          smooth={true}
          duration={500}
        >
          PROJECTS
        </Link>
        <Link
          className="px-7 cursor-pointer"
          to="skills"
          smooth={true}
          duration={500}
        >
          TECHNOLOGIES
        </Link>
        <Link
          className="px-7 cursor-pointer"
          to="contact"
          smooth={true}
          duration={500}
        >
          CONTACT
        </Link>
        <button onClick={toggleDarkMode}> CAMBIAR TEMA</button>
      </div>
    </nav>
  );
};

export default Navbar;
