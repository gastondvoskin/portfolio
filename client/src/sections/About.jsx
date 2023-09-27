import { dataDvoskinAbout } from "../data/dataDvoskin/dataAbout";
import cvDvoskin from "../assets/CV/Gastón_Dvoskin_Front-end_Developer.pdf";
import Button from "../components/Button";
import SectionContainer from "../components/SectionContainer";
import Title from "../components/Title";
import { LuView } from "react-icons/lu"; 
import { BiSolidDownload } from "react-icons/bi"; 

const About = () => {
  return (
    <SectionContainer name="about" bgNumber={2}>
      <Title text="ABOUT"/>
      <div className="flex flex-col px-4 items-center md:w-4/5 lg:w-3/4">
        <div className="flex flex-col items-center">
          {dataDvoskinAbout.map((paragraph, index) => 
            <p key={index} className="text-center mb-4 text-sm font-sans md:text-base">{paragraph}</p>
          )}
        </div>
        <a href={cvDvoskin}>
          <Button text="VIEW CV" type="button" Icon={LuView} />
        </a>
        <a href={cvDvoskin} download>
          <Button text="DOWNLOAD CV" type="button" Icon={BiSolidDownload} />
        </a>
      </div>
    </SectionContainer>
  );
};

export default About;
