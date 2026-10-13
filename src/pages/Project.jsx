import React from 'react'
import ProjectCard from '../Card/ProjectCard'

const Project = () => (
  <section id="projects" className="section-shell">
    <div className="section-container">
      <div className="section-heading">
        <p className="eyebrow">Selected work</p>
        <h2>Projects built with <span className="gradient-text">purpose</span></h2>
        <p>A few projects that represent what I'm learning and building. Project links can be added as each repository is ready to share.</p>
      </div>
      <ProjectCard />
    </div>
  </section>
)

export default Project
