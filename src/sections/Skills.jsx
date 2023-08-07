import dataDvoskinSkills from "../data/dataDvoskin/dataSkills";
import dataRovalettiSkills from "../data/dataRovaletti/dataSkills";
import icons from "../assets/icons"; // Importa el objeto con todas las imágenes SVG

const Skills = () => {
  const dataOwner = import.meta.env.VITE_DATAOWNER;
  const dataSkills =
    dataOwner === "dvoskin" ? dataDvoskinSkills : dataRovalettiSkills;

  return (
    <main className="flex flex-col pt-16 pb-16 bg-mybg1 dark:bg-mybg1d" className="w-full pt-16 pb-16 bg-mybg1 dark:bg-mybg1d" 
    name="skills">
      <h1 className="text-4xl">TECHNOLOGIES</h1>
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
