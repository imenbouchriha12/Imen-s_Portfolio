import AboutSection from '../components/AboutSection'
import JourneySection from '../components/JourneySection'
import useRevealOnScroll from '../hooks/useRevealOnScroll'

export default function AboutPage() {
  useRevealOnScroll()

  return (
    <main id="main" className="relative min-h-screen overflow-hidden pt-32">
      <div className="blueprint-grid pointer-events-none absolute inset-x-0 top-0 h-[620px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[460px] w-[720px] -translate-x-1/2 rounded-full bg-primary/[0.08] blur-[160px]" aria-hidden="true" />

      <section className="relative mx-auto max-w-container-max px-margin-x pb-16">
        <span className="eyebrow">Operator file / Imen Bouchriha</span>
        <h1 className="hero-title mt-6 font-display text-on-surface">
          <span className="hero-line">
            <span style={{ animationDelay: '0.08s' }}>Engineer first.</span>
          </span>
          <span className="hero-line">
            <span style={{ animationDelay: '0.18s' }}>
              <span className="whitespace-nowrap font-serif-accent text-gradient">Product-minded</span> always.
            </span>
          </span>
        </h1>
        <p className="animate-fade-in-up mt-6 max-w-2xl font-body-lg text-body-lg text-on-surface-variant" style={{ animationDelay: '0.4s' }}>
          I'm Imen — a full-stack engineer in Tunis. I like the part where architecture, product
          and delivery meet, and I stay involved from the first schema to the last deploy.
        </p>
      </section>

      <AboutSection showHeader={false} />
      <JourneySection />
    </main>
  )
}
