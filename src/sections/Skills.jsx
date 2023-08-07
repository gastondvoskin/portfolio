import dataDvoskinSkills from "../data/dataDvoskin/dataSkills"; 
import dataRovalettiSkills from "../data/dataRovaletti/dataSkills";
import icons from '../assets/icons'; // Importa el objeto con todas las imágenes SVG

const Skills = () => {
  const dataOwner = import.meta.env.VITE_DATAOWNER;
  const dataSkills = dataOwner === 'dvoskin' ? dataDvoskinSkills : dataRovalettiSkills;

  return (
    <div className="pt-16 pb-16" name="skills">
      <h1>SKILLS</h1>
      {dataSkills.map((skill, index) => (
        <div key={index}>
          {icons[skill.name] ? <img src={icons[skill.name]} alt={skill.name} width="50" height="50" /> : <p>No se encontró la imagen para esta habilidad</p>}
        </div>
      ))}
    </div>
  );
};

export default Skills;
