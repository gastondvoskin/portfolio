import dataDvoskinTechnologies from "../data/dataDvoskin/dataTechnologies";
import TechnologiesArticle from "../components/TechnologiesArticle";
import SectionContainer from "../components/SectionContainer";
import Title from "../components/Title";

const TechnologiesContainer = () => {

  const technologies = [
    { label: "Languages", technologiesArray: dataDvoskinTechnologies.languages },
    { label: "Front", technologiesArray: dataDvoskinTechnologies.front },
    { label: "Back", technologiesArray: dataDvoskinTechnologies.back },
    { label: "Databases", technologiesArray: dataDvoskinTechnologies.databases },
  ];

  return (
    <SectionContainer name="technologies" bgNumber={2}>
      <div className="flex flex-col w-4/5 items-center">  
        <Title text="TECHNOLOGIES"/>
        {technologies.map((element, index) => {
          return <TechnologiesArticle key={index} label={element.label} technologiesArray={element.technologiesArray} />;
        })}
      </div>
    </SectionContainer>
    
  );
};

export default TechnologiesContainer;



