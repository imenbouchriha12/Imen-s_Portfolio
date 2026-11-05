import { useRef, useState } from 'react'

const layers = [
  {
    code: '01',
    title: 'Interface',
    role: 'Where the product becomes tangible.',
    summary: 'Accessible, fast interfaces built to survive real content, small screens and real users.',
    items: ['Angular', 'ReactJS', 'Tailwind', 'Bootstrap', 'HTML5', 'CSS3'],
  },
  {
    code: '02',
    title: 'API & Logic',
    role: 'Where the rules live.',
    summary: 'Services with clear boundaries, explicit contracts and enough structure to change safely.',
    items: ['Spring Boot', 'NestJS', '.NET', 'JavaScript (ES6)', 'Python', 'PHP', 'C++'],
  },
  {
    code: '03',
    title: 'Data',
    role: 'What must stay true.',
    summary: 'Schemas and queries designed before the first screen is drawn, not patched after launch.',
    items: ['PostgreSQL', 'MySQL', 'PL/SQL', 'MongoDB', 'Neo4j (NoSQL)'],
  },
  {
    code: '04',
    title: 'Infrastructure',
    role: 'What keeps it alive.',
    summary: 'Containers, pipelines and servers set up so that releasing stops being an event.',
    items: ['Docker', 'Kubernetes', 'Jenkins', 'CI/CD', 'Git/GitHub', 'Linux', 'Windows'],
  },
  {
    code: '05',
    title: 'Mobile',
    role: 'The product, in hand.',
    summary: 'Cross-platform builds and native fundamentals for the moments work leaves the browser.',
    items: ['Android', 'Xamarin', 'Flutter'],
  },
  {
    code: '06',
    title: 'Tooling',
    role: 'The bench around the work.',
    summary: 'Design, documentation and process — the quiet tools that keep delivery honest.',
    items: ['Figma', 'LaTeX', 'Canva', 'Scrum / Agile', 'Word', 'PowerPoint'],
  },
]

export default function ToolkitRack() {
  const [active, setActive] = useState(0)
  const tabRefs = useRef([])
  const layer = layers[active]

  const selectTab = (index) => {
    setActive(index)
    tabRefs.current[index]?.focus()
  }

  const handleKeyDown = (event, index) => {
    const last = layers.length - 1
    let next = null

    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = index === last ? 0 : index + 1
    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = index === 0 ? last : index - 1
    if (event.key === 'Home') next = 0
    if (event.key === 'End') next = last
    if (next === null) return

    event.preventDefault()
    selectTab(next)
  }

  return (
    <section id="skills" className="reveal-on-scroll relative overflow-hidden bg-surface-container-lowest py-stack-lg">
      <div className="pointer-events-none absolute -left-32 top-1/4 h-[420px] w-[420px] rounded-full bg-secondary/[0.08] blur-[150px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-container-max px-margin-x">
        <header className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <span className="eyebrow">Layer 05 / Toolkit</span>
            <h2 className="mt-5 font-display text-display-mobile md:text-display text-on-surface">
              One rack. Six <span className="font-serif-accent text-gradient">layers</span>.
            </h2>
          </div>
          <p className="font-body-lg text-body-lg text-on-surface-variant lg:col-span-5">
            Every layer is a unit in the rack. Open one to inspect the modules I actually ship with.
          </p>
        </header>

        <div className="mt-12 grid gap-5 lg:grid-cols-12 lg:gap-gutter">
          <div className="lg:col-span-4">
            <div className="glass-panel rounded-2xl p-3">
              <div className="flex items-center justify-between px-2 pb-2 pt-1">
                <span className="font-label-caps text-[8px] text-on-surface-variant">RACK_01</span>
                <span className="font-label-caps text-[8px] text-on-surface-variant/50">06 UNITS</span>
              </div>

              <div
                role="tablist"
                aria-label="Toolkit layers"
                className="grid grid-cols-1 gap-1.5 sm:grid-cols-2 lg:grid-cols-1"
              >
                {layers.map((item, index) => {
                  const selected = index === active
                  return (
                    <button
                      key={item.code}
                      ref={(el) => { tabRefs.current[index] = el }}
                      role="tab"
                      id={`toolkit-tab-${item.code}`}
                      aria-selected={selected}
                      aria-controls="toolkit-panel"
                      tabIndex={selected ? 0 : -1}
                      onClick={() => setActive(index)}
                      onKeyDown={(event) => handleKeyDown(event, index)}
                      className={`group relative flex items-center gap-3 overflow-hidden rounded-xl border px-3 py-2.5 text-left transition-colors ${
                        selected
                          ? 'border-primary/40 bg-primary/[0.08]'
                          : 'border-transparent hover:border-white/10 hover:bg-white/[0.03]'
                      }`}
                    >
                      <span
                        className={`grid h-7 w-7 shrink-0 place-items-center rounded-md border font-label-caps text-[9px] transition-colors ${
                          selected
                            ? 'border-primary/40 text-primary'
                            : 'border-white/10 text-on-surface-variant/70'
                        }`}
                      >
                        {item.code}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span
                          className={`block truncate font-headline-sm text-[14px] leading-tight transition-colors ${
                            selected ? 'text-on-surface' : 'text-on-surface-variant group-hover:text-on-surface'
                          }`}
                        >
                          {item.title}
                        </span>
                        <span className="mt-0.5 block font-label-caps text-[7px] text-on-surface-variant/50">
                          {item.items.length} MODULES
                        </span>
                      </span>
                      <span
                        className={`h-1.5 w-1.5 shrink-0 rounded-full transition-colors ${
                          selected ? 'bg-tertiary shadow-[0_0_8px_#8fe3ff]' : 'bg-white/20'
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div
              id="toolkit-panel"
              role="tabpanel"
              aria-labelledby={`toolkit-tab-${layer.code}`}
              tabIndex={0}
              className="corner-frame glass-panel relative h-full rounded-2xl p-6 sm:p-8 lg:min-h-[430px]"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-label-caps text-[8px] text-on-surface-variant">
                  MODULE_BAY / UNIT_{layer.code}
                </span>
                <span className="flex items-center gap-2 font-label-caps text-[8px] text-tertiary">
                  <span className="status-dot" />
                  ONLINE
                </span>
              </div>

              <div key={layer.code} className="mt-8">
                <div className="module-enter">
                  <p className="font-label-caps text-[9px] text-primary/70">{layer.items.length} MODULES INSTALLED</p>
                  <h3 className="mt-2 font-display text-[34px] leading-none text-on-surface sm:text-[44px]">
                    {layer.title}
                  </h3>
                  <p className="mt-3 font-serif-accent text-[21px] leading-snug text-gradient">{layer.role}</p>
                  <p className="mt-3 max-w-xl font-body-md text-[14px] leading-relaxed text-on-surface-variant">
                    {layer.summary}
                  </p>
                </div>

                <div className="mt-7 grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
                  {layer.items.map((item, index) => (
                    <div
                      key={item}
                      className="module-item group flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2.5 transition-colors hover:border-primary/30 hover:bg-white/[0.04]"
                      style={{ animationDelay: `${80 + index * 40}ms` }}
                    >
                      <span className="flex min-w-0 items-center gap-2.5">
                        <span className="font-label-caps text-[8px] text-primary/60">
                          {layer.code}.{String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="truncate font-body-md text-[13px] text-on-surface">{item}</span>
                      </span>
                      <span
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-tertiary/50 transition-colors group-hover:bg-primary"
                        aria-hidden="true"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between gap-4 border-t border-white/10 pt-3 font-label-caps text-[8px] text-on-surface-variant/50">
                <span>BUS / 01—06</span>
                <span className="flex items-center gap-1.5" aria-hidden="true">
                  {layers.map((item, index) => (
                    <span
                      key={item.code}
                      className={`h-1 w-4 rounded-full transition-colors ${
                        index === active ? 'bg-primary' : 'bg-white/[0.15]'
                      }`}
                    />
                  ))}
                </span>
                <span className="hidden sm:inline">SIX LAYERS / ONE STACK</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
