import SectionHeading from '../components/SectionHeading'

const links = [
  { label: 'Email', value: 'j.vincendeau@studenti.luiss.it', href: 'mailto:j.vincendeau@studenti.luiss.it' },
  { label: 'Academic profile', value: 'ORCID', href: 'https://orcid.org/0009-0001-6835-5532' },
  { label: 'LinkedIn', value: 'Jeanne Vincendeau', href: 'https://www.linkedin.com/in/jeanne-vincendeau/' },
]

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <SectionHeading
        eyebrow="Contact"
        title="Keep in touch"
        subtitle="For collaborations, speaking invitations, or getting to know my work better."
      />

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-4">
          {links.map(({ label, value, href }) => (
            <a
              key={label}
              href={href}
              className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 p-4 rounded-sm border border-themed hover:border-sea-deep/40 dark:hover:border-sand/30 transition-colors group"
              style={{ backgroundColor: 'var(--card-bg)' }}
            >
              <span className="text-xs uppercase tracking-wider text-sea-deep dark:text-sand w-32 shrink-0">
                {label}
              </span>
              <span className="text-themed-primary group-hover:text-sea-deep dark:group-hover:text-sand transition-colors">
                {value}
              </span>
            </a>
          ))}
        </div>

        <div
          className="p-8 rounded-sm border border-themed"
          style={{
            backgroundColor: 'var(--btn-primary-bg)',
            color: 'var(--btn-primary-text)',
          }}
        >
          <h2 className="font-serif text-2xl mb-4">A note on collaboration</h2>
          <p className="text-sm leading-relaxed mb-6 opacity-90">
            I am interested in partnerships on global AI governance,
            AI geopolitics and political violence. If you are a scholar, policy practitioner, or organisation and your project touches any of
            these strands, I would be delighted to hear from you.
          </p>
          <p className="text-sm italic font-serif opacity-70">
            Response times may vary, thank you for your patience.
          </p>
        </div>
      </div>
    </div>
  )
}
