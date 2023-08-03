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
    <div name="footer">
      <h1>FOOTER</h1>
      <a href={dataContact.github} target="_blank">
        <img src={github} alt="GitHub" width="50" height="50" />
      </a>
      <a href={dataContact.linkedin} target="_blank">
        <img src={linkedin} alt="GitHub" width="50" height="50" />
      </a>
      <a href={`mailto:${dataContact.gmail}`} target="_blank">
        <img src={gmail} alt="Gmail" width="50" height="50" />
      </a>
      <a href={WHATSAPP_URL} target="_blank">
        <img src={whatsapp} alt="Whatsapp" width="50" height="50" />
      </a>
    </div>
  );
};

export default Footer;
