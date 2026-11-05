import useTunisTime from '../hooks/useTunisTime'

const arsenal = ['Angular', 'Spring Boot', 'React', 'NestJS', '.NET', 'Docker', 'Kubernetes', 'OpenAI']

const focusAreas = [
  {
    code: 'F_01',
    title: 'SaaS platforms',
    copy: 'Multi-tenant architectures with isolated data, clear roles and room to grow.',
  },
  {
    code: 'F_02',
    title: 'AI in the workflow',
    copy: 'Automation that removes busywork instead of adding another dashboard.',
  },
  {
    code: 'F_03',
    title: 'Real-time operations',
    copy: 'Live notifications, dashboards and workflows people can actually trust.',
  },
]

export default function AboutSection({ showHeader = true }) {
  const time = useTunisTime()

  return (
    <section id="about" className="reveal-on-scroll relative overflow-hidden bg-surface-container-lowest py-stack-lg">
      <div className="pointer-events-none absolute -left-24 top-24 h-[380px] w-[380px] rounded-full bg-primary/10 blur-[130px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-[420px] w-[420px] rounded-full bg-secondary/10 blur-[150px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-container-max px-margin-x">
        {showHeader && (
          <header className="mb-12 max-w-3xl">
            <span className="eyebrow">Layer 02 / Identity</span>
            <h2 className="mt-5 font-display text-display-mobile md:text-display text-on-surface">
              Engineer first.{' '}
              <span className="whitespace-nowrap font-serif-accent text-gradient">Product-minded</span> always.
            </h2>
            <p className="mt-5 max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
              I work where architecture, product and delivery meet — and I stay involved from the
              first schema to the last deploy.
            </p>
          </header>
        )}

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-gutter">
          <div className="reveal-child order-2 lg:order-1 lg:col-span-5">
            <div className="corner-frame glass-panel rounded-2xl p-6 sm:p-7">
              <div className="flex items-center justify-between font-label-caps text-[8px] text-on-surface-variant">
                <span>OPERATOR_01</span>
                <span className="flex items-center gap-2">
                  <span className="status-dot" />
                  TUNIS, TN
                </span>
              </div>

              <div className="mt-5 aspect-square overflow-hidden rounded-xl border border-white/10 bg-surface-container-high">
                <img
                  src="/imen.webp"
                  alt="Imen Bouchriha"
                  width="1000"
                  height="1000"
                  className="h-full w-full object-cover grayscale transition duration-700 hover:grayscale-0"
                />
              </div>

              <div className="mt-6">
                <h3 className="font-display text-[30px] leading-none text-on-surface">Imen Bouchriha</h3>
                <p className="mt-2 font-label-caps text-[9px] text-primary/80">FULL-STACK SOFTWARE ENGINEER</p>
                <p className="mt-4 font-body-md text-body-md leading-relaxed text-on-surface-variant">
                  Full-stack developer from Tunisia, building products that are as solid under the
                  hood as they look on screen.
                </p>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                <span className="font-label-caps text-[8px] text-on-surface-variant/60">LOCAL TIME</span>
                <span className="font-label-caps text-[10px] text-tertiary">{time} GMT+1</span>
              </div>

              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
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

          <div className="order-1 lg:order-2 lg:col-span-7">
            <p className="reveal-child font-headline-sm text-[24px] leading-snug text-on-surface sm:text-[30px]" style={{ transitionDelay: '80ms' }}>
              I design and build the whole path —{' '}
              <span className="text-on-surface-variant">interface, API, data, infrastructure</span>{' '}
              — and care about the small details that make a product feel effortless.
            </p>

            <div className="reveal-child mt-6 max-w-2xl space-y-4 font-body-md text-body-md text-on-surface-variant" style={{ transitionDelay: '140ms' }}>
              <p>
                My favourite problems live where product thinking meets engineering: multi-tenant
                platforms, real-time workflows and AI features that genuinely save people time.
              </p>
              <p>
                I value clean architecture, performance and the kind of reliability you only notice
                when it is missing.
              </p>
            </div>

            <div className="mt-9 grid gap-3 sm:grid-cols-3">
              {focusAreas.map((area, index) => (
                <div
                  key={area.code}
                  className="reveal-child rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-colors hover:border-primary/30 hover:bg-white/[0.04]"
                  style={{ transitionDelay: `${200 + index * 80}ms` }}
                >
                  <span className="font-label-caps text-[8px] text-primary/70">{area.code}</span>
                  <h3 className="mt-2 font-headline-sm text-[16px] text-on-surface">{area.title}</h3>
                  <p className="mt-1.5 font-body-md text-[13px] leading-relaxed text-on-surface-variant">{area.copy}</p>
                </div>
              ))}
            </div>

            <div className="reveal-child mt-9" style={{ transitionDelay: '460ms' }}>
              <div className="mb-3 flex items-center gap-3">
                <span className="font-label-caps text-[9px] text-on-surface-variant">ARSENAL</span>
                <span className="h-px flex-1 bg-white/10" />
                <span className="font-label-caps text-[8px] text-on-surface-variant/50">08 / CORE</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {arsenal.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 font-label-caps text-[9px] text-secondary transition-colors hover:border-secondary/40 hover:bg-secondary/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
