import { nameDvoskin } from "../data/dataDvoskin/dataContact";
import { nameRovaletti } from "../data/dataRovaletti/dataContact";
import { dataDvoskinAbout } from "../data/dataDvoskin/dataAbout";
import { dataRovalettiAbout } from "../data/dataRovaletti/dataAbout";

const About = () => {
  const dataOwner = import.meta.env.VITE_DATAOWNER;
  const name = dataOwner === 'dvoskin' ? nameDvoskin : nameRovaletti;
  const dataAbout = dataOwner === 'dvoskin' ? dataDvoskinAbout : dataRovalettiAbout;

  return (
    <main name="about" className="h-screen bg-mybg-one text-mytext">
      <div className="flex flex-col items-center">
        <h3 className="text-mytext text-2xl">Welcome to my portfolio! My name is</h3>
        <h1 className="text-myacc-one text-6xl">{name}</h1>
        <h2 className="text-myacc-one text-3xl">Full-stack web developer</h2>
        <p>{dataAbout}</p>
      </div>
    </main>
  );
};

export default About;
