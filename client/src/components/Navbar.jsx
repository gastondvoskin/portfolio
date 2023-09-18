import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Nav_Link from "../components/Nav_Link";

import { nameRovaletti } from "../data/dataRovaletti/dataNav";
import { nameDvoskin } from "../data/dataDvoskin/dataNav";

import dvoskin from "../assets/profileImage/dvoskin.jpg";
import rovaletti from "../assets/profileImage/rovaletti.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMoon, faSun, faXmark, } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const html = document.querySelector("html");

  const toggleDarkMode = () => {
    html.classList.toggle("dark");
    setDarkMode(!darkMode);
  };
  const dataOwner = import.meta.env.VITE_DATAOWNER;
  const ownerName = dataOwner === "dvoskin" ? nameDvoskin : nameRovaletti;
  const ownerImg = dataOwner === "dvoskin" ? dvoskin : rovaletti;

  const [renderedMenu, setRenderedMenu] = useState(false);

  const handleRenderMenu = () => {
    setRenderedMenu(!renderedMenu);
  };

  return (
    <nav className="flex flex-row justify-between items-center bg-white w-full h-16 text-black fixed border-b-4 border-solid border-black dark:bg-slate-900 dark:text-white">
      {/* image and name */}
      <button onClick={() => scroll.scrollToTop({ duration: 300 })}>
        <div className="flex items-center ml-8">
          <img
            className="w-10 h-10 mr-2 rounded-full"
            src={ownerImg}
            alt={ownerName}
          />
          <span>{ownerName.toUpperCase()}</span>
        </div>
      </button>

      {/* themes and bars */}
      <div>
        {/* themes */}
        <button
          className="rounded-full bg-mybg2 w-7 h-7 dark:bg-mybg1d lg:hidden"
          onClick={toggleDarkMode}
        >
          {darkMode ? (
            <FontAwesomeIcon icon={faSun} />
          ) : (
            <FontAwesomeIcon icon={faMoon} />
          )}
        </button>

        {/* bars */}
        <button
          className="mx-4 cursor-pointer lg:hidden"
          onClick={handleRenderMenu}
        >
          {/* {renderedMenu ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />} */}
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      {/* links container for small devices*/}
      <div className={`${renderedMenu ? "fixed" : "hidden"} lg:hidden inset-0 z-50 bg-mybg1 text-3xl dark:bg-mybg2d`}>
        <div className="flex flex-col h-full items-center justify-center">
          <Link
            onClick={handleRenderMenu}
            className="my-4 cursor-pointer"
            to="home"
            smooth={true}
            duration={300}
          >
            HOME
          </Link>
          <Link
            onClick={handleRenderMenu}
            className="my-4 cursor-pointer"
            to="about"
            smooth={true}
            duration={300}
          >
            ABOUT
          </Link>
          <Link
            onClick={handleRenderMenu}
            className="my-4 cursor-pointer"
            to="projects"
            smooth={true}
            duration={300}
          >
            PROJECTS
          </Link>
          <Link
            onClick={handleRenderMenu}
            className="my-4 cursor-pointer"
            to="skills"
            smooth={true}
            duration={300}
          >
            TECHNOLOGIES
          </Link>
          <Link
            onClick={handleRenderMenu}
            className="my-4 cursor-pointer"
            to="contact"
            smooth={true}
            duration={300}
          >
            CONTACT
          </Link>

          <button
            className="my-8 cursor-pointer lg:hidden"
            onClick={handleRenderMenu}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
      </div>

      {/* links container for large devices*/}
      <div className="hidden lg:flex items-center mr-8">
        <Nav_Link handleRenderMenu={handleRenderMenu} to="home"/>
        <Link
          onClick={handleRenderMenu}
          className="mx-4 cursor-pointer"
          to="home"
          smooth={true}
          duration={300}
        >
          HOME
        </Link>
        <Link
          className="mx-4 cursor-pointer"
          to="about"
          smooth={true}
          duration={300}
        >
          ABOUT
        </Link>
        <Link
          className="mx-4 cursor-pointer"
          to="projects"
          smooth={true}
          duration={300}
        >
          PROJECTS
        </Link>
        <Link
          className="mx-4 cursor-pointer"
          to="skills"
          smooth={true}
          duration={300}
        >
          TECHNOLOGIES
        </Link>
        <Link
          className="mx-4 cursor-pointer"
          to="contact"
          smooth={true}
          duration={300}
        >
          CONTACT
        </Link>
        <button
          className="ml-4 rounded-full bg-mybg2 w-10 h-10 dark:bg-mybg1d"
          onClick={toggleDarkMode}
        >
          {darkMode ? (
            <FontAwesomeIcon icon={faSun} />
          ) : (
            <FontAwesomeIcon icon={faMoon} />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
