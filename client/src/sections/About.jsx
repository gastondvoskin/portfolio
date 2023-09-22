import { dataDvoskinAbout } from "../data/dataDvoskin/dataAbout";
import cvDvoskin from "../assets/CV/Gastón_Dvoskin_Front-end_Developer.pdf";
import Button from "../components/Button";
import SectionContainer from "../components/SectionContainer";

const About = () => {
  return (
    <SectionContainer name="about" bgNumber={2}>
      <div className="flex flex-col w-3/5 items-center z-10">
        <h1 className="mb-16 text-3xl font-bold text-myacc dark:text-myaccd md:text-5xl">
          ABOUT
        </h1>

        <div className="flex flex-col items-center mb-10">
          {dataDvoskinAbout.map((paragraph, index) => {
            return (
              <p key={index} className="text-left mb-4 text-sm font-sans md:text-base">
                {paragraph}
              </p>
            );
          })}
        </div>

        <a href={cvDvoskin} download>
          <Button text="DOWNLOAD CV" type="button" icon="" />
        </a>
      </div>
    </SectionContainer>

  );
};

export default About;
