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
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={onClose}
    >
      <div
        ref={panelRef}
        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl glass-panel modal-panel shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close project details"
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-background/70 backdrop-blur-md border border-white/15 flex items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary-container hover:border-primary transition-all"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="grid lg:grid-cols-2">
          <div className="relative h-56 sm:h-72 lg:h-auto lg:min-h-[520px] overflow-hidden">
            <img
              src={project.image}
              alt={`${project.title} — ${project.subtitle}`}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-background/80" />
            <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
              {project.categories.map((c) => (
                <span key={c} className="px-3 py-1 rounded-full bg-background/70 backdrop-blur-md border border-primary/30 text-primary font-label-caps text-[10px]">
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <p className="font-label-caps text-label-caps text-secondary mb-3">
              {project.year} · {project.role}
            </p>
            <h3 id="project-modal-title" className="font-headline-lg text-headline-lg text-on-surface mb-1">
              {project.title}
            </h3>
            <p className="font-body-md text-body-md text-primary/80 mb-6">{project.subtitle}</p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-8">
              {project.description}
            </p>

            <h4 className="font-label-caps text-label-caps text-primary mb-4">What I built</h4>
            <ul className="space-y-3 mb-8">
              {project.details.map((detail) => (
                <li key={detail} className="flex gap-3 font-body-md text-body-md text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">check_circle</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>

            <h4 className="font-label-caps text-label-caps text-primary mb-4">Tech stack</h4>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 font-label-caps text-[10px] text-on-surface-variant">
                  {tag}
                </span>
              ))}
            </div>

            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-on-primary-container font-label-caps text-label-caps font-bold hover:scale-105 transition-transform"
              >
                View on GitHub
                <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}
