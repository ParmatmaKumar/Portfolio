import React from 'react'
import { FaLaptopCode, FaMobileAlt, FaDatabase } from 'react-icons/fa'

const services = [
  { icon: FaLaptopCode, title: 'Frontend Development', description: 'Responsive, accessible interfaces built with React and modern CSS practices.' },
  { icon: FaDatabase, title: 'Full Stack Applications', description: 'End-to-end web application features using Node.js, Express, MongoDB, and REST APIs.' },
  { icon: FaMobileAlt, title: 'Responsive Web Design', description: 'Layouts that adapt cleanly across mobile, tablet, and desktop screens.' },
]

const Services = () => (
  <section id="services" className="section-shell section-muted">
    <div className="section-container">
      <div className="section-heading">
        <p className="eyebrow">What I work on</p>
        <h2>Skills I bring <span className="gradient-text">to a project</span></h2>
        <p>My current focus is building useful, maintainable web applications and polished user experiences.</p>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {services.map(({ icon: Icon, title, description }) => (
          <article key={title} className="surface-card group">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-400/10 text-2xl text-violet-300 transition group-hover:bg-violet-400/20"><Icon /></div>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="mt-3 leading-7 text-slate-400">{description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default Services
