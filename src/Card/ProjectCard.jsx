import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { projectData } from '../Data/projectData'

const ProjectCard = () => (
  <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
    {projectData.map((project) => (
      <article key={project.id} className="project-card">
        <div className="relative h-48 overflow-hidden bg-slate-900">
          <img src={project.image} alt={project.imageAlt || project.title} loading="lazy" className="h-full w-full object-cover transition duration-500 hover:scale-105" />
          <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-[#09090f]/80 px-3 py-1 text-xs font-medium text-violet-200 backdrop-blur">{project.category}</span>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
          <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((technology) => <span key={technology} className="skill-chip">{technology}</span>)}
          </div>
          <div className="mt-5 flex flex-wrap gap-3 border-t border-white/10 pt-4">
            {project.githubUrl ? (
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-violet-300 transition hover:text-violet-200"><FaGithub /> Source code</a>
            ) : (
              <span className="text-sm text-slate-500">Repository link coming soon</span>
            )}
            {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-white"><FaExternalLinkAlt /> Live demo</a>}
          </div>
        </div>
      </article>
    ))}
  </div>
)

export default ProjectCard
