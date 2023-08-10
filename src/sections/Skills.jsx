import dataDvoskinSkills from "../data/dataDvoskin/dataSkills";
import dataRovalettiSkills from "../data/dataRovaletti/dataSkills";
import icons from "../assets/icons"; // Importa el objeto con todas las imágenes SVG
import { useState } from "react";

const Skills = () => {
  const dataOwner = import.meta.env.VITE_DATAOWNER;
  const dataSkills =
    dataOwner === "dvoskin" ? dataDvoskinSkills : dataRovalettiSkills;

  return (
    <main
      className="flex flex-col w-full items-center pt-24 pb-24 bg-mybg2 dark:bg-mybg2d"
      name="skills"
    >
      <div className="flex flex-col w-3/4 items-center">
        <h1 className="mb-16 text-5xl text-myacc dark:text-myaccd">
          TECHNOLOGIES
        </h1>
        <div className="flex flex-wrap justify-center">


          {dataSkills.map((skill, index) => (
            <div className="hover:bg-slate-600 dark:hover:bg-slate-300">
              <div className="flex flex-col justify-center items-center w-24 h-24 m-10" >
                <img
                  className="pb-2"
                  key={index}
                  src={icons[skill.name]}
                  alt={skill.name}
                />
                <p className="text-sm text-mybg2 dark:text-mybg2d">
                  {skill.name.toUpperCase()}
                </p>
            </div>

              

              {/* <div className="absolute top-0 left-0 flex justify-center items-center w-24 h-24 opacity-0 hover:opacity-100"> */}
                {/* <p className="absolute top-0 2-24 h-24 opacity-0 hover:opacity-100">
                  {skill.name.toUpperCase()}
                </p> */}
              {/* </div> */}
              
            </div>
          ))}


        </div>
      </div>
    </main>
  );
};

export default Skills;

// // OLD
{
  /* <div className="relative w-24 h-24 m-10">
  <img className="" key={index} src={icons[skill.name]} alt={skill.name} />
  <p className="absolute top-1/2 left-1/2 opacity-0 hover:opacity-100">
    {skill.name}
  </p>
</div>; */
}

