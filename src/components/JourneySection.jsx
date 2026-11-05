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

function TimelineCard({ period, title, place, summary, tags, latest }) {
  return (
    <li className="relative pl-8 pb-10 last:pb-0">
      <span className="absolute left-0 top-1 w-3.5 h-3.5 rounded-full bg-gradient-to-r from-primary to-secondary shadow-[0_0_18px_rgba(251,171,255,0.6)]"></span>
      <span className="absolute left-[6px] top-6 bottom-0 w-px bg-gradient-to-b from-white/20 to-transparent"></span>
      <div className="glass-card rounded-xl p-5 hover:border-primary/40 transition-all">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="font-label-caps text-[10px] text-secondary">{period}</span>
          {latest && (
            <span className="px-2 py-0.5 rounded-full bg-primary/10 border border-primary/30 text-primary font-label-caps text-[9px]">
              LATEST
            </span>
          )}
        </div>
        <h4 className="font-headline-sm text-[17px] text-on-surface">{title}</h4>
        <p className="font-body-md text-sm text-primary/80 mb-2">{place}</p>
        <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">{summary}</p>
        {tags && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-full border border-white/10 bg-white/5 font-label-caps text-[9px] text-on-surface-variant"
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

export default function JourneySection() {
  return (
    <section className="relative py-stack-lg bg-surface-container-lowest overflow-hidden reveal-on-scroll" id="journey">
      <div className="absolute top-1/3 -right-32 w-[420px] h-[420px] bg-primary/10 blur-[140px] rounded-full pointer-events-none"></div>
      <div className="max-w-container-max mx-auto px-margin-x">
        <header className="mb-12">
          <span className="text-primary font-label-caps text-label-caps">THE ROAD SO FAR</span>
          <h2 className="font-display text-display-mobile md:text-display mt-2 mb-4">
            Experience &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Education
            </span>
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Three internships, two degrees and a lot of shipped code — the path that shaped how I
            build software today.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-primary">work</span>
              Professional Experience
            </h3>
            <ul>
              {experience.map((item) => (
                <TimelineCard key={item.title + item.period} {...item} />
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-secondary">school</span>
              Education
            </h3>
            <ul>
              {education.map((item, index) => (
                <TimelineCard key={item.title} {...item} latest={index === 0} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
