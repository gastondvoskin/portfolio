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
    <SectionContainer name="techs" bgNumber={2}>
      <Title text="TECHNOLOGIES"/>
      <div className="flex flex-col px-4 items-center gap-6 text-center md:w-4/5 lg:w-3/4">
        {...arrayOfTechsByType}
      </div>
    </SectionContainer>
  );
};

export default Technologies;



