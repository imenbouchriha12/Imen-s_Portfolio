import { useEffect } from 'react'

const skillTags = ['React', 'Node.js', 'Python', 'AWS', 'TypeScript', 'GraphQL', 'TailwindCSS', 'Docker']

export default function AboutPage() {
  useEffect(() => {
    const skillTagsEls = document.querySelectorAll('.skill-tag')
    const observerOptions = { threshold: 0.2 }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          skillTagsEls.forEach((tag, index) => {
            setTimeout(() => { tag.classList.add('visible') }, index * 100)
          })
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)
    const skillContainer = document.querySelector('#skill-container')
    if (skillContainer) observer.observe(skillContainer)

    const glassCard = document.querySelector('.glass-panel')
    if (glassCard) {
      const onMove = (e) => {
        const rect = glassCard.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        const rotateX = (y - centerY) / 20
        const rotateY = (centerX - x) / 20
        glassCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
      }
      const onLeave = () => {
        glassCard.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`
      }
      glassCard.addEventListener('mousemove', onMove)
      glassCard.addEventListener('mouseleave', onLeave)
    }

    return () => {
      if (glassCard) {
        glassCard.removeEventListener('mousemove', onMove)
        glassCard.removeEventListener('mouseleave', onLeave)
      }
    }
  }, [])

  return (
    <main className="pt-32 pb-stack-lg relative min-h-screen">
      <div className="absolute top-20 -left-20 w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/10 blur-[120px] rounded-full -z-10"></div>
      <section className="max-w-container-max mx-auto px-margin-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="glass-panel p-8 rounded-3xl shine-effect shadow-2xl relative">
              <div className="aspect-square rounded-2xl mb-8 overflow-hidden border border-white/10 bg-surface-container-high">
                <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="/imen.png" alt="Imen Bouchriha" />
              </div>
              <div className="space-y-4">
                <h3 className="font-headline-sm text-headline-sm text-primary">Imen Bouchriha</h3>
                <p className="font-label-caps text-label-caps text-on-surface/50">SOFTWARE ENGINEER &bull; TUNISIA</p>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  As a dedicated software developer, I specialize in building full-stack web applications that are both visually engaging and technically solid. My work spans the entire development lifecycle — from designing responsive frontend interfaces to architecting scalable backend services.
                </p>
                <div className="flex gap-4 pt-4">
                  <a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-all text-on-surface" href="#">
                    <span className="material-symbols-outlined">terminal</span>
                  </a>
                  <a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-all text-on-surface" href="#">
                    <span className="material-symbols-outlined">link</span>
                  </a>
                  <a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-all text-on-surface" href="#">
                    <span className="material-symbols-outlined">mail</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-12">
            <div className="space-y-6">
              <h1 className="font-display text-display-mobile md:text-display text-transparent bg-clip-text bg-gradient-to-br from-white to-on-surface/40">
                Crafting the future of the web.
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </div>
            <div className="space-y-6">
              <h2 className="font-headline-lg text-headline-lg text-on-surface flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">auto_awesome</span>
                About Me
              </h2>
              <div className="font-body-lg text-body-lg text-on-surface-variant space-y-4 max-w-2xl">
                <p>
                  As a dedicated software developer, I specialize in building full-stack web applications that are both visually engaging and technically solid. My work spans the entire development lifecycle — from designing responsive frontend interfaces to architecting scalable backend services.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="font-headline-lg text-headline-lg text-on-surface flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">architecture</span>
                Technical Arsenal
              </h2>
              <div className="flex flex-wrap gap-4" id="skill-container">
                {skillTags.map((skill) => (
                  <div key={skill} className="skill-tag px-6 py-3 rounded-full border border-white/10 bg-white/5 font-label-caps text-label-caps text-secondary hover:bg-secondary/20 hover:border-secondary transition-all cursor-default">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
