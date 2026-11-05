import { useMemo, useState } from 'react'
import { projects, projectFilters } from '../data/projects'
import ProjectModal from './ProjectModal'

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
    <section className="relative py-stack-lg bg-background overflow-hidden reveal-on-scroll" id="projects">
      <div className="absolute top-40 right-0 w-[420px] h-[420px] bg-secondary/10 blur-[140px] rounded-full -z-0 pointer-events-none"></div>
      <div className="max-w-container-max mx-auto px-margin-x relative">
        <header className="mb-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <span className="text-secondary font-label-caps text-label-caps">SELECTED WORK</span>
            <h2 className="font-display text-display-mobile md:text-display text-on-surface mt-2 mb-4">
              Featured{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Projects
              </span>
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              Real products, built end to end — from multi-tenant architectures to AI-powered
              automation and banking systems.
            </p>
          </div>
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
            {projectFilters.map((item) => (
              <button
                key={item}
                role="tab"
                aria-selected={filter === item}
                onClick={() => setFilter(item)}
                className={`px-5 py-2.5 rounded-full font-label-caps text-label-caps border transition-all ${
                  filter === item
                    ? 'bg-gradient-to-r from-primary to-secondary text-on-primary-container border-transparent shadow-lg shadow-primary/20'
                    : 'border-white/10 bg-white/5 text-on-surface-variant hover:text-on-surface hover:border-primary/40'
                }`}
              >
                {item}
                <span className="ml-2 opacity-60">
                  {item === 'All' ? projects.length : projects.filter((p) => p.categories.includes(item)).length}
                </span>
              </button>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {visibleProjects.map((project, index) => (
            <article
              key={`${filter}-${project.id}`}
              className="project-card project-enter group relative"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <div className="card-inner glass-card glass-glow shine-effect relative h-full rounded-2xl overflow-hidden flex flex-col">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} — ${project.subtitle}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060e20] via-[#060e20]/30 to-transparent"></div>
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {project.categories.map((category) => (
                      <span
                        key={category}
                        className="px-3 py-1 rounded-full bg-background/60 backdrop-blur-md border border-primary/30 text-primary font-label-caps text-[10px]"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-background/60 backdrop-blur-md border border-white/15 text-on-surface-variant font-label-caps text-[10px]">
                    {project.year}
                  </span>
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                    <div>
                      <p className="font-label-caps text-[10px] text-secondary mb-1">{project.role}</p>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface">{project.title}</h3>
                    </div>
                    <div className="w-11 h-11 shrink-0 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-on-surface opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <span className="material-symbols-outlined text-[20px]">arrow_outward</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <p className="font-body-md text-body-md text-primary/80 mb-3">{project.subtitle}</p>
                  <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3 mb-5">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full border border-white/10 bg-white/5 font-label-caps text-[10px] text-on-surface-variant"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-1 font-label-caps text-[10px] text-primary/70">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>
                  <div className="mt-auto flex items-center gap-2 font-label-caps text-label-caps text-primary">
                    View case study
                    <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setActiveProject(project)}
                  className="absolute inset-0 z-10 rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                  aria-label={`Open case study for ${project.title}`}
                />
              </div>
            </article>
          ))}

          <a
            href="https://github.com/imenbouchriha12"
            target="_blank"
            rel="noopener noreferrer"
            className="project-enter group rounded-2xl border border-dashed border-white/15 bg-white/[0.02] min-h-[280px] flex flex-col items-center justify-center text-center p-8 hover:border-primary/50 hover:bg-primary/[0.04] transition-all"
            style={{ animationDelay: `${visibleProjects.length * 70}ms` }}
          >
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-primary/50 transition-all">
              <svg className="w-7 h-7 text-on-surface" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </div>
            <p className="font-headline-sm text-headline-sm text-on-surface mb-2">More on GitHub</p>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xs mb-4">
              Experiments, coursework and side projects — explore the rest of my repositories.
            </p>
            <span className="font-label-caps text-label-caps text-primary flex items-center gap-2">
              github.com/imenbouchriha12
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </span>
          </a>
        </div>
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  )
}
