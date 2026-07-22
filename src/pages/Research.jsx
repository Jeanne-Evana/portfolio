import SectionHeading from '../components/SectionHeading'

const researchAreas = [
  {
    area: 'AI Governance',
    topics: [
      'Concentration of power in AI development and deployment',
      'AI for diplomacy: tools, institutions, and asymmetries',
      'Multilingual safety benchmarks and non-Western linguistic perspectives',
    ],
  },
  {
    area: 'Political Violence',
    topics: [
      'Terrorism: recruitment pathways, psychology, and legal frameworks',
      'Violent protests: popular dissidence and civil resistance',
      'Government repression and the politics of public order',
    ],
  },
  {
    area: 'International Relations',
    topics: [
      'Global governance from cooperation to competition',
      'Multilingual and multicultural perspectives',
      'Pan-Asian collaboration portfolio, field experience in China',
    ],
  },
]

const publications = [
  {
    year: '2026',
    title: 'Towards a Moral Realist Alternative Order: Chinese and Russian Approaches to the Syrian and Sudanese Civil Wars',
    venue: 'General Conference ECPR',
    type: 'Conference',
    href: 'https://ecpr.eu/Events/Event/PaperDetails/87440',
    note: 'Conference paper',
  },
  {
    year: '2025',
    title: 'Unheard Voices: Violent Protests in Democratic Countries and Their Successes',
    venue: 'Amsterdam Journal of Social Sciences (AJSS)',
    type: 'Article',
    href: 'https://www.ajss.nl/post/unheard-voices-violent-protests-in-democratic-countries-and-their-successes',
    note: 'Co-written, peer-reviewed',
  },
  {
    year: '2026',
    title: 'Sino-US AI Geopolitical Game Theory',
    venue: 'The Loop by ECPR',
    type: 'Policy',
    href: 'https://theloop.ecpr.eu/sino-us-ai-geopolitical-game-theory/',
    note: 'Policy commentary',
  },
  {
    year: '2026',
    title: 'Traduttore, Traditore: LLM Language-Dependent Safety Answers in Community Contexts',
    venue: 'Apart Research Global South Hackathon',
    type: 'Research',
    href: 'https://apartresearch.com/project/traduttore-traditore-llm-languagedependent-safety-answers-in-community-contexts-d8n7',
    note: 'Co-written pilot research',
  },
]

const supportLinks = [
  {
    label: 'Research',
    desc: 'Traduttore, Traditore: multilingual LLM safety in community contexts',
    href: 'https://manifund.org/projects/traduttore-traditore-llm-language-dependent-safety-answers-in-community-context',
  },
  {
    label: 'Field building',
    desc: 'Pilot Mangrove Initiative and related governance work',
    href: 'https://app.grantmaking.ai/projects/c82a0942-fb6a-472f-866d-36dbbba59816?from=%2Factively-fundraising',
  },
]

export default function Research() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <SectionHeading
        eyebrow="Research"
        title="Publications & Projects"
        subtitle="Work at the intersection of AI governance, political violence, and global governance, grounded in a plurality of Eurasian perspectives."
      />

      <section className="mb-14">
        <h2 className="font-serif text-xl text-themed-primary mb-6">Research strands</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {researchAreas.map(({ area, topics }) => (
            <div
              key={area}
              className="p-5 rounded-sm border border-themed"
              style={{ backgroundColor: 'var(--card-bg)' }}
            >
              <h3 className="font-serif text-lg text-themed-primary mb-3">{area}</h3>
              <ul className="space-y-2">
                {topics.map((topic) => (
                  <li key={topic} className="text-sm text-themed-muted leading-relaxed flex gap-2">
                    <span className="text-sea-deep dark:text-sand shrink-0">·</span>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <h2 className="font-serif text-xl text-themed-primary mb-6">Selected work</h2>
      <div className="space-y-6">
        {publications.map(({ year, title, venue, type, href, note }) => (
          <article
            key={title}
            className="group p-6 rounded-sm border border-themed hover:border-sea-deep/40 dark:hover:border-sand/30 transition-colors"
            style={{ backgroundColor: 'var(--card-bg)' }}
          >
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-2">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-lg text-themed-primary group-hover:text-sea-deep dark:group-hover:text-sand transition-colors"
              >
                {title}
              </a>
              <span className="text-xs uppercase tracking-wider text-sand dark:text-sand/80">
                {type}
              </span>
            </div>
            <p className="text-sm text-themed-muted mb-1">
              {venue} · {year}
            </p>
            {note && (
              <p className="text-sm text-themed-muted/80 italic">{note}</p>
            )}
          </article>
        ))}
      </div>

      <section className="mt-14">
        <h2 className="font-serif text-xl text-themed-primary mb-2">Support my projects</h2>
        <p className="text-sm text-themed-muted mb-6">
          Please support my projects with funding, endorsements, or upvotes.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {supportLinks.map(({ label, desc, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-sm border border-themed hover:border-sea-deep/40 dark:hover:border-sand/30 transition-colors group"
              style={{ backgroundColor: 'var(--card-bg)' }}
            >
              <span className="text-xs uppercase tracking-wider text-sea-deep dark:text-sand">
                {label}
              </span>
              <p className="font-serif text-themed-primary mt-2 group-hover:text-sea-deep dark:group-hover:text-sand transition-colors">
                {desc}
              </p>
              <span className="text-sm text-themed-muted mt-2 inline-block">
                View project →
              </span>
            </a>
          ))}
        </div>
      </section>

      <p className="mt-10 text-sm text-themed-muted font-serif">
        For more information, check out my{' '}
        <a
          href="https://orcid.org/0009-0001-6835-5532"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sea-deep dark:text-sand hover:opacity-80 underline underline-offset-2"
        >
          ORCID
        </a>{' '}
        or{' '}
        <a
          href="https://www.linkedin.com/in/jeanne-vincendeau/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sea-deep dark:text-sand hover:opacity-80 underline underline-offset-2"
        >
          LinkedIn
        </a>
        .
      </p>
    </div>
  )
}
