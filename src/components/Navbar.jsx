import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { nameRovaletti } from "../data/dataRovaletti/dataContact";
import { nameDvoskin } from "../data/dataDvoskin/dataContact";
import dvoskin from "../assets/profileImage/dvoskin.jpg";
import rovaletti from "../assets/profileImage/rovaletti.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'; 


const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const html = document.querySelector("html");
  
  const toggleDarkMode = () => {
    // console.log(html.classList[0])
    html.classList.toggle("dark");
    setDarkMode(!darkMode);
  };
  const dataOwner = import.meta.env.VITE_DATAOWNER;
  const ownerName =  dataOwner === "dvoskin" ? nameDvoskin : nameRovaletti;
  const ownerImg =  dataOwner === "dvoskin" ? dvoskin : rovaletti;


  return (
    <main className="flex flex-row justify-between items-center bg-white w-full h-16 text-black fixed border-b-4 border-solid border-black dark:bg-slate-900 dark:text-white">
      <button onClick={() => scroll.scrollToTop({duration: 300})}>
        <div className="flex items-center ml-8">
          <img
            className="w-10 h-10 mr-2 rounded-full"
            src={ownerImg}
            alt={ownerName}
          />
          <span>{ownerName}</span>
        </div>
      </button>
      
      <div className="flex items-center mr-8">
        <Link
          className="mx-7 cursor-pointer"
          to="home"
          smooth={true}
          duration={300}
        >
          HOME
        </Link>
        <Link
          className="mx-7 cursor-pointer"
          to="about"
          smooth={true}
          duration={300}
        >
          ABOUT
        </Link>
        <Link
          className="mx-7 cursor-pointer"
          to="projects"
          smooth={true}
          duration={300}
        >
          PROJECTS
        </Link>
        <Link
          className="mx-7 cursor-pointer"
          to="skills"
          smooth={true}
          duration={300}
        >
          TECHNOLOGIES
        </Link>
        <Link
          className="mx-7 cursor-pointer"
          to="contact"
          smooth={true}
          duration={300}
        >
          CONTACT
        </Link>
        <button
          className="mx-7 rounded-full bg-mybg2 w-10 h-10 dark:bg-mybg1d"
          onClick={toggleDarkMode}
        >
          {darkMode ? <div>☀️</div> : <div>☾</div>}
        </button>
        
        <FontAwesomeIcon icon={faBars} className="px-7 cursor-pointer md:hidden"/>
      </div>
    </main>
  );
};

export default Navbar;
