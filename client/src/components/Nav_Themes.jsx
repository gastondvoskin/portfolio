import { WiMoonAltThirdQuarter } from 'react-icons/wi'; 

const Nav_Themes = ({ toggleDarkMode }) => {
  return (
    <button
      className="mx-8 bg-transparent hover:bg-mybg2 dark:hover:bg-mybg2d"
      onClick={toggleDarkMode}
    >
      <WiMoonAltThirdQuarter />
    </button>
  );
};

export default Nav_Themes;
