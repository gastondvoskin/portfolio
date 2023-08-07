import { nameDvoskin } from "../data/dataDvoskin/dataContact";
import { nameRovaletti } from "../data/dataRovaletti/dataContact";
import { dataDvoskinAbout } from "../data/dataDvoskin/dataAbout";
import { dataRovalettiAbout } from "../data/dataRovaletti/dataAbout";

const About = () => {
  const dataOwner = import.meta.env.VITE_DATAOWNER;
  const name = dataOwner === 'dvoskin' ? nameDvoskin : nameRovaletti;
  const dataAbout = dataOwner === 'dvoskin' ? dataDvoskinAbout : dataRovalettiAbout;

  return (
    <main name="about" className="flex flex-col w-full pt-16 pb-16 bg-mybg1 dark:bg-mybg1d">
      <div className="flex flex-col items-center">
        <h3 className="mb-8 text-2xl mt-32">Welcome to my portfolio! My name is</h3>
        <h1 className="mb-1 text-6xl text-myacc">{name}</h1>
        <h2 className="mb-32 text-3xl">Full-stack web developer</h2>
        <p className="w-1/4 text-center">{dataAbout}</p>
      </div>
    </main>
  );
};

export default About;
