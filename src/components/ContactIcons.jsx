import github from "../assets/contactIcons/github.svg";
import linkedin from "../assets/contactIcons/linkedin-color.svg";
import gmail from "../assets/contactIcons/gmail-color.svg";
import whatsapp from "../assets/contactIcons/whatsapp-color.svg";
import { dataDvoskinContact } from "../data/dataDvoskin/dataContact";
import { dataRovalettiContact } from "../data/dataRovaletti/dataContact";
import { useEffect } from "react";

const ContactIcons = () => {
  const dataOwner = import.meta.env.VITE_DATAOWNER;
  const dataContact =
    dataOwner === "dvoskin" ? dataDvoskinContact : dataRovalettiContact;
  const WHATSAPP_MESSAGE =
    "Hi! My name is...\nI saw your online portfolio. I would like to contact you...\nThanks in advance!";
  const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
  const WHATSAPP_URL = `https://wa.me/${dataContact.telephoneNumber}?text=${encodedMessage}`;

  // dark:bg-slate-900 dark:rounded-3xl

  return (
    <main className="flex justify-center items-center p-16 dark:rounded-3xl">
      {/* github */}
      <a className="w-16 h-16 mx-24" href={dataContact.github} target="_blank">
        <div className="bg-white rounded-md">
          <img className="p-1" src={github} alt="GitHub" />
        </div>
      </a>
      {/* linkedin */}
      <a
        className="w-16 h-16 mx-24"
        href={dataContact.linkedin}
        target="_blank"
      >
        <div className="bg-white rounded-md">
          <img className="p-1" src={linkedin} alt="LinkedIn" />
        </div>
      </a>
      {/* gmail */}
      <a
        className="w-16 h-16 mx-24"
        href={`mailto:${dataContact.gmail}`}
        target="_blank"
      >
        <div className="bg-white rounded-md">
          <img className="p-1" src={gmail} alt="Gmail" />
        </div>
      </a>
      {/* whatsapp */}

      <a className="w-16 h-16 mx-24" href={WHATSAPP_URL} target="_blank">
        <div className="bg-white rounded-md">
          <img className="p-1" src={whatsapp} alt="Whatsapp" />
        </div>
      </a>
    </main>
  );
};

export default ContactIcons;
