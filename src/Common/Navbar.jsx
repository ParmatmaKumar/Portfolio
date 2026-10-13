import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { FaCode } from 'react-icons/fa'
import { HiMenu, HiX } from 'react-icons/hi'

const navItems = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Contact', to: 'contact' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#09090f]/85 backdrop-blur-xl">
      <nav className="mx-auto flex min-h-[76px] w-11/12 max-w-6xl items-center justify-between gap-4" aria-label="Main navigation">
        <a href="#home" onClick={closeMenu} className="flex items-center gap-3 text-lg font-bold tracking-wide text-white">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/15 text-xl text-violet-300">
            <FaCode />
          </span>
          <span>Parmatma<span className="text-violet-300">.dev</span></span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a key={item.to} href={`#${item.to}`} className="text-sm font-medium text-slate-300 transition hover:text-violet-300">
              {item.label}
            </a>
          ))}
        </div>
        <a href="#contact" className="primary-button hidden !px-5 !py-2.5 md:inline-flex">Let's talk</a>
        <button
          type="button"
          className="rounded-lg border border-white/10 p-2 text-2xl text-slate-200 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-white/10 bg-[#0d0d16] px-[5.5%] py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a key={item.to} href={`#${item.to}`} onClick={closeMenu} className="rounded-lg px-3 py-3 text-slate-300 transition hover:bg-white/5 hover:text-violet-300">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
