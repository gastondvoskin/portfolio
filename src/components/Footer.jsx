import github from "../assets/contactIcons/github-color.svg";
import linkedin from "../assets/contactIcons/linkedin-color.svg";
import gmail from "../assets/contactIcons/gmail-color.svg";
import whatsapp from "../assets/contactIcons/whatsapp-color.svg";
import { dataDvoskinContact } from "../data/dataDvoskin/dataContact";
import { dataRovalettiContact } from "../data/dataRovaletti/dataContact";

const Footer = () => {
  const dataOwner = import.meta.env.VITE_DATAOWNER;
  const dataContact = dataOwner ===  "dvoskin" ? dataDvoskinContact : dataRovalettiContact
  const WHATSAPP_MESSAGE = "Hi! My name is...\nI saw your online portfolio. I would like to contact you...\nThanks in advance!";
  const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
  const WHATSAPP_URL = `https://wa.me/${dataContact.telephoneNumber}?text=${encodedMessage}`;

  return (
    <div name="footer" className="flex bg-mybg-two w-full justify-center h-20 items-center" >
      <a href={dataContact.github} target="_blank">
        <img className="w-10 h-10" src={github} alt="GitHub"  />
      </a>
      <a href={dataContact.linkedin} target="_blank">
        <img className="w-10 h-10" src={linkedin} alt="GitHub" />
      </a>
      <a href={`mailto:${dataContact.gmail}`} target="_blank">
        <img className="w-10 h-10" src={gmail} alt="Gmail"/>
      </a>
      <a href={WHATSAPP_URL} target="_blank">
        <img className="w-10 h-10 " src={whatsapp} alt="Whatsapp" />
      </a>
    </div>
  );
};

export default Footer;
