import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

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
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0)

      let current = ''
      navItems.forEach((item) => {
        const section = document.getElementById(item.href.slice(1))
        if (section && section.getBoundingClientRect().top <= 160) current = item.href
      })
      setActive(current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const goTo = (href) => {
    setMobileOpen(false)
    const id = href.slice(1)
    if (location.pathname !== '/') {
      navigate(`/#${id}`)
      return
    }
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'h-16 border-b border-white/10 bg-background/80 backdrop-blur-xl'
          : 'h-20 border-b border-transparent bg-transparent'
      }`}
    >
      <div
        className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-primary via-secondary to-tertiary"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />

      <div className="mx-auto flex h-full max-w-container-max items-center justify-between px-margin-x">
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); goTo('#home') }}
          className="group flex items-center gap-3"
          aria-label="Imen Bouchriha — home"
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/[0.15] bg-white/[0.03] font-display text-[15px] text-primary transition-colors group-hover:border-primary/50">
            IB
          </span>
          <span className="hidden sm:block">
            <span className="block font-label-caps text-[9px] tracking-[0.22em] text-on-surface">
              IMEN BOUCHRIHA
            </span>
            <span className="mt-1 hidden font-label-caps text-[7px] tracking-[0.18em] text-on-surface-variant/60 lg:block">
              FULL-STACK ENGINEER
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => { e.preventDefault(); goTo(item.href) }}
              aria-current={active === item.href ? 'page' : undefined}
              className={`nav-link cursor-pointer font-label-caps text-[10px] transition-colors ${
                active === item.href
                  ? 'text-primary'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); goTo('#contact') }}
            className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-2.5 font-label-caps text-[9px] font-bold text-on-primary-container transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            Let's talk
            <span className="material-symbols-outlined text-[15px]">arrow_outward</span>
          </a>
          <button
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-on-surface transition-colors hover:border-primary/50 md:hidden"
          >
            <span className="material-symbols-outlined">{mobileOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="animate-fade-in-up absolute inset-x-0 top-full border-b border-white/10 bg-surface-container-lowest px-margin-x py-4 shadow-2xl md:hidden"
          style={{ animationDuration: '0.28s' }}
        >
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => { e.preventDefault(); goTo(item.href) }}
              aria-current={active === item.href ? 'page' : undefined}
              className="flex items-center justify-between border-b border-white/5 py-3.5"
            >
              <span className="flex items-center gap-3">
                <span className="font-label-caps text-[8px] text-primary/60">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span
                  className={`font-label-caps text-[10px] ${
                    active === item.href ? 'text-primary' : 'text-on-surface'
                  }`}
                >
                  {item.label}
                </span>
              </span>
              <span className="material-symbols-outlined text-[16px] text-on-surface-variant/40">
                arrow_outward
              </span>
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); goTo('#contact') }}
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary py-3 font-label-caps text-[9px] font-bold text-on-primary-container"
          >
            Let's talk
            <span className="material-symbols-outlined text-[15px]">arrow_outward</span>
          </a>
        </nav>
      )}
    </header>
  )
}
