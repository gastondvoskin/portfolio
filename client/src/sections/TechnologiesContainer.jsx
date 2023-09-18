import dataDvoskinTechnologies from "../data/dataDvoskin/dataTechnologies";
import dataRovalettiTechnologies from "../data/dataRovaletti/dataTechnologies";

import TechnologiesArticle from "../components/TechnologiesArticle";

const TechnologiesContainer = () => {
  const dataOwner = import.meta.env.VITE_DATAOWNER;
  const dataTechnologies =
    dataOwner === "dvoskin"
      ? dataDvoskinTechnologies
      : dataRovalettiTechnologies;

  const technologies = [
    { label: "Languages", technologiesArray: dataTechnologies.languages },
    { label: "Front", technologiesArray: dataTechnologies.front },
    { label: "Back", technologiesArray: dataTechnologies.back },
    { label: "Databases", technologiesArray: dataTechnologies.databases },
  ];

  return (
    <section
      className="flex flex-col w-full items-center pt-24 pb-24 bg-mybg2 dark:bg-mybg2d"
      name="technologies"
    >
      <div className="flex flex-col w-4/5 items-center">
        
        <h1 className="mb-16 text-3xl font-bold text-myacc dark:text-myaccd md:text-5xl">
          TECHNOLOGIES
        </h1>

        {technologies.map((element, index) => {
          return <TechnologiesArticle key={index} label={element.label} technologiesArray={element.technologiesArray} />;
        })}

      </div>
    </section>
  );
};

export default TechnologiesContainer;
