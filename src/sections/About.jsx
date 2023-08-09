import { nameDvoskin } from "../data/dataDvoskin/dataContact";
import { nameRovaletti } from "../data/dataRovaletti/dataContact";
import { dataDvoskinAbout } from "../data/dataDvoskin/dataAbout";
import { dataRovalettiAbout } from "../data/dataRovaletti/dataAbout";
import dvoskin from "../assets/profileImage/dvoskin.jpg";

const About = () => {
  const dataOwner = import.meta.env.VITE_DATAOWNER;
  const name = dataOwner === 'dvoskin' ? nameDvoskin : nameRovaletti;
  const dataAbout = dataOwner === 'dvoskin' ? dataDvoskinAbout : dataRovalettiAbout;

  return (
    <main name="about" className="flex flex-col w-full items-center pt-16 pb-16 bg-mybg2 dark:bg-mybg2d">
      <h1 className="mb-16 text-5xl text-myacc dark:text-myaccd">ABOUT</h1>
      <div className="flex flex-row items-center w-3/4">
        {/* <h3 className="mb-8 text-2xl mt-32">Welcome to my portfolio! My name is</h3>
        <h1 className="mb-1 text-6xl text-myacc dark:text-myaccd">{name}</h1>
        <h2 className="mb-32 text-3xl">Full-stack web developer</h2> */}
        <div className="flex w-2/4 justify-center">
          <img className="w-3/5 rounded-full" src={dvoskin} alt="Dvoskin" />
        </div>
        <div className="flex w-2/4 justify-center">
          <p className="w-3/5 text-center">{dataAbout}</p>
        </div>
      </div>
    </main>
  );
};

export default About;
