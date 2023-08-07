import { dataDvoskinProjects } from "../data/dataDvoskin/dataProjects"; 
import { dataRovalettiProjects } from "../data/dataRovaletti/dataProjects";

const Projects = () => {
  const dataOwner = import.meta.env.VITE_DATAOWNER;
  const dataProjects = dataOwner === 'dvoskin' ? dataDvoskinProjects : dataRovalettiProjects;

  return (
    <main name="projects" className="flex flex-col items-center justify-center pt-16 pb-16 bg-mybg2 bg-red-500 w-full dark:bg-mybg2d">
      <h1>PROJECTS</h1>
      {dataProjects.map((project) => {
        return (
          <main>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <a target="_blank" href={project.deploy}>
              <button className="border-solid border-2 border-black">Deploy</button>
            </a>
            <a target="_blank" href={project.youtube}>
              <button className="border-solid border-2 border-black">Overview</button>
            </a>
            <a target="_blank" href={project.repository}>
              <button className="border-solid border-2 border-black">Repository</button>
            </a>
          </main>
        );
      })}
    </main>
  );
};

export default Projects;


{/* <main name="about" className="h-screen pt-16 pb-16 bg-mybg dark:bg-mybgd">
<div className="flex flex-col items-center"> */}