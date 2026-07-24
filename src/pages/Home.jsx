import { Link } from 'react-router-dom'
import OliveBranches from "../components/OliveBranches"

export default function Home() {
  return (
    <div>

      {/* =========================
          Hero
      ========================== */}

      <section className="max-w-6xl mx-auto px-6 pt-20 pb-24">

        <div className="grid lg:grid-cols-12 gap-20 items-center">

          {/* Left column */}

          <div className="lg:col-span-7">

            <p className="text-xs uppercase tracking-[0.3em] text-sea-deep dark:text-sand font-medium mb-6">
              Research • Policy • Communication
            </p>

            <h1 className="leading-[1.02] mb-8">

              <span className="block font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold text-themed-primary">
                Governance of new technologies
              </span>

              <span className="block mt-5 font-serif italic text-3xl sm:text-4xl text-sea-deep dark:text-sand font-normal">
                &amp; the tides of a changing world order
              </span>

            </h1>

            <p className="text-xl text-themed-muted leading-relaxed max-w-2xl mb-10">
              Understand how intelligent technologies shape political power and ensure
              they support the creation of a better future for society.
            </p>

            <p className="text-base text-themed-primary/90 leading-loose max-w-2xl mb-12">
              I am a researcher working at the intersection of artificial intelligence,
              governance, and international security. My work explores how emerging
              technologies reshape political decision-making, diplomacy and conflict,
              with a particular interest in AI governance, strategic competition and
              responsible innovation.
            </p>

            <div className="flex flex-wrap gap-4">

              <Link
                to="/research"
                className="inline-flex items-center px-7 py-3 rounded-md text-sm font-medium transition-all"
                style={{
                  backgroundColor: "var(--btn-primary-bg)",
                  color: "var(--btn-primary-text)",
                }}
              >
                Explore research
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center px-7 py-3 rounded-md border border-themed-strong text-sm font-medium hover:border-sea-deep dark:hover:border-sand transition-all"
              >
                About me
              </Link>

            </div>

          </div>

          {/* Right column */}
          <div className="lg:col-span-5 flex justify-center">

          <div className="relative w-full max-w-md">
            <OliveBranches />
            <div className="portrait-glow" />

              {/* Portrait */}

              <div
                className="relative mx-auto w-[78%] aspect-[4/5] overflow-hidden rounded-lg border bg-themed-card"
                style={{
                  borderColor: "var(--border-strong)",
                  boxShadow:
                    "0 28px 56px rgba(28,26,22,.10)",
                }}
              >
                <img
                  src={`${import.meta.env.BASE_URL}portrait.png`}
                  alt="Jeanne Vincendeau"
                  className="w-full h-full object-cover object-top"
                />
              </div>

            </div>

          </div>

        </div>

      </section>
      {/* =========================
          Areas of Inquiry
      ========================== */}

<section
        className="border-y border-themed"
        style={{ backgroundColor: "var(--bg-elevated)" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-24">

          <h2 className="font-serif text-3xl text-themed-primary text-center mb-4">
            Areas of Inquiry
          </h2>

          <div
            className="w-20 h-px mx-auto mb-14"
            style={{ backgroundColor: "var(--accent-soft)" }}
          />

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "AI Governance",
                desc: "Concentration of power in Global AI Governance, AI for diplomacy, and multilingual safety benchmarks. I am asking who governs and in whose language.",
              },
              {
                title: "Political Violence",
                desc: "Interpersonal violence, including psychology of terrorism, counterterrorism legislation, violent protests, state repression and geopolitics.",
              },
              {
                title: "International Relations",
                desc: "Global governance from cooperation to competition, with multilingual and multicultural perspectives from middle powers and Global South countries.",
              },
            ].map(({ title, desc }) => (
              <article
                key={title}
                className="p-8 border border-themed transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: "var(--card-bg)",
                  borderRadius: "8px",
                }}
              >
                <h3 className="font-serif text-2xl text-themed-primary mb-5">
                  {title}
                </h3>

                <p className="text-themed-muted leading-8 text-[15px]">
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