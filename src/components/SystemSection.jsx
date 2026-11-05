import useTunisTime from '../hooks/useTunisTime'

const strata = [
  { code: '01', name: 'Interface', tech: 'React · Angular · Tailwind', note: 'What people touch' },
  { code: '02', name: 'API', tech: 'NestJS · Spring Boot · .NET', note: 'Where logic lives' },
  { code: '03', name: 'Data', tech: 'PostgreSQL · SQL Server · MySQL', note: 'What must stay true' },
  { code: '04', name: 'Infra', tech: 'Docker · Kubernetes · Jenkins', note: 'What keeps it alive' },
]

const loads = ['TRAFFIC', 'DATA', 'CHANGE']

export default function SystemSection() {
  const time = useTunisTime()

  return (
    <div className="relative">
      <div className="corner-frame glass-panel relative rounded-2xl p-5 sm:p-6">
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.05] via-transparent to-transparent" aria-hidden="true" />

        <div className="relative flex items-start justify-between gap-4">
          <div>
            <p className="font-label-caps text-[8px] text-on-surface-variant">SECTION A–A</p>
            <p className="mt-1 font-headline-sm text-[15px] leading-tight text-on-surface">System under load</p>
          </div>
          <span className="flex shrink-0 items-center gap-2 font-label-caps text-[8px] text-tertiary">
            <span className="status-dot" />
            HOLDING
          </span>
        </div>

        <div className="relative mt-5 flex items-end justify-around border-b border-dashed border-white/10 pb-2" aria-hidden="true">
          {loads.map((load, index) => (
            <div key={load} className="flex flex-col items-center gap-1">
              <span className="font-label-caps text-[7px] tracking-[0.18em] text-on-surface-variant/70">{load}</span>
              <span className="load-arrow" style={{ animationDelay: `${index * 0.4}s` }}>
                <span className="material-symbols-outlined text-[14px] text-primary/70">south</span>
              </span>
            </div>
          ))}
        </div>

        <ol className="relative mt-4" aria-label="System layers under load">
          {strata.map((layer, index) => (
            <li key={layer.code}>
              <div className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.02] transition-colors hover:border-primary/30 hover:bg-white/[0.04]">
                <span className="hatch absolute inset-y-0 left-0 w-2.5 border-r border-white/[0.06]" aria-hidden="true" />
                <div className="relative flex items-center gap-3 py-2.5 pl-4 pr-3">
                  <span className="w-5 shrink-0 font-label-caps text-[9px] text-primary/80">{layer.code}</span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-3">
                      <p className="font-headline-sm text-[15px] text-on-surface">{layer.name}</p>
                      <p className="hidden font-label-caps text-[8px] text-on-surface-variant/50 sm:block">{layer.note}</p>
                    </div>
                    <p className="truncate font-label-caps text-[9px] text-on-surface-variant">{layer.tech}</p>
                  </div>
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-tertiary/60 transition-colors group-hover:bg-primary" aria-hidden="true" />
                </div>
              </div>
              {index < strata.length - 1 && (
                <div className="stack-link" aria-hidden="true">
                  <span style={{ animationDelay: `${index * 0.55}s` }} />
                </div>
              )}
            </li>
          ))}
        </ol>

        <div className="relative mt-4 grid grid-cols-2 gap-2 border-t border-white/10 pt-3">
          <div>
            <p className="font-label-caps text-[7px] text-on-surface-variant/50">DEFLECTION</p>
            <p className="mt-0.5 font-label-caps text-[9px] text-tertiary">0.00 MM</p>
          </div>
          <div className="text-right">
            <p className="font-label-caps text-[7px] text-on-surface-variant/50">LOAD TEST</p>
            <p className="mt-0.5 font-label-caps text-[9px] text-on-surface">PASS / 04 LAYERS</p>
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-3 py-2.5">
        <img
          src="/imen-avatar.webp"
          alt=""
          width="192"
          height="192"
          className="h-8 w-8 shrink-0 rounded-lg border border-white/[0.15] object-cover"
        />
        <div className="min-w-0 flex-1">
          <p className="font-headline-sm text-[13px] leading-tight text-on-surface">Imen Bouchriha</p>
          <p className="mt-0.5 font-label-caps text-[7px] text-on-surface-variant/70">FULL-STACK ENGINEER · TUNIS</p>
        </div>
        <div className="text-right">
          <p className="font-label-caps text-[10px] text-tertiary">{time}</p>
          <p className="mt-0.5 font-label-caps text-[7px] text-on-surface-variant/50">GMT+1</p>
        </div>
      </div>
    </div>
  )
}
