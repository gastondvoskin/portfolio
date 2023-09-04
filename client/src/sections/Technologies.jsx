import dataDvoskinTechnologies from "../data/dataDvoskin/dataTechnologies";
import dataRovalettiTechnologies from "../data/dataRovaletti/dataTechnologies";

import Technology from "../components/Technology";

const Technologies = () => {
  const dataOwner = import.meta.env.VITE_DATAOWNER;
  const dataTechnologies =
    dataOwner === "dvoskin"
      ? dataDvoskinTechnologies
      : dataRovalettiTechnologies;

  const technologies = [
    { label: "Languages", array: dataTechnologies.dataTechnologiesLanguages },
    { label: "Front", array: dataTechnologies.dataTechnologiesFront },
    { label: "Back", array: dataTechnologies.dataTechnologiesBack },
    { label: "Databases", array: dataTechnologies.dataTechnologiesDatabases },
  ];

  return (
    <section
      className="flex flex-col w-full items-center pt-24 pb-24 bg-mybg2 dark:bg-mybg2d"
      name="skills"
    >
      {/* h1, images */}
      <div className="flex flex-col w-4/5 items-center">
        {/* h1 */}
        <h1 className="mb-16 text-3xl font-bold text-myacc dark:text-myaccd md:text-5xl">
          TECHNOLOGIES
        </h1>

        {technologies.map((element, index) => {
          return <Technology label={element.label} array={element.array} />;
        })}

      </div>
    </section>
  );
};

export default Technologies;
