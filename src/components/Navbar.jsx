import { useState } from 'react'
import { personalData } from '../data/portfolioData'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <nav className="nav container">
        <a href="#home" className="nav-logo" onClick={() => setOpen(false)}>
          {personalData.firstName}
          <span className="nav-logo-accent">.dev</span>
        </a>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  )
}

export default Navbar
