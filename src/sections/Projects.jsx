import { dataDvoskinProjects } from "../data/dataDvoskin/dataProjects"; 
import { dataRovalettiProjects } from "../data/dataRovaletti/dataProjects";

const Projects = () => {
  const dataOwner = import.meta.env.VITE_DATAOWNER;
  const dataProjects = dataOwner === 'dvoskin' ? dataDvoskinProjects : dataRovalettiProjects;

  return (
    <main name="projects" className="flex flex-col w-full items-center pt-16 pb-16 bg-mybg2 dark:bg-mybg2d">
      <div className="flex flex-col items-center w-3/4">
        <h1 className="text-4xl text-myacc dark:text-myaccd">PROJECTS</h1>
        {dataProjects.map((project) => {
          return (
            <div className="grid grid-cols-2 m-10">  {/* mapped div in grid */}
              <img className="w-3/4" src={project.image} alt="" />  {/* left */}
              <div className="flex flex-col items-center"> {/* right */}
                <h2 className="text-2xl">{project.name}</h2>
                <p className="text-base">{project.description}</p>

                {/* buttons */}
                <div className="flex">
                  <a target="_blank" href={project.deploy}>
                    <button className="m-3 p-1 border-solid border-2 border-black rounded-md bg-myacc text-white dark:bg-myaccd dark:text-black">Deploy</button>
                  </a>
                  <a target="_blank" href={project.youtube}>
                    <button className="m-3 p-1 border-solid border-2 border-black rounded-md bg-myacc text-white dark:bg-myaccd dark:text-black">Overview</button>
                  </a>
                  <a target="_blank" href={project.repository}>
                    <button className="m-3 p-1 border-solid border-2 border-black rounded-md bg-myacc text-white dark:bg-myaccd dark:text-black">Repository</button>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Projects;