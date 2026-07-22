import { NavLink, Outlet } from 'react-router-dom'
import SurpriseLink from './SurpriseLink'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/research', label: 'Research' },
  { to: '/contact', label: 'Contact' },
]

export default function Layout() {
  return (
    <div className="library-bg shelf-edge min-h-screen flex flex-col">
      <header
        className="border-b border-themed sticky top-0 z-50 backdrop-blur-sm"
        style={{ backgroundColor: 'var(--header-bg)' }}
      >
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <NavLink to="/" className="group min-w-0">
            <span className="font-serif text-xl sm:text-2xl font-semibold text-themed-primary tracking-tight group-hover:text-sea-deep dark:group-hover:text-sand transition-colors">
              Jeanne <span className="text-sea-deep dark:text-sand/80">容慧</span> Vincendeau
            </span>
            <span className="hidden sm:block text-xs text-themed-muted tracking-widest uppercase mt-0.5">
              Research · Policy · Communication
            </span>
          </NavLink>

          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <nav className="flex items-center gap-1 sm:gap-5">
              {navLinks.map(({ to, label, end }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    `text-sm font-medium px-2 py-1 transition-colors ${
                      isActive
                        ? 'text-themed-primary border-b-2 border-sea-deep dark:border-sand'
                        : 'text-themed-muted hover:text-themed-primary'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="wave-divider border-t border-themed mt-auto">
        <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm font-serif italic" style={{ color: 'var(--footer-quote)' }}>
          Cedant arma togae, concedat laurea linguae.
          </p>
          <SurpriseLink />
        </div>
      </footer>
    </div>
  )
}
