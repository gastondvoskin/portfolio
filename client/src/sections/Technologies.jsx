import { LANGUAGES, FRONT, BACK } from "../data/dataDvoskin/dataTechnologies";
import SectionContainer from "../components/SectionContainer";
import Title from "../components/Title";
import Techs_Row from "../components/Techs_Row";

import { SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";



const Technologies = () => {

  return (
    <SectionContainer name="techs" bgNumber={2}>
      <Title text="TECHNOLOGIES"/>
      <div className="flex flex-col px-4 items-center gap-6 text-center md:w-4/5 lg:w-3/4">
        <Techs_Row type="Languages" techsByType={LANGUAGES} />
        {/* <Techs_Row type="Front" techsByType={FRONT} />
        <Techs_Row type="Back" techsByType={BACK} /> */}
      </div>
    </SectionContainer>
  );
};

export default Technologies;



