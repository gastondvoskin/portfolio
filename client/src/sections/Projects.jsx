import { dataDvoskinProjects } from "../data/dataDvoskin/dataProjects";
import ProjectDetailModal from "../components/ProjectDetailModal";
import { useState } from "react";
import Anchor from "../components/Anchor";
import SectionContainer from "../components/SectionContainer";
import Title from "../components/Title";
import { SiWebflow } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


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
      <Title text="PROJECTS"/>
      {dataDvoskinProjects.map((project, index) => {
        return (
          <div key={index} className="flex flex-col px-4 mb-16 md:mb-20 items-center text-center md:w-4/5 lg:w-3/4">
            <h2 className="text-2xl font-bold md:text-4xl md:mb-3">{project.name}</h2>
            <img className="my-2 border-2 border-white" src={project.image} alt={project.name}/>
            <p className="text-xs font-sans md:text-base md:mb-2">{project.description}</p>
            <div id="buttons" className="flex flex-row gap-x-2 md:gap-x-6 lg:gap-x-10">
              {project.deploy && <Anchor href={project.deploy} text="WEB" Icon={SiWebflow} />}
              {project.youtube && <Anchor href={project.youtube} text="VIDEO" Icon={FaYoutube} />}
              {project.repository && <Anchor href={project.repository} text="REPO" Icon={FaGithub} />}
              {/* <Button text="TECH" onClickHandler={() => openProjectDetail(project)} /> */}
            </div>

          </div>
        );
      })}
      {selectedProject && (
        <ProjectDetailModal project={selectedProject} onClose={closeProjectDetail} />
      )}
    </SectionContainer>
      
  );
};

export default Projects;
