import SectionHeading from '../components/SectionHeading'

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <SectionHeading
        eyebrow="About"
        title="Reading rooms & distant shores"
        subtitle="Understanding how intelligent technologies shape political power and helping ensure they support the creation of a better future for society."
      />

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6 text-themed-muted leading-relaxed">
          <p>
            I am a researcher working at the intersection of artificial intelligence,
            governance, and international security. My work explores how emerging
            technologies reshape political decision-making, diplomacy, and conflict. I put a
            particular interest in AI governance, strategic competition, and responsible
            innovation. Research should not only explain the world but also contribute to
            building institutions that make it safer, fairer, and more resilient.
          </p>
        </div>

        <aside className="space-y-8">
          <div
            className="p-6 rounded-sm border border-themed"
            style={{ backgroundColor: 'var(--bg-elevated)' }}
          >
            <h2 className="font-serif text-lg text-themed-primary mb-4">Languages</h2>
            <p className="text-sm text-themed-muted leading-relaxed">
              French, Spanish, English, Italian, and Mandarin
            </p>
          </div>

          <div
            className="p-6 rounded-sm border border-themed"
            style={{ backgroundColor: 'var(--bg-elevated)' }}
          >
            <h2 className="font-serif text-lg text-themed-primary mb-4">Affiliations</h2>
            <ul className="space-y-4 text-sm text-themed-muted">
              <li>
                <span className="block text-themed-primary font-medium">University</span>
                LUISS Guido Carli
              </li>
              <li>
                <span className="block text-themed-primary font-medium">Research Network</span>
                Pilot Mangrove Initiative
                <br />
                KTBU Collaborator
              </li>
            </ul>
          </div>

          <div
            className="p-6 rounded-sm border border-themed"
            style={{ backgroundColor: 'var(--bg-elevated)' }}
          >
            <h2 className="font-serif text-lg text-themed-primary mb-4">Education</h2>
            <ul className="space-y-4 text-sm text-themed-muted">
              <li>
                <span className="block text-themed-primary font-medium">
                  Double MA International Relations
                </span>
                China Foreign Affairs University (Beijing), 2026
                <br />
                LUISS Guido Carli (Rome), 2026
              </li>
              <li>
                <span className="block text-themed-primary font-medium">
                  BA Political Science
                </span>
                University of Amsterdam, 2024
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}
