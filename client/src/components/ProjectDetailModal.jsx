import React from "react";

const ProjectDetailModal = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-md shadow-lg max-w-xl w-full">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-2xl font-semibold">{project.name}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="p-6 flex">
          <div className="w-1/2 pr-6">
            <h3 className="text-lg font-semibold mb-2">Technologies Used:</h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
          <div className="w-1/2 pl-6">
            <h3 className="text-lg font-semibold mb-2">Project Details:</h3>
            <p className="text-gray-600 dark:text-gray-400">
              {project.description}
            </p>
          </div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 py-3 px-6 flex justify-end">
          <a
            className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded-md text-sm mr-2"
            href={project.deploy}
            target="_blank"
            rel="noopener noreferrer"
          >
            Deploy
          </a>
          <a
            className={`${
              project.youtube === null ? "bg-gray-500 cursor-not-allowed" : "bg-gray-500 hover:bg-gray-600"
            } text-white px-2 py-1 rounded-md text-sm mr-2`}
            href={project.youtube}
            target="_blank"
            rel="noopener noreferrer"
            disabled={project.youtube === null}
          >
            Overview
          </a>
          <a
            className="bg-gray-500 hover:bg-gray-600 text-white px-2 py-1 rounded-md text-sm"
            href={project.repository}
            target="_blank"
            rel="noopener noreferrer"
          >
            Repository
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;
