import { dataDvoskinAbout } from "../data/dataDvoskin/dataAbout";
import cvDvoskin from "../assets/CV/Gastón Dvoskin - Front-end Developer - Resume (EN).pdf";
import Button from "../components/Button";
import SectionContainer from "../components/SectionContainer";
import Title from "../components/Title";
import { IoMdOpen } from "react-icons/io";
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
        <a href={cvDvoskin} target="_blank" rel="noreferrer">
          <Button text="VIEW CV" type="button" Icon={IoMdOpen} />
        </a>
        <a href={cvDvoskin} download target="_blank" rel="noreferrer">
          <Button text="DOWNLOAD CV" type="button" Icon={BiSolidDownload} />
        </a>
      </div>
    </SectionContainer>
  );
};

export default About;
