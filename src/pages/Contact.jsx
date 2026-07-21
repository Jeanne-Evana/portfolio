import SectionHeading from '../components/SectionHeading'

const links = [
  { label: 'Email', value: 'Add your email', href: 'mailto:' },
  { label: 'Academic profile', value: 'Google Scholar / ORCID', href: '#' },
  { label: 'LinkedIn', value: 'Jeanne Vincendeau', href: '#' },
]

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <SectionHeading
        eyebrow="Contact"
        title="Let's correspond"
        subtitle="For collaborations, speaking invitations, media inquiries, or thoughtful conversation — I welcome your note."
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
            I am especially interested in partnerships with scholars across Eurasia,
            policy practitioners, and organisations working on AI governance, political
            violence, or multilingual technology policy. If your project touches any of
            these strands, I would like to hear from you.
          </p>
          <p className="text-sm italic font-serif opacity-70">
            Response times vary during fieldwork and teaching terms — thank you for your patience.
          </p>
        </div>
      </div>
    </div>
  )
}
