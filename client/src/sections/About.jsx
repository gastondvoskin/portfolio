import { dataDvoskinAbout } from "../data/dataDvoskin/dataAbout";
import { dataRovalettiAbout } from "../data/dataRovaletti/dataAbout";
import dvoskin from "../assets/profileImage/dvoskin.png";
import rovaletti from "../assets/profileImage/rovaletti.jpg";
import cvDvoskin from "../assets/CV/Gastón_Dvoskin_Front-end_Developer.pdf";
import cvRovaletti from "../assets/CV/SANTIAGO-ROVALETTI-CV.pdf";
import Button from "../components/Button";

const About = () => {
  const dataOwner = import.meta.env.VITE_DATAOWNER;
  const dataAbout =
    dataOwner === "dvoskin" ? dataDvoskinAbout : dataRovalettiAbout;
  const profileImg = dataOwner === "dvoskin" ? dvoskin : rovaletti;
  const cvOwner = dataOwner === "dvoskin" ? cvDvoskin : cvRovaletti;

  return (
    <section
      name="about"
      className="flex flex-col w-full items-center pt-24 pb-24 bg-mybg2 dark:bg-mybg2d"
    >
      <div className="flex flex-col w-4/5 items-center">
        <h1 className="mb-16 text-3xl font-bold text-myacc dark:text-myaccd md:text-5xl">
          ABOUT
        </h1>

        <div className="lg:ml-16">
          {dataAbout.map((paragraph, index) => {
            return (
              <p key={index} className="mb-4 text-sm font-sans md:text-base">
                {paragraph}
              </p>
            );
          })}
        </div>

        <a href={cvOwner} download>
          <Button text="DOWNLOAD CV" type="button" icon="" />
        </a>
      </div>
    </section>
  );
};

export default About;
