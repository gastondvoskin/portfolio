import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";


const Nav_Themes = ({ darkMode, toggleDarkMode }) => {
  return (
    <button
      className="mx-8 rounded-full bg-mybg2 w-7 h-7 dark:bg-mybg1d"
      onClick={toggleDarkMode}
    >
      {darkMode ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
    </button>
  );
};

export default Nav_Themes;
