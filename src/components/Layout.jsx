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
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-md"
        style={{ backgroundColor: 'var(--bg-surface)', color: 'var(--text-primary)' }}
      >
        Skip to content
      </a>
      <header
        className="border-b border-themed sticky top-0 z-50 backdrop-blur-sm"
        style={{ backgroundColor: 'var(--header-bg)' }}
      >
        <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <NavLink to="/" className="group min-w-0">
            <span className="font-serif text-lg sm:text-2xl font-semibold text-themed-primary tracking-tight group-hover:text-sea-deep dark:group-hover:text-sand transition-colors">
              Jeanne <span lang="zh" className="text-sea-deep dark:text-sand/80">容慧</span> Vincendeau
            </span>

          </NavLink>

          <div className="flex items-center justify-between w-full sm:w-auto gap-2 sm:gap-4 shrink-0">
            <nav className="flex items-center gap-1 sm:gap-5">
              {navLinks.map(({ to, label, end }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    `text-sm font-medium px-3 py-2 rounded-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sea-deep dark:focus-visible:outline-sand ${
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

      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        <Outlet />
      </main>

      <footer className="wave-divider border-t border-themed mt-auto">
        <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-sm font-serif italic"
            style={{ color: 'var(--footer-quote)' }}
          >
            Cedant arma togae, concedat laurea linguae.
          </p>

          <SurpriseLink />
        </div>
      </footer>
    </div>
  )
}