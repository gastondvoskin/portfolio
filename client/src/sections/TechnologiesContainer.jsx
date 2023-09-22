import dataDvoskinTechnologies from "../data/dataDvoskin/dataTechnologies";
import TechnologiesArticle from "../components/TechnologiesArticle";

const TechnologiesContainer = () => {

  const technologies = [
    { label: "Languages", technologiesArray: dataDvoskinTechnologies.languages },
    { label: "Front", technologiesArray: dataDvoskinTechnologies.front },
    { label: "Back", technologiesArray: dataDvoskinTechnologies.back },
    { label: "Databases", technologiesArray: dataDvoskinTechnologies.databases },
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
