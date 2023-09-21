import { Link } from "react-scroll";

const Nav_Link = ({handleRenderMenu, to}) => {
  return (
    <Link onClick={handleRenderMenu} className={"my-4 cursor-pointer lg:my-auto lg:mx-4"} to={to} smooth={true} duration={300}>{to.toUpperCase()}</Link>
  );
};

export default Nav_Link;
