import { FaBars } from "react-icons/fa6"; 
import { FaXmark } from "react-icons/fa6"; 

const Nav_Bars = ({ handleRenderMenu, renderedMenu }) => {
  return (
    <button
      className="cursor-pointer ml-4 lg:hidden"
      onClick={handleRenderMenu}
    >
      {renderedMenu ? <FaXmark className="z-50 top-0 left-0" /> : <FaBars className="text-myacc text-2xl lg:text-3xl" />}
    </button>
  );
};

export default Nav_Bars;
