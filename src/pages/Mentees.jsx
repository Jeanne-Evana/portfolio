import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'

/* ────────────────────────────────────────────────
   EDIT HERE: programmes and mentees.
   • programmes with soon: true show a "stay tuned" note
   • mentee.program must match a programme id
   • status: 'completed' or 'ongoing'
──────────────────────────────────────────────── */

const programs = [
  { id: 'aixbio', label: 'AIxBio Africa', soon: false },
  {
    id: 'nous',
    label: 'Nous (AIxPhilo)',
    soon: true,
    note: 'Philosophy-meets-AI projects are on their way.',
  },
  {
    id: 'art',
    label: 'Meltem Fellows',
    soon: true,
    note: 'Mentees from this programme will appear here soon.',
  },
  {
    id: 'mercial',
    label: 'Mercial Fellowship',
    soon: true,
    note: 'Work on the Taiwan Question is being drafted as we speak.',
  },
]

const mentees = [
  {
    name: 'Frances Chinaza Agba',
    program: 'aixbio',
    status: 'completed',
    year: 'Pilot Cohort 2026',
    project: 'When Answering Is Not Enough',
    desc: 'Do frontier models stay safe and useful when public-health questions arrive in Nigerian Pidgin, Yorùbá and Igbo rather than English? Across 1,080 responses, almost nothing was refused, yet 79 still failed after engaging, a gap that refusal-only testing would never see.',
    href: 'https://aixbioafrica.org/publications/when-answering-is-not-enough',
  },
  {
    name: 'Tegan Jegede',
    program: 'aixbio',
    status: 'completed',
    year: 'Pilot Cohort 2026',
    project: 'Evaluating Confidence and Policy Collapse in Multimodal Agents',
    desc: 'How well does a medical AI know when it is wrong? Testing LLaVA-1.5-7B on African clinical questions and degraded medical images, this project found striking overconfidence and a model that never once chose to abstain. A case for locally grounded evaluation.',
    href: 'https://aixbioafrica.org/publications/evaluating-confidence-and-policy-collapse-in-multimodal-agents-towards-robust-auditing-standards-for-african-healthcare',
  },
]

const focusRing =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sea-deep dark:focus-visible:outline-sand'

const toRoman = (n) =>
  ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'][n - 1] || String(n)

export default function Mentees() {
  const [filter, setFilter] = useState('all')

  const visible = mentees.filter((m) => filter === 'all' || m.program === filter)
  const labelFor = (id) => programs.find((p) => p.id === id)?.label
  const selected = programs.find((p) => p.id === filter)
  const upcoming = programs.filter((p) => p.soon)

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <SectionHeading
        eyebrow="Mentorship"
        title="Mentees & their work"
        subtitle="Projects by the researchers I have had the pleasure of guiding. Each one is theirs; I only held the lantern."
      />

      <div role="group" aria-label="Filter mentees by programme" className="flex flex-wrap gap-2 mb-3">
        {[{ id: 'all', label: 'All' }, ...programs].map(({ id, label }) => {
          const active = filter === id
          return (
            <button
              key={id}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(id)}
              className={`px-4 py-2 min-h-[44px] rounded-full border text-sm font-medium transition-colors ${focusRing} ${
                active ? 'border-transparent' : 'border-themed-strong text-themed-muted hover:text-themed-primary'
              }`}
              style={
                active
                  ? { backgroundColor: 'var(--btn-primary-bg)', color: 'var(--btn-primary-text)' }
                  : undefined
              }
            >
              {label}
            </button>
          )
        })}
      </div>

      <p aria-live="polite" className="text-sm text-themed-muted italic font-serif mb-8">
        {visible.length === 1 ? '1 mentee shown' : `${visible.length} mentees shown`}
      </p>

      {visible.length > 0 && (
        <ul className="grid md:grid-cols-2 gap-6 list-none p-0">
          {visible.map(({ name, program, status, year, project, desc, href }, i) => (
            <li key={name}>
              <article
                className="h-full p-7 rounded-sm border border-themed relative"
                style={{ backgroundColor: 'var(--card-bg)' }}
              >
                <div className="flex items-baseline justify-between gap-4 mb-4">
                  <span
                    aria-hidden="true"
                    className="font-serif text-3xl italic text-sea-deep dark:text-sand opacity-70"
                  >
                    {toRoman(i + 1)}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-sand-deep dark:text-sand/80 text-right">
                    {labelFor(program)}
                  </span>
                </div>

                <h2 className="font-serif text-xl text-themed-primary mb-1">{name}</h2>
                <p className="text-sm text-themed-muted italic font-serif mb-4">
                  {status === 'completed' ? 'Completed' : 'In progress'} · {year}
                </p>

                <h3 className="font-serif text-lg text-themed-primary mb-2">{project}</h3>
                <p className="text-sm text-themed-muted leading-relaxed mb-5">{desc}</p>

                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block text-sm text-sea-deep dark:text-sand underline underline-offset-4 ${focusRing}`}
                >
                  Read the work →
                  <span className="sr-only"> by {name} (opens in a new tab)</span>
                </a>
              </article>
            </li>
          ))}
        </ul>
      )}

      {/* Stay tuned */}
      {filter === 'all' ? (
        <section className="mt-12 border-t border-themed pt-8" aria-labelledby="soon-heading">
          <h2 id="soon-heading" className="font-serif text-xl text-themed-primary mb-2">
            Stay tuned
          </h2>
          <p className="text-sm text-themed-muted mb-4 font-serif italic">
            New mentees are joining across these programmes. Their work will appear here.
          </p>
          <ul className="flex flex-wrap gap-2 list-none p-0">
            {upcoming.map(({ id, label }) => (
              <li
                key={id}
                className="px-4 py-2 rounded-full border border-dashed border-themed-strong text-sm text-themed-muted"
              >
                {label}
              </li>
            ))}
          </ul>
        </section>
      ) : (
        selected?.soon && (
          <div
            className="p-8 rounded-sm border border-dashed border-themed-strong text-center"
            style={{ backgroundColor: 'var(--card-bg)' }}
          >
            <p className="font-serif text-xl text-themed-primary mb-2">Stay tuned</p>
            <p className="font-serif italic text-themed-muted">{selected.note}</p>
          </div>
        )
      )}
    </div>
  )
}
