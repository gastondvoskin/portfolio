import github from "../assets/contactIcons/github-color.svg";
import linkedin from "../assets/contactIcons/linkedin-color.svg";
import gmail from "../assets/contactIcons/gmail-color.svg";
import whatsapp from "../assets/contactIcons/whatsapp-color.svg";

const Footer = () => {
  const GITHUB_URL = "https://github.com/gastondvoskin/";
  const LINKEDIN_URL = "https://www.linkedin.com/in/gaston-dvoskin/";
  const GMAIL_URL = "dvoskingaston@gmail.com";
  const WHATSAPP_MESSAGE = "Hi! My name is...\nI saw your online portfolio. I would like to contact you...\nThanks in advance!";
  const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
  const TELEPHONE_NUMBER = "3872145841";
  const WHATSAPP_URL = `https://wa.me/${TELEPHONE_NUMBER}?text=${encodedMessage}`;

  return (
    <div name="footer">
      <h1>FOOTER</h1>
      <a href={GITHUB_URL} target="_blank">
        <img src={github} alt="GitHub" width="50" height="50" />
      </a>
      <a href={LINKEDIN_URL} target="_blank">
        <img src={linkedin} alt="GitHub" width="50" height="50" />
      </a>
      <a href={`mailto:${GMAIL_URL}`} target="_blank">
        <img src={gmail} alt="Gmail" width="50" height="50" />
      </a>
      <a href={WHATSAPP_URL} target="_blank">
        <img src={whatsapp} alt="Whatsapp" width="50" height="50" />
      </a>
    </div>
  );
};

export default Footer;
