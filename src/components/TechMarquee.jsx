import { techStack } from '../data/projects'

function MarqueeRow({ hidden = false }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={hidden}>
      {techStack.map((tech, index) => (
        <span key={tech} className="flex items-center">
          <span className="mr-2.5 font-label-caps text-[9px] text-primary/50">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="whitespace-nowrap font-headline-sm text-[16px] text-on-surface-variant/80 transition-colors hover:text-primary sm:text-[18px]">
            {tech}
          </span>
          <span className="mx-6 h-px w-6 bg-white/[0.15] sm:mx-8" aria-hidden="true" />
        </span>
      ))}
    </div>
  )
}

export default function TechMarquee() {
  return (
    <section
      className="marquee-mask relative overflow-hidden border-y border-white/10 bg-surface-container-lowest/60 py-5"
      aria-label="Technologies I work with"
    >
      <div className="flex w-max animate-marquee">
        <MarqueeRow />
        <MarqueeRow hidden />
      </div>
    </section>
  )
}
