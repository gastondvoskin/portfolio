import dataDvoskinTechnologies from "../data/dataDvoskin/dataTechnologies";
import SectionContainer from "../components/SectionContainer";
import Title from "../components/Title";
import Techs_ByType from "../components/Techs_ByType";

const Technologies = () => {
  const arrayOfTechsByType = [];
  for (let key in dataDvoskinTechnologies) {
    arrayOfTechsByType.push(<Techs_ByType subtitle={key} techsByType={dataDvoskinTechnologies[key]}/>)
  };

  return (
    <SectionContainer name="technologies" bgNumber={2}>
      <Title text="TECHNOLOGIES"/>
      <div className="flex flex-col items-center gap-16">
        {...arrayOfTechsByType}
      </div>
    </SectionContainer>
  );
};

export default Technologies;



