import { name } from "../data/dataRovaletti/dataContact";
import { dataRovAbout } from "../data/dataRovaletti/dataAbout";
import { dataDvoAbout } from "../data/dataDvoskin/dataAbout";

const About = () => {
  return (
    <div name="about">
      <h1>Hi! I'm {name}</h1>
      <h2>Full-stack developer</h2>
      <p>{dataDvoAbout}</p>
    </div>
  );
};

export default About;
