import { dataDvoskinContact } from "../data/dataDvoskin/dataContact";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { SiGmail } from "react-icons/si";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";


const ContactIcons = () => {
  const dataContact = dataDvoskinContact;
  const WHATSAPP_MESSAGE =
    "Hi! I saw your portfolio. \nMy name is...";
  const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
  const WHATSAPP_URL = `https://wa.me/${dataContact.telephoneNumber}?text=${encodedMessage}`;


  return (
    <section className="grid grid-cols-2 justify-center items-center dark:rounded-3xl lg:grid-cols-4">
      <a href={dataContact.github} target="_blank">
        <FaGithub size={60} className="text-gray-700 dark:text-gray-200"/>
      </a>

      <a href={`mailto:${dataContact.gmail}`} target="_blank">
        <BiLogoGmail size={74} className="text-red-500"/>
      </a>

      <a href={dataContact.linkedin} target="_blank">
        <FaLinkedinIn size={74} className="text-blue-800 dark:text-blue-400"/>
      </a>

      <a href={WHATSAPP_URL} target="_blank">
        <SiWhatsapp size={60} className="text-green-600" />
      </a>

    </section>
  );
};

export default ContactIcons;
