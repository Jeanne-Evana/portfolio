import { Link } from 'react-router-dom'
import { CanopyTop, RootFloor, VineBorder, LeafCluster } from '../components/TropicalOvergrowth'

const portfolioItems = [
  {
    title: "Cosmos Proposal 2026",
    medium: "Application · Philosopher Builder Grant · 2026",
    desc: "Multilingual application to monitor and counter personal AI use, dependency and assessing levels of cognitive offloading.",
    file: "/Cosmos Grant.pdf",
  },
  {
    title: "PlastExpo 2025",
    medium: "Policy article · Local Pathways · 2025",
    desc: "Reflection on plastic pollution, circular economies, and community-led environmental action following the PlastExpo initiative.",
    link: "https://localpathways.org/blog/2025/8/13/plastexpo-202",
  },
  {
    title: "Alternative Solutions to UBI",
    medium: "Research proposal · 2026",
    desc: "Exploring a world with AI-enabled massive unemployment: social stewardship and community participation and contribution.",
    file: "/Alternative Solutions to UBI.pdf",
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
  {
    title: "AI dependency 2026",
    medium: "Commentary · Sino-EU AI Youth Panel · 2026",
    desc: "Reflection on the misplacement of AI risks for youth cognition: AI literacy is distinct from digital media literacy.",
    file: "/Cognitive Offloading.pdf",
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
      <div aria-hidden="true">
        <CanopyTop />
        <RootFloor />

        <VineBorder className="left-0 top-20 h-[70vh] w-16 sm:w-24 animate-vine-creep motion-reduce:animate-none opacity-80" />
        <VineBorder
          className="right-0 top-32 h-[60vh] w-16 sm:w-24 scale-x-[-1] animate-vine-creep motion-reduce:animate-none opacity-70"
          style={{ animationDelay: '2s' }}
        />

        <LeafCluster className="absolute top-40 left-[8%] animate-leaf-sway motion-reduce:animate-none opacity-60 hidden sm:block" />
        <LeafCluster
          className="absolute top-64 right-[6%] animate-leaf-sway motion-reduce:animate-none opacity-50 hidden sm:block"
          style={{ animationDelay: '1.5s' }}
        />
        <LeafCluster
          className="absolute bottom-48 left-[12%] animate-leaf-sway motion-reduce:animate-none opacity-40"
          style={{ animationDelay: '0.8s' }}
        />

        {spores.map(({ id, left, delay, duration }) => (
          <span
            key={id}
            className="spore motion-reduce:animate-none"
            style={{
              left,
              bottom: `${20 + (id % 5) * 10}%`,
              animationDelay: delay,
              animationDuration: duration,
            }}
          />
        ))}
      </div>

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
            className="text-sm text-[#e8f0e4]/70 hover:text-leaf-light transition-colors border border-leaf/25 px-4 py-2 rounded-full hover:border-leaf/50 shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf-light"
          >
            ← Return to shore
          </Link>
        </div>
      </header>

      <main className="relative z-10 max-w-5xl mx-auto px-6 py-16 sm:py-20">

        <section className="mb-20 max-w-3xl">
          <p className="font-display text-xs uppercase tracking-[0.25em] text-leaf-light mb-5 whitespace-nowrap">
            Innovation · Community · Durability
          </p>

          <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight mb-6 text-[#e8f0e4]">
            Civilisation and ecology,
            <span className="block overgrown-text italic">
              growing through each other
            </span>
          </h2>

          <p className="text-[#c8d8c0] text-lg leading-relaxed mb-6">
            This is the worldbuilding side. No dichotomy between technology
            and nature. Intelligence is rooted in soil,
            water and community, not extracted.
          </p>

          <p className="text-[#a8c4a0] text-base leading-relaxed italic font-serif">
            Solarpunk asks us to imagine abundance. Algorithms learn from forests, diplomacy happens under canopies, and the
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
                Artificial intelligence cannot be sealed and extractive.
                New systems could be designed to symbiose with their
                environment, draw from local knowledge, and give back as
                they grow.
              </p>

              <p className="text-sm text-[#c8d8c0] leading-relaxed">
                These pieces are exploratory: what governance, diplomacy, and safety might look
                like when we refuse the separation of nature and civilisation. I am insistently claiming that the future is
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
                <p className="text-xs uppercase tracking-widest text-leaf-light mb-2">
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
                    className="inline-block mt-5 text-leaf-light hover:text-bloom transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf-light"
                  >
                    Read more <span className="sr-only">about {title} (opens in a new tab)</span>→
                  </a>
                )}

                {file && (
                  <a
                    href={`${import.meta.env.BASE_URL}${file.replace(/^\/+/, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-5 text-leaf-light hover:text-bloom transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf-light"
                  >
                    Open PDF <span className="sr-only">of {title} (opens in a new tab)</span>→
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
          {/* Communities I've Helped Grow */}

          <section className="mb-20">

            <h3 className="font-display text-2xl text-leaf-light mb-3">
              Communities I Helped Grow
            </h3>

            <p className="text-[#b4c8b0] leading-relaxed max-w-3xl mb-12">
              Solarpunk is not only something to be written about. With patience and care, 
              I cultivated mutual learning and community-building.
            </p>

            <h4 className="font-display text-xl text-leaf-light mb-6">
              🌿 Currently Growing
            </h4>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">

              {[
                {
                  title: "Horizon AGI - Fieldbuilding",
                  role: "Co-founder · France",
                  link: "https://www.horizonagi.fr/",
                },
                {
                  title: "AIxPhilo - Reading Group",
                  role: "Facilitator · Remote",
                  link: "https://nous-ai-philosophy.notion.site/AI-Safety-Philosophy-Reading-Group-38bdd69661e980b68450e66c00652324",
                },
                {
                  title: "AIxBio Africa - Fellowship",
                  role: "Mentor · Remote",
                  link: "https://aixbio-africa.vercel.app/",
                },
              ].map(({ title, role, link }) => (

              <a
                key={title}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf-light rounded-lg"
              >

                <article className="relative reclaimed-card rounded-lg p-6 hover:border-leaf/50 transition-all duration-300 hover:-translate-y-1">

                  <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-leaf via-bloom to-moss opacity-60 rounded-t-lg" />

                  <h5 className="font-display text-xl text-[#e8f0e4] mb-3 group-hover:text-leaf-light transition-colors">
                    {title}
                  </h5>

                  <p className="text-[#bdd4b6] leading-relaxed">
                    {role}
                  </p>
                  <span className="sr-only"> (opens in a new tab)</span>

                </article>

              </a>

              ))}

            </div>

            <h4 className="font-display text-xl text-[#9fbf94] mb-6">
              🌱 Roots
            </h4>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

             {[
                {
                  title: "Local Pathways",
                  role: "Fellow · Rome",
                  link: "https://localpathways.org/2025",
                },
                {
                  title: "INA Journal",
                  role: "Writer · LUISS Rome",
                  link: "https://www.instagram.com/inajournalluiss/",
                },
                {
                  title: "LUISS Language Café",
                  role: "Volunteer · Rome",
                  link: "https://www.instagram.com/luisslanguagecafe/",
                },
                {
                  title: "Ordre of Malta France",
                  role: "Communication · Marauder · Paris",
                  link: "https://www.ordredemaltefrance.org/",
                },
                {
                  title: "ASDV Debate Society",
                  role: "Social Commissioner · Amsterdam",
                  link: "https://asdvbonaparte.nl/en/",
                },
                {
                  title: "Interact JA",
                  role: "Co-founder · President · France",
                  link: "https://www.facebook.com/ja.interact/",
                },
              ].map(({ title, role, link }) => (

              <a
                key={title}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group opacity-75 hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf-light focus-visible:opacity-100 rounded-lg"
              >

                <article className="relative reclaimed-card rounded-lg p-6 transition-all duration-300 hover:-translate-y-1">

                  <div className="absolute top-0 left-0 h-1 w-full bg-[#6e8b63] opacity-40 rounded-t-lg" />

                  <h5 className="font-display text-xl text-[#dce8d7] mb-3 group-hover:text-leaf-light transition-colors">
                    {title}
                  </h5>

                  <p className="text-[#a6b89f] leading-relaxed">
                    {role}
                  </p>
                  <span className="sr-only"> (opens in a new tab)</span>

                </article>

              </a>

              ))}
            </div>

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