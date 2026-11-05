import { useRef } from 'react'

export default function ProjectCard({ project, index, featured = false, onOpen }) {
  const cardRef = useRef(null)
  const number = String(index + 1).padStart(2, '0')

  const handleMove = (event) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${event.clientX - rect.left}px`)
    el.style.setProperty('--my', `${event.clientY - rect.top}px`)
  }

  return (
    <article
      className={`project-card project-enter group relative ${featured ? 'md:col-span-2' : ''}`}
      style={{ animationDelay: `${index * 70}ms` }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMove}
        className={`card-inner corner-frame relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface-container-low group-focus-within:border-primary/50 hover:border-primary/30 ${
          featured ? 'lg:flex-row' : ''
        }`}
      >
        <span className="spotlight-glow" aria-hidden="true" />

        <div
          className={`relative overflow-hidden ${
            featured
              ? 'aspect-[16/10] lg:aspect-auto lg:min-h-[440px] lg:w-[54%]'
              : 'aspect-[16/10]'
          }`}
        >
          <img
            src={project.image}
            alt={`${project.title} — ${project.subtitle}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent to-background/20" />
          <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
            <span className="flex items-center gap-2 font-label-caps text-[8px] text-on-surface">
              <span className="status-dot !bg-primary" />
              CASE_{number}
            </span>
            <span className="font-label-caps text-[8px] text-on-surface/70">{project.year}</span>
          </div>
          {featured && (
            <span className="absolute bottom-4 left-4 rounded-full border border-primary/30 bg-background/70 px-3 py-1 font-label-caps text-[8px] text-primary backdrop-blur-md">
              FEATURED
            </span>
          )}
        </div>

        <div className={`flex flex-1 flex-col p-6 sm:p-7 ${featured ? 'lg:p-9' : ''}`}>
          <div className="flex flex-wrap items-center gap-2 font-label-caps text-[8px] text-tertiary">
            <span>SHIPPED</span>
            <span className="text-on-surface-variant/40">/</span>
            <span className="text-on-surface-variant/70">{project.categories.join(' · ')}</span>
          </div>

          <p className="mt-4 font-label-caps text-[9px] text-on-surface-variant">{project.role}</p>
          <h3
            className={`mt-2 font-display leading-none text-on-surface transition-colors group-hover:text-primary ${
              featured ? 'text-[36px] sm:text-[46px]' : 'text-[28px]'
            }`}
          >
            {project.title}
          </h3>
          <p className="mt-2 font-body-md text-[15px] text-primary/80">{project.subtitle}</p>
          <p className="mt-3 line-clamp-3 font-body-md text-[14px] leading-relaxed text-on-surface-variant">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 font-label-caps text-[9px] text-on-surface-variant"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-5">
            <span className="font-label-caps text-[8px] text-on-surface-variant/50">CASE_{number}</span>
            <span className="inline-flex items-center gap-2 font-label-caps text-[9px] text-primary">
              Open case file
              <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={onOpen}
          className="absolute inset-0 z-10 rounded-2xl"
          aria-label={`Open case study for ${project.title}`}
        />
      </div>
    </article>
  )
}
