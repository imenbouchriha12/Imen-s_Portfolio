import { useState } from 'react'
import AboutSection from '../components/AboutSection'
import JourneySection from '../components/JourneySection'
import MasterySection from '../components/MasterySection'
import ProjectsSection from '../components/ProjectsSection'
import ShaderHero from '../components/ShaderHero'
import TechMarquee from '../components/TechMarquee'
import useRevealOnScroll from '../hooks/useRevealOnScroll'
import useTunisTime from '../hooks/useTunisTime'
import { stats } from '../data/projects'

export default function LandingPage() {
  const [formState, setFormState] = useState('idle')
  const time = useTunisTime()
  useRevealOnScroll()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    setFormState('sending')
    const data = new FormData(form)
    data.append('_cc', 'imen.bouchriha@esprit.tn')
    data.append('_captcha', 'false')
    try {
      const res = await fetch('https://formsubmit.co/ajax/imenbouchriha5@gmail.com', {
        method: 'POST',
        body: data,
      })
      if (res.ok) {
        setFormState('sent')
        form.reset()
      } else {
        setFormState('error')
      }
    } catch {
      setFormState('error')
    }
    setTimeout(() => setFormState('idle'), 5000)
  }

  return (
    <main id="main" className="relative min-h-screen">
      <ShaderHero />

      {/* Key numbers */}
      <section className="relative border-y border-white/10 bg-surface-container-lowest py-10" aria-label="Key numbers">
        <div className="mx-auto max-w-container-max px-margin-x">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={stat.label} className="bg-background px-5 py-7 sm:px-7">
                <span className="font-label-caps text-[8px] text-primary/60">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="mt-2 font-display text-[40px] leading-none text-on-surface md:text-[52px]">
                  {stat.value}
                </p>
                <p className="mt-2 font-label-caps text-[8px] text-on-surface-variant">
                  {stat.label.toUpperCase()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TechMarquee />

      <AboutSection />

      <JourneySection />

      <ProjectsSection />

      <MasterySection />

      {/* Contact */}
      <section id="contact" className="reveal-on-scroll relative overflow-hidden bg-background py-stack-lg">
        <div className="pointer-events-none absolute -right-24 top-10 h-[420px] w-[420px] rounded-full bg-primary/[0.08] blur-[150px]" aria-hidden="true" />
        <div className="relative mx-auto max-w-container-max px-margin-x">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-gutter">
            <div className="lg:col-span-5">
              <span className="eyebrow">Layer 06 / Uplink</span>
              <h2 className="mt-5 font-display text-display-mobile md:text-display text-on-surface">
                Let's build something that{' '}
                <span className="font-serif-accent text-gradient">holds</span>.
              </h2>
              <p className="mt-5 max-w-md font-body-lg text-body-lg text-on-surface-variant">
                A product to ship, a system to untangle, or a role to fill? Send a brief — I read
                every message.
              </p>

              <div className="mt-10 space-y-6">
                <div>
                  <p className="font-label-caps text-[8px] text-on-surface-variant/60">EMAIL</p>
                  <a
                    href="mailto:imenbouchriha5@gmail.com"
                    className="mt-1 block font-headline-sm text-[18px] text-on-surface transition-colors hover:text-primary"
                  >
                    imenbouchriha5@gmail.com
                  </a>
                  <a
                    href="mailto:imen.bouchriha@esprit.tn"
                    className="mt-1 block font-body-md text-[14px] text-on-surface-variant transition-colors hover:text-primary"
                  >
                    imen.bouchriha@esprit.tn
                  </a>
                </div>

                <div className="flex gap-10">
                  <div>
                    <p className="font-label-caps text-[8px] text-on-surface-variant/60">BASED IN</p>
                    <p className="mt-1 font-body-md text-[14px] text-on-surface">Tunis, Tunisia</p>
                  </div>
                  <div>
                    <p className="font-label-caps text-[8px] text-on-surface-variant/60">LOCAL TIME</p>
                    <p className="mt-1 font-body-md text-[14px] text-on-surface">{time} GMT+1</p>
                  </div>
                </div>
              </div>

              <div className="mt-9 flex flex-wrap gap-x-5 gap-y-2">
                <a
                  href="https://github.com/imenbouchriha12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-label-caps text-[9px] text-on-surface-variant transition-colors hover:text-primary"
                >
                  GITHUB ↗
                </a>
                <a
                  href="https://www.linkedin.com/in/bouchriha-imen-99077823b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-label-caps text-[9px] text-on-surface-variant transition-colors hover:text-primary"
                >
                  LINKEDIN ↗
                </a>
                <a
                  href="/cv.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-label-caps text-[9px] text-on-surface-variant transition-colors hover:text-primary"
                >
                  CV ↗
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="corner-frame glass-panel relative rounded-2xl p-6 sm:p-8">
                <div className="mb-7 flex items-center justify-between">
                  <span className="font-label-caps text-[8px] text-on-surface-variant">UPLINK / FORM_01</span>
                  <span className="flex items-center gap-2 font-label-caps text-[8px] text-tertiary">
                    <span className="status-dot" />
                    OPEN
                  </span>
                </div>

                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                  <input type="hidden" name="_subject" value="New message from imen-bouchriha.netlify.app" />
                  <div>
                    <label htmlFor="name" className="font-label-caps text-[8px] text-on-surface-variant">
                      01 / NAME
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      placeholder="Your name"
                      className="mt-2 w-full border-b border-white/[0.15] bg-transparent py-3 font-body-md text-on-surface transition-colors placeholder:text-on-surface-variant/40 focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="font-label-caps text-[8px] text-on-surface-variant">
                      02 / EMAIL
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="you@company.com"
                      className="mt-2 w-full border-b border-white/[0.15] bg-transparent py-3 font-body-md text-on-surface transition-colors placeholder:text-on-surface-variant/40 focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="font-label-caps text-[8px] text-on-surface-variant">
                      03 / BRIEF
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      required
                      placeholder="What are you building?"
                      className="mt-2 w-full resize-none border-b border-white/[0.15] bg-transparent py-3 font-body-md text-on-surface transition-colors placeholder:text-on-surface-variant/40 focus:border-primary focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <button
                      type="submit"
                      disabled={formState === 'sending'}
                      className="btn-shimmer group relative overflow-hidden rounded-full p-[1px] transition-transform hover:scale-[1.02] disabled:cursor-wait disabled:opacity-60"
                    >
                      <span className="flex items-center justify-center gap-2 rounded-full bg-surface-container/95 px-7 py-3.5 font-label-caps text-[9px] font-bold text-on-surface transition-colors group-hover:bg-transparent group-hover:text-on-primary-container">
                        {formState === 'idle' && (
                          <>
                            Send the brief
                            <span className="material-symbols-outlined text-[16px]">north_east</span>
                          </>
                        )}
                        {formState === 'sending' && 'Sending...'}
                        {formState === 'sent' && 'Brief sent'}
                        {formState === 'error' && 'Try again'}
                      </span>
                    </button>

                    <p
                      role="status"
                      aria-live="polite"
                      className={`min-h-[1rem] font-label-caps text-[8px] ${
                        formState === 'error' ? 'text-error' : 'text-tertiary'
                      }`}
                    >
                      {formState === 'sent' && 'MESSAGE SENT — I WILL GET BACK TO YOU.'}
                      {formState === 'error' && (
                        <>
                          COULD NOT SEND — EMAIL{' '}
                          <a className="underline" href="mailto:imenbouchriha5@gmail.com">
                            IMENBOUCHRIHA5@GMAIL.COM
                          </a>
                        </>
                      )}
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
