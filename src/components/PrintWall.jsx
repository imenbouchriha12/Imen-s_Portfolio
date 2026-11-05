import { projects } from '../data/projects'
import useTunisTime from '../hooks/useTunisTime'

const noventra = projects.find((project) => project.id === 'noventra')
const smiters = projects.find((project) => project.id === 'smiters')

function PrintCard({ project, className = '', tilt = '' }) {
  return (
    <a
      href="#projects"
      aria-label={`Open the ${project.title} case file`}
      className={`group block ${className}`}
    >
      <div
        className={`glass-panel rounded-xl p-2 shadow-2xl shadow-black/50 transition-transform duration-500 ease-out group-hover:rotate-0 group-hover:scale-[1.02] ${tilt}`}
      >
        <div className="overflow-hidden rounded-lg border border-white/10 bg-surface-container">
          <img
            src={project.image}
            alt={`${project.title} — ${project.subtitle}`}
            width="1200"
            height="800"
            className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        </div>
        <div className="flex items-center justify-between gap-2 px-1 pb-1 pt-2 font-label-caps text-[8px]">
          <span className="truncate text-on-surface">{project.title}</span>
          <span className="shrink-0 text-on-surface-variant/60">{project.year}</span>
        </div>
      </div>
    </a>
  )
}

function PortraitCard({ time, className = '', tilt = '' }) {
  return (
    <a
      href="#about"
      aria-label="More about Imen Bouchriha"
      className={`group block ${className}`}
    >
      <div
        className={`glass-panel rounded-xl p-2 shadow-2xl shadow-black/50 transition-transform duration-500 ease-out group-hover:rotate-0 group-hover:scale-[1.02] ${tilt}`}
      >
        <div className="overflow-hidden rounded-lg border border-white/10 bg-surface-container">
          <img
            src="/imen.webp"
            alt="Imen Bouchriha"
            width="400"
            height="500"
            className="aspect-[4/5] w-full object-cover object-center grayscale transition duration-700 group-hover:grayscale-0"
          />
        </div>
        <div className="px-1 pb-1 pt-2">
          <div className="flex items-center justify-between gap-2 font-label-caps text-[8px]">
            <span className="text-on-surface">IMEN BOUCHRIHA</span>
            <span className="shrink-0 text-tertiary">{time}</span>
          </div>
          <p className="mt-0.5 font-label-caps text-[7px] text-on-surface-variant/60">
            FULL-STACK ENGINEER · TUNIS
          </p>
        </div>
      </div>
    </a>
  )
}

export default function PrintWall() {
  const time = useTunisTime()

  return (
    <>
      <div className="relative hidden h-[560px] xl:block">
        <div className="absolute left-0 top-0">
          <p className="font-label-caps text-[8px] text-on-surface-variant/60">SELECTED WORK</p>
          <p className="mt-1 font-display text-[26px] leading-none text-on-surface">2024—2026</p>
          <span className="mt-3 block h-px w-[252px] bg-white/10" aria-hidden="true" />
        </div>

        <PortraitCard
          time={time}
          className="absolute left-0 top-[118px] z-10 w-[252px] hover:z-40"
          tilt="rotate-[-3deg]"
        />

        <PrintCard
          project={noventra}
          className="absolute right-0 top-0 z-20 w-[300px] hover:z-40"
          tilt="rotate-[2.5deg]"
        />
        <PrintCard
          project={smiters}
          className="absolute right-[16px] top-[258px] z-30 w-[270px] hover:z-40"
          tilt="-rotate-2"
        />

        <a
          href="#projects"
          className="group absolute bottom-0 right-0 inline-flex items-center gap-2 font-label-caps text-[9px] text-primary"
        >
          Open all case files
          <span className="material-symbols-outlined text-[14px] transition-transform group-hover:translate-x-1">
            arrow_forward
          </span>
        </a>
      </div>

      <div className="xl:hidden">
        <div className="mb-3 flex items-center justify-between gap-4">
          <span className="font-label-caps text-[8px] text-on-surface-variant/60">SELECTED WORK / 2024—2026</span>
          <span className="font-label-caps text-[8px] text-on-surface-variant/40">SWIPE →</span>
        </div>
        <div className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2">
          <PortraitCard
            time={time}
            className="w-[218px] shrink-0 snap-start sm:w-[248px]"
            tilt="rotate-[-2deg]"
          />
          <PrintCard
            project={noventra}
            className="w-[228px] shrink-0 snap-start sm:w-[260px]"
            tilt="rotate-[1.5deg]"
          />
          <PrintCard
            project={smiters}
            className="w-[228px] shrink-0 snap-start sm:w-[260px]"
            tilt="-rotate-1"
          />
        </div>
      </div>
    </>
  )
}
