import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

export default function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null)
  const panelRef = useRef(null)

  useEffect(() => {
    if (!project) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'Tab') {
        const focusables = panelRef.current?.querySelectorAll(
          'a[href], button:not([disabled])'
        )
        if (!focusables?.length) return
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeyDown)
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [project, onClose])

  if (!project) return null

  return createPortal(
    <div
      className="modal-backdrop fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      aria-describedby="project-modal-description"
      onClick={onClose}
    >
      <div
        ref={panelRef}
        className="modal-panel corner-frame relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl border border-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close case file"
          className="absolute right-4 top-4 z-20 flex items-center gap-2 rounded-full border border-white/[0.15] bg-background/70 px-3 py-2 text-on-surface backdrop-blur-md transition-colors hover:border-primary hover:bg-primary hover:text-on-primary-container"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
          <span className="hidden font-label-caps text-[8px] sm:inline">ESC</span>
        </button>

        <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
          <div className="relative h-60 overflow-hidden sm:h-80 lg:h-auto lg:min-h-[560px]">
            <img
              src={project.image}
              alt={`${project.title} — ${project.subtitle}`}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-background/70" />

            <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 font-label-caps text-[8px] text-on-surface">
              <span>CASE_FILE / {project.year}</span>
              <span className="flex items-center gap-2 text-tertiary">
                <span className="status-dot" />
                SHIPPED
              </span>
            </div>

            <div className="absolute inset-x-5 bottom-5 flex flex-wrap gap-2">
              {project.categories.map((category) => (
                <span
                  key={category}
                  className="rounded-full border border-primary/30 bg-background/70 px-3 py-1 font-label-caps text-[8px] text-primary backdrop-blur-md"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <p className="font-label-caps text-[9px] text-tertiary">
              {project.year} · {project.role}
            </p>
            <h3 id="project-modal-title" className="mt-3 font-display text-[42px] leading-none text-on-surface">
              {project.title}
            </h3>
            <p className="mt-2 font-body-md text-[15px] text-primary/80">{project.subtitle}</p>
            <p id="project-modal-description" className="mt-6 font-body-md text-[14px] leading-relaxed text-on-surface-variant">
              {project.description}
            </p>

            <div className="mt-8">
              <div className="mb-4 flex items-center gap-3">
                <h4 className="font-label-caps text-[9px] text-primary">WHAT I BUILT</h4>
                <span className="h-px flex-1 bg-white/10" />
                <span className="font-label-caps text-[8px] text-on-surface-variant/50">
                  {String(project.details.length).padStart(2, '0')}
                </span>
              </div>
              <ul className="space-y-3">
                {project.details.map((detail) => (
                  <li key={detail} className="flex gap-3 font-body-md text-[14px] leading-relaxed text-on-surface-variant">
                    <span className="mt-[8px] h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <div className="mb-4 flex items-center gap-3">
                <h4 className="font-label-caps text-[9px] text-primary">TECH_STACK</h4>
                <span className="h-px flex-1 bg-white/10" />
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-label-caps text-[9px] text-on-surface-variant"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 font-label-caps text-[9px] font-bold text-on-primary-container transition-transform hover:scale-[1.03]"
              >
                Open repository
                <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}
