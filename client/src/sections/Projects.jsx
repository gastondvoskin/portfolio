import { dataDvoskinProjects } from "../data/dataDvoskin/dataProjects";
import ProjectDetailModal from "../components/ProjectDetailModal";
import { useState } from "react";
import Anchor from "../components/Anchor";
import Button from "../components/Button";
import SectionContainer from "../components/SectionContainer";
import Title from "../components/Title";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openProjectDetail = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden"; 
  };

  const closeProjectDetail = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <SectionContainer name="projects" bgNumber={1}>
      <div className="flex flex-col w-4/5 items-center">
        <Title text="PROJECTS"/>

        <div className="flex flex-col">
          {dataDvoskinProjects.map((project, index) => {
            return (
              /* left: h2 - image; right: description - buttons */
              <div
                key={index}
                className="grid grid-cols-1 mb-16 items-center lg:grid-cols-2"
              >
                {/* h2 - image */}
                <div>
                  <h2 className="mb-4 text-2xl font-bold md:text-4xl">{project.name}</h2>
                  <img
                    className="my-8 border-4 border-white"
                    src={project.image}
                    alt={project.name}
                  />
                </div>

                {/* description - buttons */}
                <div className="lg:ml-16">
                  <p className="text-sm font-sans mb-8 md:text-base">{project.description}</p>
                  {project.deploy && <Anchor href={project.deploy} text="DEPLOY" />}
                  {project.youtube && <Anchor href={project.youtube} text="OVERVIEW" />}
                  {project.repository && <Anchor href={project.repository} text="REPOSITORY" />}
                  <Button text="TECHNOLOGIES" onClickHandler={() => openProjectDetail(project)} />
                </div>
              </div>
            );
          })}
          {selectedProject && (
            <ProjectDetailModal project={selectedProject} onClose={closeProjectDetail} />
          )}
        </div>
      </div>

    </SectionContainer>
      
  );
};

export default Projects;
