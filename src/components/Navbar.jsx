import { useEffect, useState } from 'react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header')
      if (!header) return
      if (window.scrollY > 50) {
        header.classList.add('bg-surface/80', 'h-16')
        header.classList.remove('h-20')
      } else {
        header.classList.remove('bg-surface/80', 'h-16')
        header.classList.add('h-20')
      }
      const sections = navItems.map(item => document.getElementById(item.href.slice(1)))
      let current = ''
      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i]
        if (sec && sec.getBoundingClientRect().top <= 150) {
          current = navItems[i].href
          break
        }
      }
      setActive(current)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/10 backdrop-blur-xl border-b border-white/10 transition-all duration-500 ease-in-out">
      <div className="max-w-container-max mx-auto px-margin-x flex justify-between items-center h-20" id="navbar-container">
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('#home') }} className="font-display text-headline-sm font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
          Imen.Dev
        </a>
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => { e.preventDefault(); scrollTo(item.href) }}
              className={`font-label-caps text-label-caps transition-all cursor-pointer ${active === item.href ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface/70 hover:text-on-surface'}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('#contact') }} className="font-label-caps text-label-caps bg-gradient-to-r from-primary to-secondary text-on-primary-container px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300 font-bold shadow-lg shadow-primary/20">
          Hire Me
        </a>
      </div>
    </header>
  )
}
