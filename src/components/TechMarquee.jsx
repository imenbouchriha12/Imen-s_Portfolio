import { techStack } from '../data/projects'

function MarqueeRow({ hidden = false }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={hidden}>
      {techStack.map((tech) => (
        <span key={tech} className="flex items-center">
          <span className="font-headline-sm text-[18px] sm:text-[22px] text-on-surface-variant/70 hover:text-primary transition-colors whitespace-nowrap">
            {tech}
          </span>
          <span className="mx-6 sm:mx-8 w-1.5 h-1.5 rounded-full bg-primary/60"></span>
        </span>
      ))}
    </div>
  )
}

export default function TechMarquee() {
  return (
    <section
      className="relative py-8 border-y border-white/5 bg-surface-container-lowest/60 overflow-hidden marquee-mask"
      aria-label="Technologies I work with"
    >
      <div className="flex w-max animate-marquee">
        <MarqueeRow />
        <MarqueeRow hidden />
      </div>
    </section>
  )
}
