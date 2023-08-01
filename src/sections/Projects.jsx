import { dataProjects } from "../data/dataProjects"
const Projects = () => {
  return (
    <div name='projects'>
      {dataProjects.map((project) => {
        return(
        <div>
          <h1>{project.name}</h1>
          <p>{project.description}</p>
          <a target="_blank" href={project.deploy}>
            <button>Deploy</button>
          </a>
          <a target="_blank"  href={project.youtube}>
            <button>Overview</button>
          </a>
          <a target="_blank"  href={project.repository}>
            <button>Repository</button>
          </a>
        </div>)
      })}
    </div>
  )
}

export default Projects