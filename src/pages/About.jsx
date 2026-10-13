import React from 'react'
import { FaGraduationCap, FaLightbulb } from 'react-icons/fa'

const skillGroups = [
  { title: 'Frontend', skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS', 'Redux'] },
  { title: 'Backend', skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication'] },
  { title: 'Database & Tools', skills: ['MongoDB', 'Git', 'GitHub', 'Postman'] },
  { title: 'Programming', skills: ['C++', 'Java basics', 'Data Structures & Algorithms'] },
]

const About = () => (
  <section id="about" className="section-shell">
    <div className="section-container">
      <div className="section-heading">
        <p className="eyebrow">A little about me</p>
        <h2>Curious mind. <span className="gradient-text">Practical builder.</span></h2>
        <p>I'm a Computer Science student focused on becoming a stronger full-stack developer through consistent learning and real projects.</p>
      </div>
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="surface-card flex flex-col justify-between gap-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-400/10 text-2xl text-violet-300"><FaGraduationCap /></div>
          <div>
            <h3 className="text-xl font-semibold text-white">Education & growth</h3>
            <p className="mt-3 leading-7 text-slate-400">B.Tech in Computer Science and Engineering at Rungta College. Currently strengthening my development skills, DSA, and problem-solving fundamentals.</p>
          </div>
          <div className="flex items-start gap-3 border-t border-white/10 pt-5 text-slate-400">
            <FaLightbulb className="mt-1 shrink-0 text-violet-300" />
            <p className="text-sm leading-6">I learn best by building, debugging, and improving real applications.</p>
          </div>
        </div>
        <div id="skills" className="grid gap-4 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title} className="surface-card">
              <h3 className="mb-4 font-semibold text-white">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => <span key={skill} className="skill-chip">{skill}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default About
