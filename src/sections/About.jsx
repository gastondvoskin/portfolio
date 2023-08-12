import { dataDvoskinAbout } from "../data/dataDvoskin/dataAbout";
import { dataRovalettiAbout } from "../data/dataRovaletti/dataAbout";
import dvoskin from "../assets/profileImage/dvoskin.jpg";
import rovaletti from "../assets/profileImage/rovaletti.jpg";
import cvDvoskin from "../assets/CV/Dvoskin.pdf";

const About = () => {
  const dataOwner = import.meta.env.VITE_DATAOWNER;
  const dataAbout =
    dataOwner === "dvoskin" ? dataDvoskinAbout : dataRovalettiAbout;
  const profileImg =  dataOwner === "dvoskin" ? dvoskin : rovaletti;

  /* className="grid grid-cols-2 m-10 */
  return (
    <main
      name="about"
      className="flex flex-col w-full items-center pt-24 pb-24 bg-mybg2 dark:bg-mybg2d"
    >
      <div className="flex flex-col w-3/4 items-center">
        <h1 className="mb-16 text-5xl font-bold text-myacc dark:text-myaccd">
          ABOUT
        </h1>
        <div className="grid grid-cols-2">
          <div className="flex flex-col items-end mr-16">
            <img className="w-4/5 mb-16" src={profileImg} alt="Dvoskin" />{" "}
            {/* editing */}
            <div className="flex">
              <a
                className="bg-myacc border-2 border-black text-white rounded-xl p-2 text-l dark:bg-myaccd dark:border-white m-4"
                href={cvDvoskin}
                target="_blank"
                rel="noopener noreferrer"
              >
                ► Open CV
              </a>
              <a
                className="bg-myacc border-2 border-black text-white rounded-xl p-2 text-l dark:bg-myaccd dark:border-white m-4"
                href={cvDvoskin}
                rel="noopener noreferrer"
                download
              >
                ▼ Download CV
              </a>
            </div>
          </div>
          <div className="w-3/4 ml-16">
            {dataAbout.map((paragraph, index) => {
              return (
                <p key={index} className="font-sans text-base mb-10">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
