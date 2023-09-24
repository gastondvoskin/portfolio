import { WiMoonAltThirdQuarter } from 'react-icons/wi'; 

const Nav_Themes = ({ /* darkMode,  */toggleDarkMode }) => {
  return (
    <button
      className="duration-700 transform transition-transform rotate-0 hover:rotate-180"
      onClick={toggleDarkMode}
    >
      <WiMoonAltThirdQuarter className="text-myacc text-3xl lg:text-4xl" />
    </button>
  );
};

export default Nav_Themes;
