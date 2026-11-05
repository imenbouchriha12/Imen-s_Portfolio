const layers = [
  {
    code: '01',
    title: 'Interface',
    role: 'Where the product becomes tangible.',
    items: ['Angular', 'ReactJS', 'Tailwind', 'Bootstrap', 'HTML5', 'CSS3'],
    accent: '#ff9df5',
    Motif: InterfaceMotif,
  },
  {
    code: '02',
    title: 'API & Logic',
    role: 'Where the rules live.',
    items: ['Spring Boot', 'NestJS', '.NET', 'JavaScript (ES6)', 'Python', 'PHP', 'C++'],
    accent: '#b9a7ff',
    Motif: ApiMotif,
  },
  {
    code: '03',
    title: 'Data',
    role: 'What must stay true.',
    items: ['PostgreSQL', 'MySQL', 'PL/SQL', 'MongoDB', 'Neo4j'],
    accent: '#8fe3ff',
    Motif: DataMotif,
  },
  {
    code: '04',
    title: 'Infrastructure',
    role: 'What keeps it alive.',
    items: ['Docker', 'Kubernetes', 'Jenkins', 'CI/CD', 'Git / GitHub', 'Linux', 'Windows'],
    accent: '#b9a7ff',
    Motif: InfraMotif,
  },
  {
    code: '05',
    title: 'Mobile',
    role: 'The product, in hand.',
    items: ['Android', 'Xamarin', 'Flutter'],
    accent: '#ff9df5',
    Motif: MobileMotif,
  },
  {
    code: '06',
    title: 'Tooling',
    role: 'The bench around the work.',
    items: ['Figma', 'LaTeX', 'Canva', 'Scrum / Agile', 'Word', 'PowerPoint'],
    accent: '#8fe3ff',
    Motif: ToolingMotif,
  },
]

const totalTools = layers.reduce((count, layer) => count + layer.items.length, 0)

function MotifFrame({ children, accent }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden="true"
      className="absolute right-4 top-1/2 h-[104px] w-[104px] -translate-y-1/2 opacity-70 transition-opacity duration-500 group-hover:opacity-100"
      style={{ color: accent }}
    >
      {children}
    </svg>
  )
}

function InterfaceMotif() {
  return (
    <MotifFrame accent="#ff9df5">
      <circle cx="58" cy="58" r="34" stroke="currentColor" strokeOpacity="0.32" />
      <circle cx="58" cy="58" r="21" stroke="currentColor" strokeOpacity="0.18" />
      <path d="M58 14v88M14 58h88" stroke="currentColor" strokeOpacity="0.13" />
      <path d="M54 46l26 13-11 3.6-3.6 11z" fill="currentColor" fillOpacity="0.6" />
      <circle cx="93" cy="40" r="2.4" fill="currentColor" />
    </MotifFrame>
  )
}

function ApiMotif() {
  return (
    <MotifFrame accent="#b9a7ff">
      <path d="M8 72h15l7-17 9 33 11-47 11 58 9-33 8 13h16" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M8 98h104" stroke="currentColor" strokeOpacity="0.14" />
      <circle cx="39" cy="55" r="2.4" fill="currentColor" />
      <circle cx="61" cy="99" r="2.4" fill="currentColor" />
      <circle cx="88" cy="59" r="2.4" fill="currentColor" />
    </MotifFrame>
  )
}

function DataMotif() {
  const cells = [6, 7, 12, 13, 17, 18]
  return (
    <MotifFrame accent="#8fe3ff">
      {Array.from({ length: 30 }, (_, index) => {
        const col = index % 6
        const row = Math.floor(index / 6)
        const active = cells.includes(index)
        return (
          <rect
            key={index}
            x={22 + col * 15}
            y={22 + row * 15}
            width="8"
            height="8"
            rx="2"
            fill="currentColor"
            fillOpacity={active ? 0.62 : 0.13}
          />
        )
      })}
      <path d="M18 18h84v84H18z" stroke="currentColor" strokeOpacity="0.16" />
    </MotifFrame>
  )
}

function InfraMotif() {
  return (
    <MotifFrame accent="#b9a7ff">
      <path d="M60 18l28 16-28 16-28-16z" stroke="currentColor" strokeOpacity="0.55" />
      <path d="M32 46l28 16 28-16M32 60l28 16 28-16M32 74l28 16 28-16" stroke="currentColor" strokeOpacity="0.28" />
      <path d="M60 50v32" stroke="currentColor" strokeOpacity="0.14" />
      <circle cx="60" cy="34" r="2.2" fill="currentColor" />
    </MotifFrame>
  )
}

function MobileMotif() {
  return (
    <MotifFrame accent="#ff9df5">
      <rect x="38" y="12" width="46" height="94" rx="10" stroke="currentColor" strokeOpacity="0.5" />
      <rect x="47" y="23" width="28" height="66" rx="3" stroke="currentColor" strokeOpacity="0.18" />
      <path d="M54 98h14" stroke="currentColor" strokeOpacity="0.4" strokeLinecap="round" />
      <circle cx="61" cy="18.5" r="1.6" fill="currentColor" />
    </MotifFrame>
  )
}

function ToolingMotif() {
  return (
    <MotifFrame accent="#8fe3ff">
      <circle cx="60" cy="52" r="25" stroke="currentColor" strokeOpacity="0.4" />
      <path d="M60 16v72M24 52h72" stroke="currentColor" strokeOpacity="0.15" />
      <path d="M60 52l19-13" stroke="currentColor" strokeOpacity="0.65" strokeLinecap="round" />
      <circle cx="60" cy="52" r="2.6" fill="currentColor" />
      <path d="M30 96h60" stroke="currentColor" strokeOpacity="0.3" />
      <path d="M36 92v8M48 92v5M60 92v8M72 92v5M84 92v8" stroke="currentColor" strokeOpacity="0.24" />
    </MotifFrame>
  )
}

export default function StackAtlas() {
  return (
    <section id="skills" className="reveal-on-scroll relative overflow-hidden bg-surface-container-lowest py-stack-lg">
      <div className="pointer-events-none absolute -left-32 top-1/4 h-[420px] w-[420px] rounded-full bg-secondary/[0.08] blur-[150px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-container-max px-margin-x">
        <header className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <span className="eyebrow">Layer 05 / Stack</span>
            <h2 className="mt-5 font-display text-display-mobile text-on-surface md:text-display">
              Six layers. One <span className="font-serif-accent text-gradient">system</span>.
            </h2>
          </div>
          <p className="font-body-lg text-body-lg text-on-surface-variant lg:col-span-5">
            Six layers, each with a job — from the first pixel to the running server. This is the
            kit I reach for to take a product from a blank page to production.
          </p>
        </header>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {layers.map((layer) => (
            <article
              key={layer.code}
              className="reveal-child group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-background/60 transition-colors duration-500 hover:border-primary/35 hover:bg-white/[0.045]"
            >
              <div className="relative h-[140px] overflow-hidden border-b border-white/10">
                <div
                  className="pointer-events-none absolute -right-10 -top-12 h-36 w-36 rounded-full opacity-20 blur-[46px] transition-opacity duration-500 group-hover:opacity-35"
                  style={{ backgroundColor: layer.accent }}
                  aria-hidden="true"
                />
                <span className="absolute left-5 top-4 font-label-caps text-[8px] tracking-[0.22em] text-on-surface-variant/50">
                  LAYER_{layer.code}
                </span>
                <span className="atlas-number absolute -bottom-6 left-3 font-display text-[112px] leading-none">
                  {layer.code}
                </span>
                <layer.Motif />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-[25px] leading-none text-on-surface">{layer.title}</h3>
                  <span className="shrink-0 font-label-caps text-[8px] text-on-surface-variant/50">
                    {layer.items.length} TOOLS
                  </span>
                </div>
                <p className="mt-2.5 font-serif-accent text-[19px] leading-tight text-gradient">{layer.role}</p>

                <ul className="mt-auto grid grid-cols-2 gap-x-3 gap-y-1.5 pt-5">
                  {layer.items.map((item) => (
                    <li key={item} className="flex min-w-0 items-center gap-1.5 font-label-caps text-[8px] text-on-surface-variant">
                      <span className="text-primary/60" aria-hidden="true">+</span>
                      <span className="truncate">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between gap-4 border-t border-white/10 pt-4 font-label-caps text-[8px] text-on-surface-variant/50">
          <span>06 LAYERS</span>
          <span className="h-px flex-1 bg-white/[0.08]" aria-hidden="true" />
          <span>{String(totalTools).padStart(2, '0')} TOOLS IN ROTATION</span>
        </div>
      </div>
    </section>
  )
}
