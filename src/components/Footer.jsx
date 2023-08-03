import github from "../assets/contactIcons/github-color.svg";
import linkedin from "../assets/contactIcons/linkedin-color.svg";
import gmail from "../assets/contactIcons/gmail-color.svg";

const Footer = () => {
  const GITHUB_URL = "https://github.com/gastondvoskin/";
  const LINKEDIN_URL = "https://www.linkedin.com/in/gaston-dvoskin/";
  const GMAIL_URL = "dvoskingaston@gmail.com";
  
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
    </div>
  );
};

export default Footer;
