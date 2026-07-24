import { Link } from 'react-router-dom'
import { CanopyTop, RootFloor, VineBorder, LeafCluster } from '../components/TropicalOvergrowth'

const portfolioItems = [
  {
    title: "PlastExpo 2025",
    medium: "Policy article · Local Pathways · 2025",
    desc: "Reflection on plastic pollution, circular economies, and community-led environmental action following the PlastExpo initiative.",
    link: "https://localpathways.org/blog/2025/8/13/plastexpo-202",
  },
  {
    title: "Local Pathways Fellow",
    medium: "International programme · Rome · 2025",
    desc: "Working on environmental policy, community-building, and inclusive governance through international collaboration and local action.",
    link: "https://localpathways.org/2025",
  },
  {
    title: "St. Gallen Symposium Essay",
    medium: "Essay · 2025",
    desc: "Essay exploring AI-enabled interventions promoting offline communities to counter digital isolation and polarization.",
    file: "/st-gallen.pdf",
  },
  {
    title: "Einstein Fellowship Proposal",
    medium: "Research proposal · 2026",
    desc: "Proposal on inclusive educational games fostering critical thinking, cooperation, and social integration for marginalized communities.",
    file: "/einstein-fellowship.pdf",
  },
]

const spores = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  left: `${8 + (i * 7.5) % 85}%`,
  delay: `${i * 1.4}s`,
  duration: `${10 + (i % 4) * 2}s`,
}))

export default function Solarpunk() {
  return (
    <div className="solarpunk-ecosystem min-h-screen relative overflow-hidden">
      <CanopyTop />
      <RootFloor />

      <VineBorder className="left-0 top-20 h-[70vh] w-16 sm:w-24 animate-vine-creep opacity-80" />
      <VineBorder
        className="right-0 top-32 h-[60vh] w-16 sm:w-24 scale-x-[-1] animate-vine-creep opacity-70"
        style={{ animationDelay: '2s' }}
      />

      <LeafCluster className="absolute top-40 left-[8%] animate-leaf-sway opacity-60 hidden sm:block" />
      <LeafCluster
        className="absolute top-64 right-[6%] animate-leaf-sway opacity-50 hidden sm:block"
        style={{ animationDelay: '1.5s' }}
      />
      <LeafCluster
        className="absolute bottom-48 left-[12%] animate-leaf-sway opacity-40"
        style={{ animationDelay: '0.8s' }}
      />

      {spores.map(({ id, left, delay, duration }) => (
        <span
          key={id}
          className="spore"
          style={{
            left,
            bottom: `${20 + (id % 5) * 10}%`,
            animationDelay: delay,
            animationDuration: duration,
          }}
        />
      ))}

      <header className="relative z-10 border-b border-leaf/20 bg-canopy/30 backdrop-blur-md sticky top-0">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between gap-4">
          <div>
            <p className="font-display text-xs uppercase tracking-[0.3em] text-leaf-light mb-1">
              The garden behind the library
            </p>

            <h1 className="font-display text-xl sm:text-2xl font-bold overgrown-text">
              Ecosystem Portfolio
            </h1>
          </div>

          <Link
            to="/"
            className="text-sm text-[#e8f0e4]/70 hover:text-leaf-light transition-colors border border-leaf/25 px-4 py-2 rounded-full hover:border-leaf/50 shrink-0"
          >
            ← Return to shore
          </Link>
        </div>
      </header>

      <main className="relative z-10 max-w-5xl mx-auto px-6 py-16 sm:py-20">

        <section className="mb-20 max-w-3xl">
          <p className="font-display text-xs uppercase tracking-[0.25em] text-leaf-light mb-5">
            Solarpunk · Community · Sustainability
          </p>

          <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight mb-6 text-[#e8f0e4]">
            Civilisation and ecology,
            <span className="block overgrown-text italic">
              growing through each other
            </span>
          </h2>

          <p className="text-[#c8d8c0] text-lg leading-relaxed mb-6">
            This is the other side of my work, worldbuilding. Here,
            tropical vegetation reclaims the page. Technology is not a machine separate
            from nature but a participant in an ecosystem: intelligence rooted in soil,
            water, and community rather than extracted from them.
          </p>

          <p className="text-[#a8c4a0] text-base leading-relaxed italic font-serif">
            Solarpunk asks us to imagine abundance. I ask what that means for AI, when
            algorithms learn from forests, diplomacy happens under canopies, and the
            future is overgrown with possibility.
          </p>
        </section>

        <section className="mb-20 relative">
          <div className="reclaimed-card rounded-lg p-8 sm:p-10">
            <div className="absolute top-0 right-0 w-32 h-32 opacity-30 pointer-events-none">
              <LeafCluster className="w-full h-full animate-leaf-sway" />
            </div>

            <h3 className="font-display text-2xl text-leaf-light mb-4 relative z-10">
              AI as ecosystem, not engine
            </h3>

            <div className="grid sm:grid-cols-2 gap-6 relative z-10">
              <p className="text-sm text-[#c8d8c0] leading-relaxed">
                The dominant metaphor treats artificial intelligence as a separate
                machine: sealed, extractive, indifferent to the world it models.
                Solarpunk offers another side: systems symbiose with their
                environment, draw from local knowledge, and give back as
                they grow.
              </p>

              <p className="text-sm text-[#c8d8c0] leading-relaxed">
                These pieces explore what governance, diplomacy, and safety might look
                like when we refuse the separation of nature and civilisation, when the
                page itself is invaded by the green, insistent claim that the future is
                alive.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h3 className="font-display text-lg uppercase tracking-widest text-leaf-light mb-8">
            Projects for Regenerative Futures
          </h3>

          <div className="grid sm:grid-cols-2 gap-6">
            {portfolioItems.map(({ title, medium, desc, link, file }, i) => (
              <article
                key={title}
                className="relative reclaimed-card rounded-lg p-6 hover:border-leaf/50 transition-all duration-500 hover:-translate-y-0.5 group"
              >
                <p className="text-xs uppercase tracking-widest text-moss mb-2">
                  {medium}
                </p>

                <h4 className="font-display text-xl font-semibold text-[#e8f0e4] mb-3 group-hover:text-leaf-light transition-colors">
                  {title}
                </h4>

                <p className="text-sm text-[#a8c4a0] leading-relaxed">
                  {desc}
                </p>

                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-5 text-leaf-light hover:text-bloom transition-colors"
                  >
                    Read more →
                  </a>
                )}

                {file && (
                  <a
                    href={`${import.meta.env.BASE_URL}${file.replace(/^\//, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-5 text-leaf-light hover:text-bloom transition-colors"
                  >
                    Open PDF →
                  </a>
                )}

                {i % 2 === 0 && (
                  <div className="absolute -bottom-2 -right-2 opacity-20 group-hover:opacity-40 transition-opacity">
                    <LeafCluster className="w-12 h-12" />
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
                {/* Three principles */}
                <section className="grid sm:grid-cols-3 gap-6 mb-16">
          {[
            {
              label: 'Partnership',
              text: 'Civilisation and ecology are not opposites. The most durable technologies are those that feed the systems they inhabit.',
            },
            {
              label: 'Plurality',
              text: 'Intelligence grows in many soils: linguistic, cultural, ecological. A forest thinks differently than a factory.',
            },
            {
              label: 'Abundance',
              text: 'Solarpunk refuses scarcity as destiny. The future can be lush, shared, and overgrown with care.',
            },
          ].map(({ label, text }) => (
            <div
              key={label}
              className="p-5 rounded-lg border border-fern/30 bg-canopy/40 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-leaf via-bloom to-moss opacity-60" />

              <h4 className="font-display text-base font-semibold text-leaf-light mb-2">
                {label}
              </h4>

              <p className="text-sm text-[#a8c4a0] leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </section>

        <footer className="text-center pt-8 border-t border-fern/20">
          <p className="font-serif text-sm text-[#7a9a72] italic">
            You found what grows behind the reading room. Tend it well.
          </p>
        </footer>
      </main>
    </div>
  )
}