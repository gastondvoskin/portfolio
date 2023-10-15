import Contact_Icon from "./Contact_Icon";
import { dataDvoskinContact } from "../data/dataDvoskin/dataContact";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";


const Contact_IconsContainer = () => {
  const dataContact = dataDvoskinContact;
  const WHATSAPP_MESSAGE =
    "ENGLISH: Hi! I saw your portfolio. My name is...\nESPAÑOL: Hola! He visto tu portfolio. Mi nombre es...";
  const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
  const WHATSAPP_URL = `https://wa.me/${dataContact.telephoneNumber}?text=${encodedMessage}`;

  return (
    <section className="flex flex-wrap items-center justify-center gap-4 md:gap-8 lg:gap-16">
      <Contact_Icon href={`mailto:${dataContact.gmail}`} Icon={BiLogoGmail} size={74} className="text-red-500 hover:text-red-700 dark:text-red-700 dark:hover:text-red-500" />
      <Contact_Icon href={WHATSAPP_URL} Icon={SiWhatsapp} size={60} className="text-green-600 hover:text-green-700 dark:hover:text-green-400" />
      <Contact_Icon href={dataContact.github} Icon={FaGithub} size={60} className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white" />
      <Contact_Icon href={dataContact.linkedin} Icon={FaLinkedinIn} size={74} className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400" />
    </section>
  );
};

export default Contact_IconsContainer;
