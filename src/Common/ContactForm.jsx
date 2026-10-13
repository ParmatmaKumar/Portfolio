import React, { useState } from 'react'
import { FaPaperPlane } from 'react-icons/fa'

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)
    window.location.href = `mailto:parmatmakumarr712@gmail.com?subject=${subject}&body=${body}`
  }

  const inputClass = 'form-input'

  return (
    <form onSubmit={handleSubmit} className="surface-card space-y-5">
      <div>
        <label htmlFor="name" className="form-label">Your name</label>
        <input id="name" name="name" value={form.name} onChange={handleChange} className={inputClass} placeholder="Enter your name" autoComplete="name" required />
      </div>
      <div>
        <label htmlFor="email" className="form-label">Email address</label>
        <input id="email" name="email" type="email" value={form.email} onChange={handleChange} className={inputClass} placeholder="you@example.com" autoComplete="email" required />
      </div>
      <div>
        <label htmlFor="message" className="form-label">Message</label>
        <textarea id="message" name="message" value={form.message} onChange={handleChange} className={inputClass} rows={5} placeholder="Tell me a little about your message..." required />
      </div>
      <button type="submit" className="primary-button w-full sm:w-auto">Open email app <FaPaperPlane aria-hidden="true" /></button>
    </form>
  )
}

export default ContactForm
