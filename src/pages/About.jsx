import SectionHeading from '../components/SectionHeading'

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">

      <SectionHeading
        eyebrow="About"
        title="Scholar, builder and storyteller"
      />

      <div className="grid md:grid-cols-3 gap-6">

        {/* Languages */}
        <div
          className="p-6 rounded-sm border border-themed"
          style={{ backgroundColor: 'var(--bg-elevated)' }}
        >
          <h2 className="font-serif text-lg text-themed-primary mb-4">
            Languages
          </h2>

          <ul className="text-sm text-themed-muted leading-relaxed space-y-1 list-none">
            <li><span aria-hidden="true">🇫🇷</span> French</li>
            <li><span aria-hidden="true">🇬🇧</span> English</li>
            <li><span aria-hidden="true">🇪🇸</span> Spanish</li>
            <li><span aria-hidden="true">🇮🇹</span> Italian</li>
            <li><span aria-hidden="true">🇨🇳</span> Mandarin</li>
          </ul>
        </div>

        {/* Affiliations */}
        <div
          className="p-6 rounded-sm border border-themed"
          style={{ backgroundColor: 'var(--bg-elevated)' }}
        >
          <h2 className="font-serif text-lg text-themed-primary mb-4">
            Affiliations
          </h2>

          <ul className="space-y-4 text-sm text-themed-muted">

            <li>
              <span className="block text-themed-primary font-medium">
                University
              </span>
              LUISS Guido Carli
            </li>

            <li>
              <span className="block text-themed-primary font-medium">
                Research Network
              </span>
              Pilot Mangrove Initiative
              <br />
              KTBU Collaborator
              <br />
              ITU U4SSC Working Group 1
            </li>

          </ul>
        </div>

        {/* Education */}
        <div
          className="p-6 rounded-sm border border-themed"
          style={{ backgroundColor: 'var(--bg-elevated)' }}
        >
          <h2 className="font-serif text-lg text-themed-primary mb-4">
            Education
          </h2>

          <ul className="space-y-4 text-sm text-themed-muted">

            <li>
              <span className="block text-themed-primary font-medium">
                Dual MA International Relations
              </span>

              CFAU (Beijing), 2026
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

      </div>
    </div>
  )
}