import { useEffect, useRef, useState } from 'react'
import ProjectsSection from '../components/ProjectsSection'
import JourneySection from '../components/JourneySection'
import TechMarquee from '../components/TechMarquee'
import { stats } from '../data/projects'

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

const workflow = [
  { code: '01', title: 'Discover', text: 'Map the workflow, the users and the edge cases before touching the schema.' },
  { code: '02', title: 'Architect', text: 'Draw the data model and API boundaries so the system stays coherent as it grows.' },
  { code: '03', title: 'Build', text: 'Ship thin slices from interface to database, tested as they go.' },
  { code: '04', title: 'Operate', text: 'Deploy with Docker, watch the metrics, and tighten what they expose.' },
]

export default function LandingPage() {
  const canvasRef = useRef(null)
  const typingRef = useRef(null)
  const [formState, setFormState] = useState('idle')

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    function syncSize() {
      const w = canvas.clientWidth || 1280
      const h = canvas.clientHeight || 720
      if (canvas.width !== w || canvas.height !== h) { canvas.width = w; canvas.height = h }
    }

    if (typeof ResizeObserver !== 'undefined') { new ResizeObserver(syncSize).observe(canvas) }
    syncSize()

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    if (!gl) return

    const vs = `attribute vec2 a_position; varying vec2 v_texCoord; void main() { v_texCoord = a_position * 0.5 + 0.5; gl_Position = vec4(a_position, 0.0, 1.0); }`
    const fs = `precision highp float; uniform float u_time; uniform vec2 u_resolution; void main() { vec2 uv = gl_FragCoord.xy / u_resolution.xy; float time = u_time * 0.2; vec3 color1 = vec3(0.537, 0.275, 0.937); vec3 color2 = vec3(0.851, 0.275, 0.937); vec3 color3 = vec3(0.043, 0.075, 0.150); float noise = sin(uv.x * 3.0 + time) * cos(uv.y * 2.0 - time); noise += sin(uv.y * 4.0 + time * 1.5) * cos(uv.x * 3.0 - time * 0.5); vec3 finalColor = mix(color3, color1, clamp(noise + uv.y * 0.5, 0.0, 1.0)); finalColor = mix(finalColor, color2, clamp(sin(uv.x * 2.0 + time) * 0.5 + 0.5, 0.0, 1.0) * 0.3); gl_FragColor = vec4(finalColor, 1.0); }`

    function cs(type, src) { const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); return s }
    const prog = gl.createProgram()
    gl.attachShader(prog, cs(gl.VERTEX_SHADER, vs))
    gl.attachShader(prog, cs(gl.FRAGMENT_SHADER, fs))
    gl.linkProgram(prog)
    gl.useProgram(prog)

    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW)

    const pos = gl.getAttribLocation(prog, 'a_position')
    gl.enableVertexAttribArray(pos)
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0)

    const uTime = gl.getUniformLocation(prog, 'u_time')
    const uRes = gl.getUniformLocation(prog, 'u_resolution')

    let animId
    function render(t) {
      if (typeof ResizeObserver === 'undefined') syncSize()
      gl.viewport(0, 0, canvas.width, canvas.height)
      if (uTime) gl.uniform1f(uTime, t * 0.001)
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
      animId = requestAnimationFrame(render)
    }
    animId = requestAnimationFrame(render)

    return () => { cancelAnimationFrame(animId) }
  }, [])

  useEffect(() => {
    const text = "Software Engineer"
    const container = typingRef.current
    if (!container) return
    let index = 0
    let timeoutId

    function type() {
      if (index < text.length) {
        container.textContent += text.charAt(index)
        index++
        timeoutId = setTimeout(type, 100)
      } else {
        container.classList.remove('typing-cursor')
      }
    }

    const loadTimeout = setTimeout(() => {
      container.textContent = ''
      container.classList.add('typing-cursor')
      type()
    }, 800)

    return () => {
      clearTimeout(loadTimeout)
      clearTimeout(timeoutId)
    }
  }, [])

  useEffect(() => {
    const revealCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')

          if (entry.target.id === 'about') {
            const glassCard = entry.target.querySelector('.glass-panel')
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
          }

          if (entry.target.id === 'projects') {
            entry.target.querySelectorAll('.reveal-item').forEach((item, i) => {
              setTimeout(() => {
                item.classList.add('animate-fade-in-up')
              }, i * 200)
            })
          }

          if (entry.target.id === 'skills') {
            entry.target.querySelectorAll('.skill-card').forEach((card, i) => {
              setTimeout(() => card.classList.add('visible'), i * 100)
            })
          }
        }
      })
    }

    const revealObserver = new IntersectionObserver(revealCallback, { threshold: 0.15 })

    document.querySelectorAll('.reveal-on-scroll').forEach(el => revealObserver.observe(el))

    return () => revealObserver.disconnect()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormState('sending')
    const data = new FormData(e.target)
    data.append('_cc', 'imen.bouchriha@esprit.tn')
    data.append('_captcha', 'false')
    try {
      const res = await fetch('https://formsubmit.co/ajax/imenbouchriha5@gmail.com', { method: 'POST', body: data })
      if (res.ok) {
        setFormState('sent')
        e.target.reset()
      } else {
        setFormState('error')
      }
    } catch {
      setFormState('error')
    }
    setTimeout(() => setFormState('idle'), 4000)
  }

  return (
    <main className="relative min-h-screen" id="main">
      {/* Hero Section */}
      <section className="relative z-10 w-full h-screen overflow-hidden flex items-center justify-center pt-20" id="home">
        <div className="absolute inset-0 z-0 opacity-40">
          <canvas ref={canvasRef} id="shader-canvas-ANIMATION_3" style={{ display: 'block', width: '100%', height: '100%' }} />
        </div>
        <div className="hero-vignette pointer-events-none absolute inset-0 z-0" aria-hidden="true" />

        <div className="relative z-20 max-w-container-max mx-auto px-margin-x flex flex-col items-center justify-center text-center">
          <div className="animate-fade-in-up mb-stack-md" style={{ animationDelay: '0.1s' }}>
            <div className="relative group">
              <div className="hero-ring hero-ring--dashed absolute -inset-6" aria-hidden="true" />
              <div className="hero-ring absolute -inset-1.5" aria-hidden="true" />
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-25 group-hover:opacity-60 transition duration-1000"></div>
              <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white/10 glass-card">
                <img alt="Imen Bouchriha Portfolio Avatar" className="w-full h-full object-cover" src="/imen.png" />
              </div>
            </div>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/25 px-4 py-2 backdrop-blur-md">
              <span className="status-dot" />
              <span className="font-label-caps text-[8px] text-on-surface/75">ENGINEERING @ ESPRIT · TUNIS</span>
            </div>
          </div>
          <div className="max-w-3xl animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h1 className="font-display text-display-mobile md:text-display mb-4 text-on-surface">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary drop-shadow-[0_0_28px_rgba(251,171,255,0.25)]">Imen Bouchriha</span>
            </h1>
            <h2 ref={typingRef} className="font-headline-sm text-headline-sm text-primary/80 mb-6 min-h-[1.4em] typing-cursor" id="typing-subtext"></h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto mb-10">
              Building digital experiences with precision, playfulness, and high-performance code.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary overflow-hidden hover:scale-105 transition-transform duration-300 shadow-xl shadow-primary/10" href="#projects">
                <span className="relative z-10 flex items-center gap-2 font-label-caps text-label-caps text-on-primary-container font-bold">
                  View Projects
                  <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-y-0.5">south</span>
                </span>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </a>
              <a className="group glass-card glass-glow px-8 py-4 rounded-full font-label-caps text-label-caps text-on-surface hover:text-primary transition-all duration-300 font-bold border border-white/10 flex items-center gap-2" href="#contact">
                Contact Me
                <span className="material-symbols-outlined text-[16px] transition-transform group-hover:-translate-y-0.5">north_east</span>
              </a>
            </div>
          </div>
        </div>

        <a
          className="hero-scroll-cue absolute bottom-8 left-1/2 z-20 -translate-x-1/2 animate-bounce opacity-50 hover:opacity-100 transition-opacity"
          href="#about"
          aria-label="Scroll to about section"
        >
          <span className="material-symbols-outlined text-4xl text-primary">expand_more</span>
        </a>
      </section>

      {/* Key numbers */}
      <section className="relative z-10 border-y border-white/5 bg-surface-container-lowest/70" aria-label="Key numbers">
        <div className="max-w-container-max mx-auto px-margin-x py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-[34px] md:text-[42px] leading-none text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                {stat.value}
              </p>
              <p className="font-label-caps text-[10px] text-on-surface-variant mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <TechMarquee />

      {/* About Section */}
      <section className="relative py-stack-lg bg-surface-container-lowest overflow-hidden reveal-on-scroll" id="about">
        <div className="absolute top-20 -left-20 w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full -z-10"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/10 blur-[120px] rounded-full -z-10"></div>
        <div className="max-w-container-max mx-auto px-margin-x">
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
                    Full-stack developer from Tunisia, focused on building products that are as solid under the hood as they look on screen — from multi-tenant SaaS architectures to AI-powered automation.
                  </p>
                  <div className="flex gap-4 pt-4">
                    <a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-all text-on-surface" href="https://github.com/imenbouchriha12" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <span className="material-symbols-outlined">terminal</span>
                    </a>
                    <a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-all text-on-surface" href="https://www.linkedin.com/in/bouchriha-imen-99077823b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <span className="material-symbols-outlined">link</span>
                    </a>
                    <a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-all text-on-surface" href="mailto:imenbouchriha5@gmail.com" aria-label="Email">
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
                    I design and build full-stack applications end to end: responsive front-ends, resilient APIs, and the infrastructure that keeps them running. I care about clean architecture, performance, and the small details that make a product feel effortless.
                  </p>
                  <p>
                    My favourite problems live where product thinking meets engineering — multi-tenant platforms, real-time workflows, and AI features that genuinely save people time.
                  </p>
                </div>
              </div>
              <div className="space-y-8">
                <div className="flex flex-wrap items-end justify-between gap-3">
                  <h2 className="font-headline-lg text-headline-lg text-on-surface flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">route</span>
                    How I work
                  </h2>
                  <span className="font-label-caps text-[9px] text-on-surface-variant/60">FIRST CALL &rarr; PRODUCTION</span>
                </div>
                <ol className="how-rail relative max-w-2xl">
                  {workflow.map((step) => (
                    <li key={step.code} className="how-step group relative pb-8 pl-14 last:pb-0">
                      <span className="absolute left-0 top-0 grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-surface-container font-label-caps text-[10px] text-on-surface-variant transition-colors duration-300 group-hover:border-primary/60 group-hover:text-primary">
                        {step.code}
                      </span>
                      <h3 className="pt-1.5 font-headline-sm text-[19px] text-on-surface transition-colors group-hover:text-primary">
                        {step.title}
                      </h3>
                      <p className="mt-2 max-w-xl font-body-md text-[15px] leading-relaxed text-on-surface-variant">
                        {step.text}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <JourneySection />

      <ProjectsSection />

      {/* Skills & Contact Section */}
      <section className="relative py-stack-lg bg-surface-container-lowest reveal-on-scroll" id="skills">
        <div className="max-w-container-max mx-auto px-margin-x">
          <div className="mb-stack-lg">
            <span className="text-primary font-label-caps text-label-caps">TECH STACK</span>
            <h2 className="font-display text-display-mobile md:text-display mt-2 mb-6">Mastery &amp; Expertise</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              Crafting elegant solutions with a focus on modern architectures, high-performance systems, and intuitive user experiences.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter mt-stack-lg" id="skills-grid">
              {skillCategories.map((category) => (
                <div key={category.title} className="skill-card glass-card shine-effect bg-surface-container/50 p-stack-md rounded-xl flex flex-col items-center justify-center gap-stack-sm group hover:border-primary/50 transition-all cursor-default min-h-[140px] relative overflow-hidden">
                  <span className="material-symbols-outlined text-5xl text-primary transition-all duration-500 group-hover:opacity-0">{category.icon}</span>
                  <span className="font-label-caps text-label-caps transition-all duration-500 group-hover:opacity-0">{category.title}</span>
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-3 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                    <div className="flex flex-wrap gap-1.5 justify-center">
                      {category.items.map((item) => (
                        <span key={item} className="px-2 py-0.5 rounded-full border border-white/10 bg-white/5 font-label-caps text-[10px] text-on-surface-variant whitespace-nowrap">{item}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-gutter items-center mt-stack-lg pt-16 reveal-on-scroll" id="contact">
            <div className="flex flex-col gap-stack-md order-2 md:order-1">
              <div>
                <span className="text-secondary font-label-caps text-label-caps">CONTACT</span>
                <h2 className="font-display text-headline-lg md:text-display-mobile mt-2 mb-6">Let's Connect</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
                  Whether you have a specific project in mind or just want to chat about the latest tech trends, my inbox is always open.
                </p>
              </div>
              <div className="flex flex-col gap-4 mt-stack-md">
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center border border-white/10 group-hover:border-primary group-hover:scale-110 transition-all">
                    <span className="material-symbols-outlined text-primary">mail</span>
                  </div>
                  <div>
                    <p className="font-label-caps text-[10px] text-on-surface-variant">EMAIL ME</p>
                    <p className="font-body-md text-on-surface">imenbouchriha5@gmail.com</p>
                    <p className="font-body-md text-on-surface">imen.bouchriha@esprit.tn</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center border border-white/10 group-hover:border-primary group-hover:scale-110 transition-all">
                    <span className="material-symbols-outlined text-primary">location_on</span>
                  </div>
                  <div>
                    <p className="font-label-caps text-[10px] text-on-surface-variant">LOCATION</p>
                    <p className="font-body-md text-on-surface">Tunisia</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-stack-md mt-stack-lg">
                <a className="animate-float" href="https://github.com/imenbouchriha12" target="_blank" rel="noopener noreferrer" style={{ animationDelay: '0s' }}>
                  <div className="w-14 h-14 glass-card bg-surface-container/40 rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-[0_0_30px_rgba(251,171,255,0.4)] transition-all">
                    <svg className="w-6 h-6 text-on-surface" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                  </div>
                </a>
                <a className="animate-float" href="https://www.linkedin.com/in/bouchriha-imen-99077823b" target="_blank" rel="noopener noreferrer" style={{ animationDelay: '0.5s' }}>
                  <div className="w-14 h-14 glass-card bg-surface-container/40 rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-[0_0_30px_rgba(251,171,255,0.4)] transition-all">
                    <svg className="w-6 h-6 text-on-surface" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </div>
                </a>
                <a className="animate-float" href="/cv.html" target="_blank" rel="noopener noreferrer" style={{ animationDelay: '1s' }}>
                  <div className="w-14 h-14 glass-card bg-surface-container/40 rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-[0_0_30px_rgba(251,171,255,0.4)] transition-all">
                    <span className="material-symbols-outlined text-on-surface text-3xl">description</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="glass-panel p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
                <form className="flex flex-col gap-stack-md relative z-10" id="contactForm" onSubmit={handleSubmit}>
                  <div className="relative group">
                    <input className="peer w-full bg-transparent border-0 border-b-2 border-white/20 px-0 py-3 text-on-surface focus:ring-0 transition-all duration-300 input-focus-ring" id="name" name="name" placeholder=" " type="text" required />
                    <label className="absolute left-0 top-3 text-on-surface/50 font-label-caps pointer-events-none transition-all duration-300 peer-focus:-translate-y-6 peer-focus:text-primary peer-focus:scale-90" htmlFor="name">Your Name</label>
                  </div>
                  <div className="relative group">
                    <input className="peer w-full bg-transparent border-0 border-b-2 border-white/20 px-0 py-3 text-on-surface focus:ring-0 transition-all duration-300 input-focus-ring" id="email" name="email" placeholder=" " type="email" required />
                    <label className="absolute left-0 top-3 text-on-surface/50 font-label-caps pointer-events-none transition-all duration-300 peer-focus:-translate-y-6 peer-focus:text-primary peer-focus:scale-90" htmlFor="email">Email Address</label>
                  </div>
                  <div className="relative group mt-4">
                    <textarea className="peer w-full bg-transparent border-0 border-b-2 border-white/20 px-0 py-3 text-on-surface focus:ring-0 transition-all duration-300 resize-none input-focus-ring" id="message" name="message" placeholder=" " rows="4" required></textarea>
                    <label className="absolute left-0 top-3 text-on-surface/50 font-label-caps pointer-events-none transition-all duration-300 peer-focus:-translate-y-6 peer-focus:text-primary peer-focus:scale-90" htmlFor="message">Your Message</label>
                  </div>
                  <button className="group relative mt-4 btn-shimmer p-[1px] rounded-xl active:scale-95 transition-all duration-200 overflow-hidden shadow-lg shadow-primary/20" type="submit" disabled={formState === 'sending'}>
                    <span className="block bg-surface-container/80 backdrop-blur-md px-8 py-4 rounded-[11px] font-label-caps text-on-surface font-bold text-center group-hover:bg-transparent transition-colors">
                      {formState === 'idle' && <>Send Message <span className="material-symbols-outlined align-middle ml-2 group-hover:translate-x-1 transition-transform">send</span></>}
                      {formState === 'sending' && <>Sending...</>}
                      {formState === 'sent' && <>Message Sent!</>}
                      {formState === 'error' && <>Failed to send</>}
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
