import { Link } from 'react-router-dom'

export default function SurpriseLink() {
  return (
    <Link
      to="/surprise"
      className="group relative text-sm italic transition-colors"
      style={{ color: 'var(--footer-quote)' }}
    >
      <span className="relative z-10 group-hover:text-sea-deep dark:group-hover:text-sand transition-colors">
        click here for a surprise
        <span className="inline-block ml-1 transition-transform group-hover:translate-x-0.5">
          →
        </span>
      </span>
    </Link>
  )
}
