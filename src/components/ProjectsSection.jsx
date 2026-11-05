import { useMemo, useState } from 'react'
import { projects, projectFilters } from '../data/projects'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'

const countFor = (filter) =>
  filter === 'All' ? projects.length : projects.filter((project) => project.categories.includes(filter)).length

export default function ProjectsSection() {
  const [filter, setFilter] = useState('All')
  const [activeProject, setActiveProject] = useState(null)

  const visibleProjects = useMemo(
    () =>
      filter === 'All'
        ? projects
        : projects.filter((project) => project.categories.includes(filter)),
    [filter]
  )

  return (
    <section id="projects" className="reveal-on-scroll relative overflow-hidden bg-background py-stack-lg">
      <div className="pointer-events-none absolute right-0 top-40 h-[420px] w-[420px] rounded-full bg-secondary/10 blur-[150px]" aria-hidden="true" />
      <div className="relative mx-auto max-w-container-max px-margin-x">
        <header className="mb-10">
          <span className="eyebrow">Layer 04 / Output</span>
          <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-display text-display-mobile md:text-display text-on-surface">
                Selected <span className="font-serif-accent text-gradient">systems</span>.
              </h2>
              <p className="mt-5 font-body-lg text-body-lg text-on-surface-variant">
                Five real products, built end to end — from multi-tenant architectures to AI-powered
                automation and banking systems.
              </p>
            </div>

            <div
              className="flex flex-wrap gap-x-6 gap-y-2 border-b border-white/10"
              role="group"
              aria-label="Filter projects"
            >
              {projectFilters.map((item) => {
                const active = filter === item
                return (
                  <button
                    key={item}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setFilter(item)}
                    className={`relative pb-2.5 font-label-caps text-[9px] transition-colors ${
                      active ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'
                    }`}
                  >
                    {item}
                    <span className="ml-1.5 text-[8px] opacity-60">{countFor(item)}</span>
                    <span
                      className={`absolute inset-x-0 -bottom-px h-px ${
                        active ? 'bg-gradient-to-r from-primary to-secondary' : 'bg-transparent'
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                )
              })}
            </div>
          </div>
        </header>

        <p className="sr-only" role="status" aria-live="polite">
          {visibleProjects.length} projects shown
        </p>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={`${filter}-${project.id}`}
              project={project}
              index={index}
              featured={index === 0}
              onOpen={() => setActiveProject(project)}
            />
          ))}

          <a
            href="https://github.com/imenbouchriha12"
            target="_blank"
            rel="noopener noreferrer"
            className="corner-frame group relative flex flex-col items-start justify-between gap-6 rounded-2xl border border-dashed border-white/[0.15] bg-white/[0.02] p-6 transition-colors hover:border-primary/40 hover:bg-primary/[0.03] sm:flex-row sm:items-center md:col-span-2"
          >
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-on-surface transition-colors group-hover:border-primary/40 group-hover:text-primary">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </span>
              <div>
                <p className="font-label-caps text-[8px] text-on-surface-variant/60">MORE ON GITHUB</p>
                <p className="mt-1 font-headline-sm text-[20px] text-on-surface">
                  Experiments, coursework and side projects.
                </p>
              </div>
            </div>
            <span className="inline-flex items-center gap-2 font-label-caps text-[9px] text-primary">
              github.com/imenbouchriha12
              <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">
                arrow_outward
              </span>
            </span>
          </a>
        </div>
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  )
}
