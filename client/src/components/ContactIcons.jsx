import github from "../assets/contactIcons/github.svg";
import linkedin from "../assets/contactIcons/linkedin-color.svg";
import gmail from "../assets/contactIcons/gmail-color.svg";
import whatsapp from "../assets/contactIcons/whatsapp-color.svg";
import { dataDvoskinContact } from "../data/dataDvoskin/dataContact";

const ContactIcons = () => {
  const dataContact = dataDvoskinContact;
  const WHATSAPP_MESSAGE =
    "Hi! My name is...\nI saw your online portfolio. I would like to contact you...\nThanks in advance!";
  const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
  const WHATSAPP_URL = `https://wa.me/${dataContact.telephoneNumber}?text=${encodedMessage}`;


  return (
    <main className="grid grid-cols-2 justify-center items-center dark:rounded-3xl lg:grid-cols-4">
      {/* github */}
      <a className="w-16 h-16 mx-10 my-4 lg:my-0" href={dataContact.github} target="_blank">
        <div className="bg-white rounded-md">
          <img className="p-1" src={github} alt="GitHub" />
        </div>
      </a>
      {/* linkedin */}
      <a
        className="w-16 h-16 mx-10 my-4 lg:my-0"
        href={dataContact.linkedin}
        target="_blank"
      >
        <div className="bg-white rounded-md">
          <img className="p-1" src={linkedin} alt="LinkedIn" />
        </div>
      </a>
      {/* gmail */}
      <a
        className="w-16 h-16 mx-10 my-4 lg:my-0"
        href={`mailto:${dataContact.gmail}`}
        target="_blank"
      >
        <div className="bg-white rounded-md">
          <img className="p-1" src={gmail} alt="Gmail" />
        </div>
      </a>
      {/* whatsapp */}

      <a className="w-16 h-16 mx-10 my-4 lg:my-0" href={WHATSAPP_URL} target="_blank">
        <div className="bg-white rounded-md">
          <img className="p-1" src={whatsapp} alt="Whatsapp" />
        </div>
      </a>
    </main>
  );
};

export default ContactIcons;
