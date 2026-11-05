const links = [
  { label: 'About', href: 'about' },
  { label: 'Journey', href: 'journey' },
  { label: 'Projects', href: 'projects' },
  { label: 'Skills', href: 'skills' },
  { label: 'Contact', href: 'contact' },
]

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-surface-container-lowest">
      <div className="mx-auto max-w-container-max px-margin-x py-12">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <a href="/#home" className="group inline-flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/[0.15] bg-white/[0.03] font-display text-[15px] text-primary transition-colors group-hover:border-primary/50">
                IB
              </span>
              <span className="font-label-caps text-[9px] tracking-[0.22em] text-on-surface">
                IMEN BOUCHRIHA
              </span>
            </a>
            <p className="mt-4 max-w-xs font-body-md text-[14px] leading-relaxed text-on-surface-variant">
              Full-stack engineer building dependable products from interface to infrastructure.
            </p>
          </div>

          <nav className="md:col-span-4" aria-label="Footer navigation">
            <p className="font-label-caps text-[8px] text-on-surface-variant/50">INDEX</p>
            <div className="mt-4 grid grid-cols-2 gap-y-2.5">
              {links.map((link, index) => (
                <a
                  key={link.label}
                  href={`/#${link.href}`}
                  className="inline-flex items-center gap-2 font-label-caps text-[9px] text-on-surface-variant transition-colors hover:text-primary"
                >
                  <span className="text-[8px] text-primary/50">{String(index + 1).padStart(2, '0')}</span>
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          <div className="md:col-span-3">
            <p className="font-label-caps text-[8px] text-on-surface-variant/50">ELSEWHERE</p>
            <div className="mt-4 flex flex-col gap-2.5">
              <a
                href="https://github.com/imenbouchriha12"
                target="_blank"
                rel="noopener noreferrer"
                className="font-label-caps text-[9px] text-on-surface-variant transition-colors hover:text-primary"
              >
                GITHUB ↗
              </a>
              <a
                href="https://www.linkedin.com/in/bouchriha-imen-99077823b"
                target="_blank"
                rel="noopener noreferrer"
                className="font-label-caps text-[9px] text-on-surface-variant transition-colors hover:text-primary"
              >
                LINKEDIN ↗
              </a>
              <a
                href="mailto:imenbouchriha5@gmail.com"
                className="font-label-caps text-[9px] text-on-surface-variant transition-colors hover:text-primary"
              >
                EMAIL ↗
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="font-label-caps text-[8px] text-on-surface-variant/50">
            © {new Date().getFullYear()} IMEN BOUCHRIHA · TUNIS, TN
          </p>
          <p className="font-label-caps text-[8px] text-on-surface-variant/40">
            REACT · VITE · TAILWIND · NETLIFY
          </p>
        </div>
      </div>
    </footer>
  )
}
