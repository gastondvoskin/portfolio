import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, } from "@fortawesome/free-solid-svg-icons";


const Nav_Bars = ({ handleRenderMenu, renderedMenu }) => {
  return (
    <button
      className="mx-4 cursor-pointer lg:hidden"
      onClick={handleRenderMenu}
    >
      {renderedMenu ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
    </button>
  );
};

export default Nav_Bars;
