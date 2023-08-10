import { dataDvoskinAbout } from "../data/dataDvoskin/dataAbout";
import { dataRovalettiAbout } from "../data/dataRovaletti/dataAbout";
import dvoskin from "../assets/profileImage/dvoskin.jpg";

const About = () => {
  const dataOwner = import.meta.env.VITE_DATAOWNER;
  const dataAbout =
    dataOwner === "dvoskin" ? dataDvoskinAbout : dataRovalettiAbout;

  /* className="grid grid-cols-2 m-10 */
  return (
    <main
      name="about"
      className="flex flex-col w-full items-center pt-24 pb-24 bg-mybg2 dark:bg-mybg2d"
    >
      <div className="flex flex-col w-3/4 items-center">
        <h1 className="mb-16 text-5xl text-myacc dark:text-myaccd">ABOUT</h1>
        <div className="grid grid-cols-2 ">
          <img className="w-3/4" src={dvoskin} alt="Dvoskin" />
          <div>
            {dataAbout.map((paragraph, index) => {
              return (
                <p key={index} className="font-sans text-base mb-10">{paragraph}</p>
              )
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
