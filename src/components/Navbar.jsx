import { useEffect, useState } from 'react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Journey', href: '#journey' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('')
  const [progress, setProgress] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0)

      const sections = navItems.map((item) => document.getElementById(item.href.slice(1)))
      let current = ''
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.getBoundingClientRect().top <= 150) {
          current = navItems[i].href
          break
        }
      }
      setActive(current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const scrollTo = (href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 bg-surface/10 backdrop-blur-xl border-b border-white/10 transition-all duration-500 ease-in-out ${
        scrolled ? 'h-16' : 'h-20'
      }`}
    >
      <div
        className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-primary to-secondary transition-[width] duration-150"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      ></div>
      <div className="max-w-container-max mx-auto px-margin-x flex justify-between items-center h-full">
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); scrollTo('#home') }}
          className="font-display text-headline-sm font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
        >
          Imen.Dev
        </a>

        <nav className="hidden md:flex gap-7" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => { e.preventDefault(); scrollTo(item.href) }}
              className={`font-label-caps text-label-caps transition-all cursor-pointer ${
                active === item.href
                  ? 'text-primary border-b-2 border-primary pb-1'
                  : 'text-on-surface/70 hover:text-on-surface'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollTo('#contact') }}
            className="hidden sm:inline-flex font-label-caps text-label-caps bg-gradient-to-r from-primary to-secondary text-on-primary-container px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300 font-bold shadow-lg shadow-primary/20"
          >
            Hire Me
          </a>
          <button
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="md:hidden w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-on-surface hover:border-primary/50 transition-all"
          >
            <span className="material-symbols-outlined">{mobileOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="md:hidden absolute top-full left-0 right-0 bg-surface-container-lowest shadow-2xl border-b border-white/10 px-margin-x py-6 flex flex-col gap-2 animate-fade-in-up"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => { e.preventDefault(); scrollTo(item.href) }}
              className={`px-4 py-3 rounded-xl font-label-caps text-label-caps transition-all ${
                active === item.href
                  ? 'bg-primary/10 text-primary border border-primary/30'
                  : 'text-on-surface/80 hover:bg-white/5'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollTo('#contact') }}
            className="mt-2 text-center font-label-caps text-label-caps bg-gradient-to-r from-primary to-secondary text-on-primary-container px-6 py-3 rounded-xl font-bold"
          >
            Hire Me
          </a>
        </nav>
      )}
    </header>
  )
}
