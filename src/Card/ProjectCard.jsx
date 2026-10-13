import React from "react";
import { projectData } from "../Data/projectData";

const ProjectCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {projectData.map((project) => (
        <div
          key={project.id}
          className="flex flex-col bg-gray-800/40 p-4 rounded-md shadow-lg hover:shadow-xl transition duration-300"
        >

          {/* Image */}
          <div className="w-full h-56 overflow-hidden rounded-md">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover hover:scale-105 transition duration-300"
            />
          </div>

          {/* Title */}
          <div className="flex justify-between items-center mt-4">
            <span className="text-xl md:text-2xl text-gray-200 font-semibold">
              {project.title}
            </span>
          </div>

          {/* Description */}
          <p className="text-pink-200 mt-2 text-sm md:text-base">
            {project.description}
          </p>

        </div>
      ))}

    </div>
  );
};

export default ProjectCard;