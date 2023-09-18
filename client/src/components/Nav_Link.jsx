import { Link, animateScroll as scroll } from "react-scroll";


const Nav_Link = ({handleRenderMenu, to}) => {
  return (
    <Link onClick={handleRenderMenu} className="mx-4 cursor-pointer" to={to} smooth={true} duration={300}>{to.toUpperCase()}</Link>
  );
};

export default Nav_Link;
