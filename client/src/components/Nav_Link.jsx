import { Link } from "react-scroll";

const Nav_Link = ({handleRenderMenu, to, margin}) => {
  return (
    <Link onClick={handleRenderMenu} className={`${margin} cursor-pointer`} to={to} smooth={true} duration={300}>{to.toUpperCase()}</Link>
  );
};

export default Nav_Link;
