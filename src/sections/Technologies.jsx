import dataDvoskinTechnologies from "../data/dataDvoskin/dataTechnologies";
import dataRovalettiTechnologies from "../data/dataRovaletti/dataTechnologies";
import icons from "../assets/icons"; // Importa el objeto con todas las imágenes SVG

const Technologies = () => {
  const dataOwner = import.meta.env.VITE_DATAOWNER;
  const dataTechnologies =
    dataOwner === "dvoskin" ? dataDvoskinTechnologies : dataRovalettiTechnologies;

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
        {/* images */}
        <div className="flex flex-wrap justify-center">
          {dataTechnologies.map((skill, index) => (
            <div className="hover:bg-slate-600 dark:hover:bg-slate-300">
              <div className="flex flex-col justify-center items-center w-12 h-12 m-6 md:w-16 md:h-16" >
                <img
                  className="pb-2"
                  key={index}
                  src={icons[skill.name]}
                  alt={skill.name}
                />
                <p className="text-xs text-mybg2 dark:text-mybg2d">
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
    </section>
  );
};

export default Technologies;

// // OLD
{
  /* <div className="relative w-24 h-24 m-10">
  <img className="" key={index} src={icons[skill.name]} alt={skill.name} />
  <p className="absolute top-1/2 left-1/2 opacity-0 hover:opacity-100">
    {skill.name}
  </p>
</div>; */
}

