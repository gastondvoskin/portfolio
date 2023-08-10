import { dataDvoskinProjects } from "../data/dataDvoskin/dataProjects"; 
import { dataRovalettiProjects } from "../data/dataRovaletti/dataProjects";
import ProjectDetailModal from "../components/ProjectDetailModal";
import { useState } from "react";

const Projects = () => {
  const dataOwner = import.meta.env.VITE_DATAOWNER;
  const dataProjects = dataOwner === 'dvoskin' ? dataDvoskinProjects : dataRovalettiProjects;

  const [selectedProject, setSelectedProject] = useState(null);

  const openProjectDetail = (project) => {
    setSelectedProject(project);
  };

  const closeProjectDetail = () => {
    setSelectedProject(null);
  };

  return (
    <main name="projects" className="flex flex-col w-full items-center pt-24 pb-24 bg-mybg1 dark:bg-mybg1d">
      <div className="flex flex-col items-center w-3/4">
        <h1 className="mb-16 text-5xl text-myacc dark:text-myaccd">PROJECTS</h1>
        {dataProjects.map((project, index) => {
          return (
            <div key={index} className="grid grid-cols-2 mt-20">
              <img className="w-3/4" src={project.image} alt={project.name} />
              <div className="flex flex-col items-center">
                <h2 className="text-2xl">{project.name}</h2>
                <p className="text-base font-sans">{project.description}</p>
                <button
                  className="m-3 p-1 border-solid border-2 border-black rounded-md bg-myacc text-white dark:bg-myaccd dark:text-black"
                  onClick={() => openProjectDetail(project)}
                >
                  View Detail
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={closeProjectDetail}
        />
      )}
    </main>
  );
};

export default Projects;
