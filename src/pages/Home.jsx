import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-20">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            <p className="text-xs uppercase tracking-[0.25em] text-sea-deep dark:text-sand font-medium mb-4">
              Research · Policy · Communication
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-themed-primary leading-[1.12] mb-6">
              Governing intelligence
              <span className="block text-sea-deep dark:text-sand italic">
                amidst the tides of conflict
              </span>
            </h1>
            <p className="text-lg text-themed-muted leading-relaxed max-w-xl mb-6">
              I research the intersection of AI governance, political violence and global
              governance, with a particular focus on a plurality of perspectives from the
              Eurasian continent.
            </p>
            <p className="text-base text-themed-primary/90 leading-relaxed max-w-xl mb-8 font-serif italic border-l-2 border-sea-deep/40 dark:border-sand/30 pl-4">
              Understanding how intelligent technologies shape political power and helping
              ensure they support the creation of a better future for society.
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
                View research
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
                boxShadow: '0 8px 32px color-mix(in srgb, var(--text-primary) 8%, transparent)',
              }}
            >
              <img
                src="/portrait.png"
                alt="Jeanne (容慧) Vincendeau"
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
            Areas of inquiry
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                title: 'AI Governance',
                desc: 'Concentration of power in AI systems, AI for diplomacy, and multilingual safety benchmarks, asking who governs, and in whose language.',
              },
              {
                title: 'Political Violence',
                desc: 'Terrorism (recruitment, psychology and legal frameworks) alongside violent protests, from popular dissidence to government repression.',
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
                <h3 className="font-serif text-xl text-themed-primary mb-3">{title}</h3>
                <p className="text-sm text-themed-muted leading-relaxed">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-8 rounded-sm border border-themed"
          style={{ backgroundColor: 'var(--bg-surface)' }}
        >
          <div>
            <h2 className="font-serif text-2xl text-themed-primary mb-2">Recent work</h2>
            <p className="text-themed-muted text-sm max-w-md">
              Publications, policy briefs, and talks at the crossroads of AI governance,
              political violence, and international relations.
            </p>
          </div>
          <Link
            to="/research"
            className="text-sm font-medium text-sea-deep dark:text-sand hover:opacity-80 transition-opacity whitespace-nowrap"
          >
            Browse all research →
          </Link>
        </div>
      </section>
    </div>
  )
}
