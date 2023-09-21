import { Link } from "react-scroll";

const Nav_Link = ({ onClick, to, isCurrent }) => {

  return (
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
