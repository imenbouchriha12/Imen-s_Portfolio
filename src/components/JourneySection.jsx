const experience = [
  {
    period: 'Jan — Jun 2024',
    title: 'Full-Stack Developer Intern',
    place: 'CodeBox · Tunis',
    summary:
      'Designed and built Smiters, an AI platform that automates customer email replies with OpenAI, reducing response time and improving service quality.',
    tags: ['Angular', 'Spring Boot', 'OpenAI'],
  },
  {
    period: 'Jan — Feb 2023',
    title: 'Full-Stack Developer Intern',
    place: 'Tuntale Interactive · Tunis',
    summary:
      'Contributed to the full development cycle of a movies and series management website, including an advanced multi-criteria search system.',
    tags: ['Web', 'Search UX'],
  },
  {
    period: 'Jan — Feb 2022',
    title: 'IT Intern',
    place: 'Banque UIB · Ben Arous',
    summary:
      'Explored the information systems and internal processes of a major banking institution, with a focus on service management and security.',
    tags: ['Banking', 'Security'],
  },
]

const education = [
  {
    period: '2025 — Present',
    title: 'Engineering Degree in Computer Science',
    place: 'ESPRIT · Tunis',
    summary: 'TWIN speciality — software engineering, data and information systems.',
  },
  {
    period: '2024 — 2025',
    title: 'Professional Master’s in Decision IS',
    place: 'ISET Zaghouan',
    summary: 'Information systems engineering with a focus on decision-support systems.',
  },
  {
    period: '2021 — 2024',
    title: 'Bachelor’s in Information Technology',
    place: 'ISET Zaghouan',
    summary: 'Foundations of software development, databases and networks.',
  },
]

function TimelineCard({ period, title, place, summary, tags, latest, index, last }) {
  return (
    <li
      className="reveal-child relative pb-8 pl-7 last:pb-0"
      style={{ transitionDelay: `${120 + index * 90}ms` }}
    >
      <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-primary ring-4 ring-primary/10" aria-hidden="true" />
      {!last && (
        <span className="absolute bottom-0 left-[3.5px] top-5 w-px bg-gradient-to-b from-primary/40 via-white/[0.12] to-transparent" aria-hidden="true" />
      )}

      <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-primary/30 hover:bg-white/[0.04]">
        <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
          <span className="font-label-caps text-[9px] text-tertiary">{period}</span>
          {latest && (
            <span className="rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 font-label-caps text-[8px] text-primary">
              CURRENT
            </span>
          )}
        </div>
        <h4 className="font-headline-sm text-[18px] leading-snug text-on-surface">{title}</h4>
        <p className="mb-2 mt-1 font-label-caps text-[9px] text-primary/80">{place}</p>
        <p className="font-body-md text-[14px] leading-relaxed text-on-surface-variant">{summary}</p>
        {tags && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 font-label-caps text-[9px] text-on-surface-variant"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </li>
  )
}

function ColumnLabel({ children, count }) {
  return (
    <div className="mb-7 flex items-center gap-3">
      <h3 className="font-label-caps text-[10px] text-on-surface">{children}</h3>
      <span className="h-px flex-1 bg-white/10" />
      <span className="font-label-caps text-[8px] text-on-surface-variant/50">{count}</span>
    </div>
  )
}

export default function JourneySection() {
  return (
    <section id="journey" className="reveal-on-scroll relative overflow-hidden bg-surface-container-lowest py-stack-lg">
      <div className="pointer-events-none absolute -right-32 top-1/3 h-[420px] w-[420px] rounded-full bg-primary/10 blur-[150px]" aria-hidden="true" />
      <div className="relative mx-auto max-w-container-max px-margin-x">
        <header className="mb-12 max-w-3xl">
          <span className="eyebrow">Layer 03 / Trajectory</span>
          <h2 className="mt-5 font-display text-display-mobile md:text-display text-on-surface">
            Every role added a <span className="font-serif-accent text-gradient">layer</span>.
          </h2>
          <p className="mt-5 max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
            Three internships, two degrees and a lot of shipped code — the path that shaped how I
            build software today.
          </p>
        </header>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <ColumnLabel count="03 ROLES">[ PROFESSIONAL ]</ColumnLabel>
            <ul>
              {experience.map((item, index) => (
                <TimelineCard
                  key={item.title + item.period}
                  {...item}
                  index={index}
                  last={index === experience.length - 1}
                />
              ))}
            </ul>
          </div>
          <div>
            <ColumnLabel count="03 DEGREES">[ EDUCATION ]</ColumnLabel>
            <ul>
              {education.map((item, index) => (
                <TimelineCard
                  key={item.title}
                  {...item}
                  latest={index === 0}
                  index={index}
                  last={index === education.length - 1}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
