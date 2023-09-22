import { WiMoonAltThirdQuarter } from 'react-icons/wi'; 

const Nav_Themes = ({ darkMode, toggleDarkMode }) => {
  console.log(darkMode)
  return (
    <button
      className="mx-8 bg-transparent duration-700 transform transition-transform rotate-0 hover:rotate-180"
      onClick={toggleDarkMode}
    >
      <WiMoonAltThirdQuarter size={33} color="#6366f1" />
    </button>
  );
};

export default Nav_Themes;
