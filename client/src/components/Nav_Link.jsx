import { Link } from "react-scroll";
import cvDvoskin from "../assets/CV/Gastón Dvoskin - Frontend Developer - CV (EN).pdf";
import Contact_Icon from "./Contact_Icon";
import { dataDvoskinContact } from "../data/dataDvoskin/dataContact";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { BiSolidDownload } from "react-icons/bi"; 


const Nav_Link = ({ onClick, to, isCurrent, largeDevice }) => {
  const dataContact = dataDvoskinContact;
  const sharedProperties = "my-4 sm:my-0 md:my-4 cursor-pointer hover:text-myacchover lg:my-auto lg:mx-4 dark:hover:text-myaccdhover";

  if (to === "cv") {
    return <a href={cvDvoskin} download className={`flex items-center ${sharedProperties} lg:ml-10 lg:mr-1 xl:ml-28`}><BiSolidDownload />CV</a>
  } else if (to === "linkedin") {
    return <Contact_Icon href={dataContact.linkedin} Icon={FaLinkedin} size={largeDevice ? "22" : "35"} className={`${sharedProperties} lg:mb-1 lg:mr-1`} />
  } else if (to === "github") {
    return <Contact_Icon href={dataContact.github} Icon={FaSquareGithub} size={largeDevice ? "22" : "35"} className={`${sharedProperties} lg:mb-1 lg:mr-1`} />
  }  else {
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