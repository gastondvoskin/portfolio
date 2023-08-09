import dataDvoskinSkills from "../data/dataDvoskin/dataSkills";
import dataRovalettiSkills from "../data/dataRovaletti/dataSkills";
import icons from "../assets/icons"; // Importa el objeto con todas las imágenes SVG

const Skills = () => {
  const dataOwner = import.meta.env.VITE_DATAOWNER;
  const dataSkills =
    dataOwner === "dvoskin" ? dataDvoskinSkills : dataRovalettiSkills;

  return (
    <main className="flex flex-col w-full items-center pt-24 pb-16 bg-mybg2 dark:bg-mybg2d"
    name="skills">
      <h1 className="mb-16 text-5xl text-myacc dark:text-myaccd">TECHNOLOGIES</h1>
      <div className="flex flex-wrap">
        {dataSkills.map((skill, index) => (
          <img
            className="m-2 w-10 h-10"
            key={index}
            src={icons[skill.name]}
            alt={skill.name}
          />
        ))}
      </div>
    </main>
  );
};

export default Skills;
