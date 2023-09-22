import { FaBars } from "react-icons/fa6"; 
import { FaXmark } from "react-icons/fa6"; 

const Nav_Bars = ({ handleRenderMenu, renderedMenu }) => {
  return (
    <button
      className="bg-mybg2 cursor-pointer rounded-full p-2 dark:bg-mybg2 lg:hidden "
      onClick={handleRenderMenu}
    >
      {renderedMenu ? <FaXmark className="z-50 top-0 left-0" /> : <FaBars size={14} className="text-myacc" />}
    </button>
  );
};

export default Nav_Bars;
