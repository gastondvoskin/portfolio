import Contact_Icon from "./Contact_Icon";
import { dataDvoskinContact } from "../data/dataDvoskin/dataContact";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";


const ContactIcons = () => {
  const dataContact = dataDvoskinContact;
  const WHATSAPP_MESSAGE =
    "ENGLISH: Hi! I saw your portfolio. My name is...\n ESPAÑOL: Hola! He visto tu portfolio. Mi nombre es...";
  const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
  const WHATSAPP_URL = `https://wa.me/${dataContact.telephoneNumber}?text=${encodedMessage}`;


  return (
    <section className="flex justify-center items-center">
      <Contact_Icon href={`mailto:${dataContact.gmail}`} Icon={BiLogoGmail} size={74} className="text-red-500" />
      <Contact_Icon href={dataContact.github} Icon={FaGithub} size={60} className="text-gray-700 dark:text-gray-300" />
      <Contact_Icon href={dataContact.linkedin} Icon={FaLinkedinIn} size={74} className="text-blue-800 dark:text-blue-400" />
      <Contact_Icon href={WHATSAPP_URL} Icon={SiWhatsapp} size={60} className="text-green-600" />
    </section>
  );
};

export default ContactIcons;
