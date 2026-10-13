import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import ContactForm from '../Common/ContactForm'

const Contact = () => (
  <section id="contact" className="section-shell section-muted">
    <div className="section-container">
      <div className="section-heading">
        <p className="eyebrow">Get in touch</p>
        <h2>Let's build something <span className="gradient-text">meaningful</span></h2>
        <p>Have an internship opportunity, project idea, or feedback? Send me a message.</p>
      </div>
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="surface-card flex flex-col gap-6">
          <h3 className="text-xl font-semibold text-white">Contact details</h3>
          <a href="mailto:parmatmakumarr712@gmail.com" className="flex items-center gap-3 text-slate-300 transition hover:text-violet-300">
            <FaEnvelope className="text-violet-300" /> parmatmakumarr712@gmail.com
          </a>
          <a href="https://github.com/ParmatmaKumar" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-300 transition hover:text-violet-300">
            <FaGithub className="text-violet-300" /> GitHub profile
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-300 transition hover:text-violet-300">
            <FaLinkedin className="text-violet-300" /> Find me on LinkedIn
          </a>
          <p className="border-t border-white/10 pt-5 text-sm leading-6 text-slate-500">The contact form opens your email app with a pre-filled message. It does not send data to a server.</p>
        </div>
        <ContactForm />
      </div>
      <footer className="mt-14 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Parmatma Kumar. Built with React and Tailwind CSS.
      </footer>
    </div>
  </section>
)

export default Contact
