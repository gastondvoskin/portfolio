import { Link } from "react-scroll";
import cvDvoskin from "../assets/CV/Gastón_Dvoskin_Front-end_Developer.pdf";

const Nav_Link = ({ onClick, to, isCurrent, cv }) => {
  return cv ? (
    <a href={cvDvoskin} download className="my-4 cursor-pointer hover:text-myacc lg:my-auto lg:mx-4">CV</a>
  ) : (
    <Link
      onClick={onClick}
      className={`my-4 cursor-pointer hover:text-myacc lg:my-auto lg:mx-4 ${isCurrent ? "text-myacc" : ""}`}
      to={to}
      smooth={true}
      duration={300}
    >
      {to.toUpperCase()}
    </Link>
  );
};

export default Nav_Link; 