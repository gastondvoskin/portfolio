import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";


const Nav_Bars = ({ handleRenderMenu, renderedMenu }) => {
  return (
    <button
      className="cursor-pointer lg:hidden"
      onClick={handleRenderMenu}
    >
      {renderedMenu ? <FontAwesomeIcon icon={faXmark} className="z-50 top-0 left-0" /> : <FontAwesomeIcon icon={faBars} />}
    </button>
  );
};

export default Nav_Bars;
