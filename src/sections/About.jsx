import { nameDvoskin } from "../data/dataDvoskin/dataContact";
import { nameRovaletti } from "../data/dataRovaletti/dataContact";
import { dataDvoskinAbout } from "../data/dataDvoskin/dataAbout";
import { dataRovalettiAbout } from "../data/dataRovaletti/dataAbout";

const About = () => {
  const dataOwner = import.meta.env.VITE_DATAOWNER;
  const name = dataOwner === 'dvoskin' ? nameDvoskin : nameRovaletti;
  const dataAbout = dataOwner === 'dvoskin' ? dataDvoskinAbout : dataRovalettiAbout;

  return (
    <div name="about">
      <h1>Hi! I'm {name}</h1>
      <h2>Full-stack web developer</h2>
      <p>{dataAbout}</p>
    </div>
  );
};

export default About;
