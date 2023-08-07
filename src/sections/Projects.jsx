import { dataDvoskinProjects } from "../data/dataDvoskin/dataProjects"; 
import { dataRovalettiProjects } from "../data/dataRovaletti/dataProjects";

const Projects = () => {
  const dataOwner = import.meta.env.VITE_DATAOWNER;
  const dataProjects = dataOwner === 'dvoskin' ? dataDvoskinProjects : dataRovalettiProjects;

  return (
    <div className="pt-16 pb-16" name="projects" >
      <h1>PROJECTS</h1>
      {dataProjects.map((project) => {
        return (
          <div>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <a target="_blank" href={project.deploy}>
              <button>Deploy</button>
            </a>
            <a target="_blank" href={project.youtube}>
              <button>Overview</button>
            </a>
            <a target="_blank" href={project.repository}>
              <button>Repository</button>
            </a>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
