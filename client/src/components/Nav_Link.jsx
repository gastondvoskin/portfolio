import { Link } from "react-scroll";
import cvDvoskin from "../assets/CV/Gastón_Dvoskin_Front-end_Developer.pdf"; 
import Contact_Icon from "./Contact_Icon";
import { dataDvoskinContact } from "../data/dataDvoskin/dataContact";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Nav_Link = ({ onClick, to, isCurrent, largeDevice }) => {
  const dataContact = dataDvoskinContact;
  const sharedProperties = "my-4 sm:my-0 md:my-4 cursor-pointer hover:text-myacchover lg:my-auto lg:mx-4 dark:hover:text-myaccdhover";

  if (to === "cv") {
    return <a href={cvDvoskin} download className={`${sharedProperties}`}>CV</a>
  } else if (to === "github") {
    return <Contact_Icon href={dataContact.github} Icon={FaGithub} size={largeDevice ? "20" : "35"} className={`${sharedProperties}`} />
  } else if (to === "linkedin") {
    return <Contact_Icon href={dataContact.linkedin} Icon={FaLinkedinIn} size={largeDevice ? "20" : "35"} className={`${sharedProperties}`} />
  } else {
    return (
      <Link
        onClick={onClick}
        className={`${sharedProperties} ${isCurrent ? "text-myacc" : ""}`}
        to={to}
        smooth={true}
        duration={300}
      >
        {to?.toUpperCase()}
      </Link>
    );
  }
};

export default Nav_Link; 