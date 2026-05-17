const TILES = [
  {
    href: 'https://calendly.com/upsunday/discovery-call',
    label: 'Book an intro call',
    className: 'tile wide-3 featured',
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M8 3v4M16 3v4M3 10h18" />
      </svg>
    ),
  },
  {
    href: 'mailto:team@upsunday.co?subject=Project%20inquiry',
    label: 'Tell us about your project',
    className: 'tile wide-3',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
  },
  {
    href: 'mailto:team@upsunday.co?subject=Brand%20inquiry',
    label: 'Brand inquiries',
    className: 'tile wide-2',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
        <path d="M12 6l2 4 4 2-4 2-2 4-2-4-4-2 4-2z" />
      </svg>
    ),
  },
  {
    href: 'https://x.com/jakeuiux',
    ariaLabel: 'X',
    className: 'tile wide-1 icon-only',
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    href: 'https://instagram.com/jakeuiux',
    ariaLabel: 'Instagram',
    className: 'tile wide-1 icon-only',
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    href: 'https://www.linkedin.com/in/jacob-young9/',
    label: 'LinkedIn',
    className: 'tile wide-2',
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z" />
      </svg>
    ),
  },
]

export default function App() {
  return (
    <main>
      <section className="profile">
        <img
          className="avatar"
          src="/avatar-480.jpg"
          alt="Jake Young"
          width="480"
          height="480"
          fetchpriority="high"
          decoding="async"
        />

        <h1 className="name">Jake Young</h1>
        <p className="handle">
          @jakeuiux
          <svg className="verified" viewBox="0 0 24 24" aria-label="Verified" role="img">
            <path d="M12 1.5l2.3 2.1 3.1-.3.9 3 3 .9-.3 3.1L23 12l-2.1 2.3.3 3.1-3 .9-.9 3-3.1-.3L12 22.5l-2.3-2.1-3.1.3-.9-3-3-.9.3-3.1L1 12l2.1-2.3-.3-3.1 3-.9.9-3 3.1.3z" fill="#4A90E2" />
            <path d="M8 12.5l2.5 2.5 5-5.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        </p>
        <p className="bio">
          Founder &amp; Creative Director @ UpSunday<br />
          Brand, Web &amp; Motion for Ambitious&nbsp;Companies<br />
          Winner of Multiple{' '}
          <a href="https://www.awwwards.com/" target="_blank" rel="noopener noreferrer">Awwwards</a>
          {' '}&amp;{' '}
          <a href="https://www.cssdesignawards.com/" target="_blank" rel="noopener noreferrer">CSSDA</a>
          {' '}Honors
        </p>
      </section>

      <nav className="tile-grid">
        {TILES.map((tile, i) => (
          <a
            key={i}
            href={tile.href}
            className={tile.className}
            {...(tile.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            {...(tile.ariaLabel ? { 'aria-label': tile.ariaLabel } : {})}
          >
            {tile.icon}
            {tile.label && <span>{tile.label}</span>}
          </a>
        ))}
      </nav>

      <div className="footer">
        <span>© 2026 UpSunday · Made on Sunday</span>
      </div>
    </main>
  )
}
