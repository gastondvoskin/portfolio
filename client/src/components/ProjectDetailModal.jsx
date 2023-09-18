import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const ProjectDetailModal = ({ project, onClose }) => {
  return (
    <div className="fixed inset-4 flex items-center justify-center z-50">
      <div className="bg-mybg2 dark:bg-mybg2d rounded-md shadow-lg border-2 border-mytext dark:border-white w-1/5">
        {/* h2-X */}
        <div className="flex justify-between items-center p-4">
          <h2 className="text-2xl font-semibold">{project.name}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <hr className=""/>
        {/* h3-ul */}
        <div className="flex flex-col p-8">
          <h3 className="text-lg font-semibold mb-2">Main technologies:</h3>
          <ul className="list-disc list-inside text-gray-600 dark:text-white">
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;
