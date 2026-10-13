import React from 'react'
import { FaGithub, FaArrowDown, FaEnvelope } from 'react-icons/fa'
import studentImage from '../assets/boy1.png'
import About from './About'
import Services from './Sevices'
import Project from './Project'
import Contact from './Contact'

const Home = () => {
  return (
    <>
      <section id="home" className="relative isolate overflow-hidden bg-[#09090f]">
        <div className="pointer-events-none absolute -top-32 right-[-8rem] -z-10 h-96 w-96 rounded-full bg-violet-700/25 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-[-8rem] -z-10 h-80 w-80 rounded-full bg-fuchsia-700/15 blur-3xl" />
        <div className="mx-auto grid min-h-[calc(100vh-76px)] w-11/12 max-w-6xl items-center gap-12 py-16 md:grid-cols-2 md:py-24">
          <div className="order-2 flex flex-col items-start gap-6 md:order-1">
            <span className="rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-2 text-sm font-medium text-violet-200">
              Available for internships & opportunities
            </span>
            <div>
              <p className="mb-3 text-lg text-slate-400">Hello, I'm</p>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Parmatma <span className="gradient-text">Kumar</span>
              </h1>
            </div>
            <h2 className="text-2xl font-semibold text-slate-200 sm:text-3xl">
              Aspiring Full Stack Developer
            </h2>
            <p className="max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              I build responsive web experiences and full-stack applications using React,
              Node.js, Express, and MongoDB. I enjoy solving problems and turning ideas
              into useful products.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="#projects" className="primary-button">
                Explore my work <FaArrowDown aria-hidden="true" />
              </a>
              <a href="#contact" className="secondary-button">
                <FaEnvelope aria-hidden="true" /> Contact me
              </a>
            </div>
            <div className="flex items-center gap-3 pt-2 text-sm text-slate-400">
              <span className="h-px w-10 bg-slate-700" />
              Find me online
              <a
                href="https://github.com/ParmatmaKumar"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="text-xl text-slate-300 transition hover:text-violet-300"
              >
                <FaGithub />
              </a>
            </div>
          </div>
          <div className="order-1 flex justify-center md:order-2">
            <div className="portrait-wrap">
              <div className="portrait-glow" />
              <img
                src={studentImage}
                alt="Illustration representing Parmatma Kumar"
                className="relative z-10 max-h-[440px] w-auto object-contain drop-shadow-2xl"
              />
              <div className="absolute bottom-5 left-1/2 z-20 w-max -translate-x-1/2 rounded-2xl border border-white/10 bg-[#151521]/90 px-5 py-3 text-center shadow-xl backdrop-blur">
                <p className="font-semibold text-white">Building. Learning. Improving.</p>
                <p className="mt-1 text-xs text-slate-400">One project at a time</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Services />
      <Project />
      <Contact />
    </>
  )
}

export default Home
