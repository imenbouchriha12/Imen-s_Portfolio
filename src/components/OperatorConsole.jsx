import useTunisTime from '../hooks/useTunisTime'

const layers = [
  { code: '01', name: 'Interface', tech: 'React · Angular · Tailwind', note: 'What people touch' },
  { code: '02', name: 'API', tech: 'NestJS · Spring Boot · .NET', note: 'Where logic lives' },
  { code: '03', name: 'Data', tech: 'PostgreSQL · SQL Server · MySQL', note: 'What must stay true' },
  { code: '04', name: 'Infra', tech: 'Docker · Kubernetes · Jenkins', note: 'What keeps it alive' },
]

export default function OperatorConsole() {
  const time = useTunisTime()

  return (
    <div className="corner-frame glass-panel relative rounded-2xl p-5 sm:p-6">
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.05] via-transparent to-transparent" aria-hidden="true" />

      <div className="relative flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 shrink-0 overflow-hidden rounded-xl border border-white/[0.15] bg-surface-container-high">
            <img src="/imen-avatar.webp" alt="" width="192" height="192" className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="font-headline-sm text-[15px] leading-tight text-on-surface">Imen Bouchriha</p>
            <p className="mt-1 font-label-caps text-[8px] text-on-surface-variant">FULL-STACK ENGINEER</p>
          </div>
        </div>
        <div className="text-right">
          <p className="font-label-caps text-[11px] text-tertiary">{time}</p>
          <p className="mt-1 font-label-caps text-[8px] text-on-surface-variant/60">TUNIS · GMT+1</p>
        </div>
      </div>

      <div className="relative my-5 h-px bg-white/10" />

      <div className="relative mb-3 flex items-center justify-between">
        <span className="font-label-caps text-[8px] text-on-surface-variant">SYSTEM_TOPOLOGY</span>
        <span className="flex items-center gap-2 font-label-caps text-[8px] text-tertiary">
          <span className="status-dot" />
          ACTIVE
        </span>
      </div>

      <ol className="relative" aria-label="System topology">
        {layers.map((layer, index) => (
          <li key={layer.code}>
            <div className="group -mx-2 flex items-center gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-white/[0.04]">
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
            {index < layers.length - 1 && (
              <div className="stack-link" aria-hidden="true">
                <span style={{ animationDelay: `${index * 0.55}s` }} />
              </div>
            )}
          </li>
        ))}
      </ol>

      <div className="relative mt-5 flex items-center justify-between border-t border-white/10 pt-4 font-label-caps text-[8px] text-on-surface-variant/60">
        <span>CLIENT → API → DATA → INFRA</span>
        <span>04 LAYERS</span>
      </div>
    </div>
  )
}
