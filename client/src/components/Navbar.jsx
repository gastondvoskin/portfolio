import { useState } from "react";
import Nav_Logo from "./Nav_Logo"; 
import Nav_Link from "../components/Nav_Link";
import Nav_Themes from "./Nav_Themes";
import Nav_Bars from "./Nav_Bars";

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

  const NAV_TEXTS = ["home", "about", "projects", "technologies", "contact"];

  // console.log("window.innerWidth : ", window.innerWidth);
  
  return (
    <nav className="flex flex-row justify-between items-center bg-white w-full h-16 text-black fixed border-b-4 border-solid border-black dark:bg-slate-900 dark:text-white">
      <Nav_Logo ownerImg={ownerImg} ownerName={ownerName}/>
      
      <div>
        <Nav_Themes darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Nav_Bars renderedMenu={renderedMenu} handleRenderMenu={handleRenderMenu} />
      </div>

      {/* links container for small devices*/}
      <div className={`${renderedMenu ? "fixed" : "hidden"} lg:hidden inset-0 z-50 bg-mybg1 text-3xl dark:bg-mybg2d`}>
        <div className="flex flex-col h-full items-center justify-center">
          {NAV_TEXTS.map((text, index) => <Nav_Link key={index} handleRenderMenu={handleRenderMenu} to={text} margin="my-4" />)}

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
        {NAV_TEXTS.map((text, index) => <Nav_Link key={index} handleRenderMenu={handleRenderMenu} to={text} margin="mx-4"/>)}
        
        
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
