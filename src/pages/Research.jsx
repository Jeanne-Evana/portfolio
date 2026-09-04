import SectionHeading from '../components/SectionHeading'

const publications = [
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
    title:
      'Towards a Moral Realist Order: Chinese and Russian Approaches to the Syrian and Sudanese Civil Wars',
    venue: 'General Conference ECPR',
    type: 'Conference',
    href: 'https://ecpr.eu/Events/Event/PaperDetails/87440',
    note: 'Conference paper',
  },
  {
    year: '2025',
    title:
      'Unheard Voices: Violent Protests in Democratic Countries and Their Successes',
    venue: 'Amsterdam Journal of Social Sciences (AJSS)',
    type: 'Article',
    href:
      'https://www.ajss.nl/post/unheard-voices-violent-protests-in-democratic-countries-and-their-successes',
    note: 'Co-written, peer-reviewed',
  },
  {
    year: '2026',
    title:
      'A Glimpse into the Future, Or How to Treat AI with Due Empathy',
    venue: 'Apart Research Digital Minds',
    type: 'Essay',
    href:
      'https://docs.google.com/document/d/1Z_vqBXKKIHiU6czUCBkHw6XY3qXkGwm8VO9eG7LjZJA/edit?usp=sharing',
    note: 'Interdisciplinary commentary',
  },
  {
    year: '2026',
    title:
      'A Blackout During French Presidential Elections: AI Secret Loyalties and Cooptation',
    venue: 'Apart Research Secret Loyalties',
    type: 'Essay',
    href:
      'https://apartresearch.com/project/a-blackout-during-french-presidential-elections-ai-secret-loyalties-and-cooptation-tjaw',
    note: 'Scenario writing',
  },
  {
    year: '2026',
    title:
      'Traduttore, Traditore: LLM Language-Dependent Safety Answers in Community Contexts',
    venue: 'Apart Research Global South Hackathon',
    type: 'Research',
    href:
      'https://apartresearch.com/project/traduttore-traditore-llm-languagedependent-safety-answers-in-community-contexts-d8n7',
    note: 'Co-written pilot research',
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

      <section className="mt-14">
        <h2 className="font-serif text-xl text-themed-primary mb-6">
          Selected work
        </h2>

        <div className="space-y-6">
          {publications.map(
            ({ year, title, venue, type, href, note }) => (
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
                    className="font-serif text-lg text-themed-primary group-hover:text-sea-deep dark:group-hover:text-sand transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sea-deep dark:focus-visible:outline-sand"
                  >
                    {title}
                    <span className="sr-only">
                      {' '}
                      (opens in a new tab)
                    </span>
                  </a>

                  <span className="text-xs uppercase tracking-wider text-sand-deep dark:text-sand/80">
                    {type}
                  </span>

                </div>

                <p className="text-sm text-themed-muted mb-1">
                  {venue} · {year}
                </p>

                {note && (
                  <p className="text-sm text-themed-muted/80 italic">
                    {note}
                  </p>
                )}
              </article>
            )
          )}
        </div>
      </section>

    </div>
  )
}