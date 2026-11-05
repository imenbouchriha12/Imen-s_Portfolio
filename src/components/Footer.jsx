const links = [
  { label: 'About', href: '#about' },
  { label: 'Journey', href: '#journey' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="relative z-10 bg-surface-container-lowest border-t border-white/5 pt-14 pb-8">
      <div className="max-w-container-max mx-auto px-margin-x">
        <div className="grid gap-10 md:grid-cols-3 md:items-start">
          <div>
            <a href="#home" className="font-display text-headline-sm font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Imen.Dev
            </a>
            <p className="font-body-md text-sm text-on-surface-variant opacity-70 mt-3 max-w-xs leading-relaxed">
              Full-stack developer crafting fast, thoughtful and dependable digital products.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-3 md:justify-center" aria-label="Footer navigation">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-3 md:justify-end">
            <a
              href="https://github.com/imenbouchriha12"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-on-surface hover:text-primary hover:border-primary/50 transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/bouchriha-imen-99077823b"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-on-surface hover:text-primary hover:border-primary/50 transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="mailto:imenbouchriha5@gmail.com"
              aria-label="Email"
              className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-on-surface hover:text-primary hover:border-primary/50 transition-all"
            >
              <span className="material-symbols-outlined text-[20px]">mail</span>
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body-md text-sm text-on-surface-variant opacity-60">
            © {new Date().getFullYear()} Imen Bouchriha. All rights reserved.
          </p>
          <p className="font-body-md text-sm text-on-surface-variant opacity-60">
            Designed &amp; built with React, Vite and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}
