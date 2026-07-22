import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-20">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            <p className="text-xs uppercase tracking-[0.25em] text-sea-deep dark:text-sand font-medium mb-4">
              Research • Policy • Communication
            </p>

            <h1 className="leading-tight mb-6">
              <span className="block font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold text-themed-primary">
                Governance of new technologies
              </span>

              <span className="block mt-2 font-sans italic text-3xl sm:text-4xl text-sea-deep dark:text-sand">
                &amp; tides of a changing world order
              </span>
            </h1>

            <p className="text-lg text-themed-muted leading-relaxed max-w-xl mb-8">
              Understand how intelligent technologies shape political power and ensure
              they support the creation of a better future for society.
            </p>

            <p className="text-base text-themed-primary/90 leading-relaxed max-w-xl mb-10">
              I am a researcher working at the intersection of artificial intelligence,
              governance, and international security. My work explores how emerging
              technologies reshape political decision-making, diplomacy, and conflict,
              with a particular interest in AI governance, strategic competition, and
              responsible innovation.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/research"
                className="inline-flex items-center px-6 py-3 text-sm font-medium rounded-sm transition-colors"
                style={{
                  backgroundColor: 'var(--btn-primary-bg)',
                  color: 'var(--btn-primary-text)',
                }}
              >
                Explore research
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 border border-themed-strong text-themed-primary text-sm font-medium rounded-sm hover:border-sea-deep dark:hover:border-sand hover:text-sea-deep dark:hover:text-sand transition-colors"
              >
                About me
              </Link>
            </div>
          </div>

          <div className="lg:col-span-2 relative">
            <div
              className="aspect-[4/5] rounded-sm overflow-hidden border shadow-lg"
              style={{
                borderColor: 'var(--border-strong)',
                boxShadow:
                  '0 8px 32px color-mix(in srgb, var(--text-primary) 8%, transparent)',
              }}
            >
              <img
                src="/portrait.png"
                alt="Jeanne Vincendeau"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div
              aria-hidden
              className="absolute -bottom-4 -right-4 w-24 h-24 border border-sea/30 dark:border-sand/20 rounded-sm opacity-40"
            />

            <div
              aria-hidden
              className="absolute -top-3 -left-3 w-16 h-20 border border-themed opacity-30 rounded-sm"
            />
          </div>
        </div>
      </section>

      <section
        className="border-y border-themed"
        style={{ backgroundColor: 'var(--bg-elevated)' }}
      >
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="font-serif text-2xl text-themed-primary mb-10 text-center">
            Areas of Inquiry
          </h2>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                title: 'AI Governance',
                desc: 'Concentration of power in Global AI Governance, AI for diplomacy, and multilingual safety benchmarks. I am asking who governs and in whose language.',
              },
              {
                title: 'Political Violence',
                desc: 'Interpersonal violence, including psychology of terrorism, counterterrorism legislation, violent protests, state repression and geopolitics.',
              },
              {
                title: 'International Relations',
                desc: 'Global governance from cooperation to competition, with multilingual and multicultural perspectives from middle powers and Global South countries.',
              },
            ].map(({ title, desc }) => (
              <article
                key={title}
                className="p-6 rounded-sm border border-themed hover:border-sea-deep/40 dark:hover:border-sand/30 transition-colors"
                style={{ backgroundColor: 'var(--card-bg)' }}
              >
                <h3 className="font-serif text-xl text-themed-primary mb-3">
                  {title}
                </h3>

                <p className="text-sm text-themed-muted leading-relaxed">
                  {desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}