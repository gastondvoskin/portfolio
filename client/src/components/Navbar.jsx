import Nav_Logo from "./Nav_Logo"; 
import Nav_Themes from "./Nav_Themes";
import Nav_LinksContainerSmall from "./Nav_LinksContainerSmall";
import Nav_LinksContainerLarge from "./Nav_LinksContainerLarge";
import Nav_Bars from "./Nav_Bars";
import { useState } from "react";


const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const html = document.querySelector("html");

  const toggleDarkMode = () => {
    html.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  const [ currentSection, setCurrentSection ] = useState("home"); 

  const [renderedMenu, setRenderedMenu] = useState(false);
  const handleRenderMenu = () => {
    setRenderedMenu(!renderedMenu);
  };

  const NAV_TEXTS = ["home", "about", "projects", "TECHS", "contact"];

  
  return (
    <nav className="flex flex-row justify-between items-center bg-white w-full h-16 text-black fixed border-b-2 border-solid border-black dark:bg-slate-900 dark:text-white z-20 lg:h-20">
      <Nav_Logo id="leftContainer" />

      <div id="rightContainer" className="flex flex-row mr-4 relative lg:mr-8">
        <Nav_LinksContainerSmall setCurrentSection={setCurrentSection} currentSection={currentSection} handleRenderMenu={handleRenderMenu} renderedMenu={renderedMenu} NAV_TEXTS={NAV_TEXTS} className="lg:hidden"/>
        <Nav_LinksContainerLarge setCurrentSection={setCurrentSection} currentSection={currentSection} NAV_TEXTS={NAV_TEXTS} />
        <Nav_Themes darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Nav_Bars renderedMenu={renderedMenu} handleRenderMenu={handleRenderMenu} />
      </div>
    </nav>
  );
};

export default Navbar;
