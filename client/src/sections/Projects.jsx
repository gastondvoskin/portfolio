import { dataDvoskinProjects } from "../data/dataDvoskin/dataProjects";
import { dataRovalettiProjects } from "../data/dataRovaletti/dataProjects";
import ProjectDetailModal from "../components/ProjectDetailModal";
import { useState } from "react";

const Projects = () => {
  const dataOwner = import.meta.env.VITE_DATAOWNER;
  const dataProjects =
    dataOwner === "dvoskin" ? dataDvoskinProjects : dataRovalettiProjects;

  const [selectedProject, setSelectedProject] = useState(null);

  const openProjectDetail = (project) => {
    setSelectedProject(project);
  };

  const closeProjectDetail = () => {
    setSelectedProject(null);
  };

  return (
    <section
      name="projects"
      className="flex flex-col w-full items-center pt-24 pb-24 bg-mybg1 dark:bg-mybg1d"
    >
      {/* h1 - mapped divs container */}
      <div className="flex flex-col w-4/5 items-center">
        {/* h1 */}
        <h1 className="mb-16 text-3xl font-bold text-myacc dark:text-myaccd md:text-5xl">
          PROJECTS
        </h1>

        {/* mapped divs container*/}
        <div className="flex flex-col">
          {dataProjects.map((project, index) => {
            return (
              /* h2 - image, description - button */ 
              <div
                key={index}
                className="grid grid-cols-1 mb-16 items-center lg:grid-cols-2"
              >
                {/* h2 - image */}
                <div>
                  {/* h2 */}
                  <h2 className="mb-4 text-2xl font-bold md:text-4xl">
                    {project.name}
                  </h2>
                  {/* image */}
                  <img className="my-8" src={project.image} alt={project.name} />
                </div>

                {/* description - button */}
                <div className="lg:ml-16">
                  {/* description */}
                  <p className="text-sm font-sans mb-8 md:text-base">
                    {project.description}
                  </p>
                  {/* button */}
                  <button
                    className="p-2 bg-myacc border-2 border-black text-white font-bold rounded-xl text-base dark:bg-myaccd dark:text-black"
                    onClick={() => openProjectDetail(project)}
                  >
                    VIEW MORE
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={closeProjectDetail}
        />
      )}
    </section>
  );
};

export default Projects;
