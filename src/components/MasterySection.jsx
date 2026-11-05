import { useEffect, useRef } from 'react'

const skillCategories = [
  { icon: 'code', title: 'Languages', items: ['C++', 'Python', 'PHP', 'JavaScript (ES6)', 'HTML5', 'CSS3'] },
  { icon: 'layers', title: 'Frameworks & Web', items: ['Angular', 'Spring Boot', 'ReactJS', 'NestJS', '.NET', 'Bootstrap', 'Tailwind'] },
  { icon: 'smartphone', title: 'Mobile', items: ['Android', 'Xamarin', 'Flutter'] },
  { icon: 'cloud', title: 'DevOps', items: ['Docker', 'CI/CD', 'Git', 'Jenkins', 'Kubernetes'] },
  { icon: 'database', title: 'Databases', items: ['MySQL', 'PL/SQL', 'PostgreSQL', 'MongoDB', 'Neo4j (NoSQL)'] },
  { icon: 'sync', title: 'Methodologies', items: ['Scrum / Agile', 'Git / GitHub'] },
  { icon: 'build', title: 'Tools', items: ['Word', 'PowerPoint', 'Canva', 'LaTeX', 'Figma'] },
  { icon: 'dns', title: 'Systems', items: ['Windows', 'Linux'] },
]

export default function MasterySection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const cards = [...section.querySelectorAll('.skill-card')]

    if (typeof IntersectionObserver === 'undefined') {
      cards.forEach((card) => card.classList.add('visible'))
      return
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const delay = reduceMotion ? 0 : cards.indexOf(entry.target) * 70
          setTimeout(() => entry.target.classList.add('visible'), delay)
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.15 },
    )

    cards.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="reveal-on-scroll relative overflow-hidden bg-surface-container-lowest py-stack-lg"
    >
      <div className="mx-auto max-w-container-max px-margin-x">
        <div className="max-w-2xl">
          <span className="font-label-caps text-label-caps text-primary">TECH STACK</span>
          <h2 className="mb-6 mt-2 font-display text-display-mobile text-on-surface md:text-display">
            Mastery &amp; Expertise
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Crafting elegant solutions with a focus on modern architectures, high-performance
            systems, and intuitive user experiences.
          </p>
        </div>

        <div className="mt-stack-lg grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-gutter">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              tabIndex={0}
              className="skill-card glass-card shine-effect group relative flex min-h-[140px] cursor-default flex-col items-center justify-center gap-stack-sm overflow-hidden rounded-xl bg-surface-container/50 p-stack-md transition-all hover:border-primary/50 focus-visible:border-primary/50"
            >
              <span className="material-symbols-outlined text-5xl text-primary transition-all duration-500 group-hover:opacity-0 group-focus:opacity-0">
                {category.icon}
              </span>
              <span className="font-label-caps text-label-caps transition-all duration-500 group-hover:opacity-0 group-focus:opacity-0">
                {category.title}
              </span>
              <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center p-3 opacity-0 transition-all duration-500 group-hover:opacity-100 group-focus:opacity-100">
                <div className="flex flex-wrap justify-center gap-1.5">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-2 py-0.5 font-label-caps text-[10px] text-on-surface-variant"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
