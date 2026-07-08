import Container from '../ui/Container';

const footerLinks = {
  Product: [
    { label: 'Tax Assist', href: '#solutions' },
    { label: 'Client Organizer', href: '#solutions' },
    { label: 'Document Intelligence', href: '#solutions' },
    { label: 'Review Workspace', href: '#solutions' },
    { label: 'Pricing', href: '#pricing' },
  ],
  Company: [
    { label: 'About', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Contact', href: '#' },
  ],
  Resources: [
    { label: 'Documentation', href: '#' },
    { label: 'API Reference', href: '#' },
    { label: 'Integrations', href: '#' },
    { label: 'Status', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Security', href: '#security' },
    { label: 'Compliance', href: '#security' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white" role="contentinfo">
      <Container>
        {/* Main footer content */}
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-6">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a
              href="#"
              className="flex items-center gap-2 text-lg font-semibold text-slate-950 tracking-tight"
              aria-label="SignalsHQ Home"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-teal-600">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 18 18"
                  fill="none"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="5" height="5" rx="1" fill="white" opacity="0.9" />
                  <rect x="9" y="2" width="5" height="5" rx="1" fill="white" opacity="0.6" />
                  <rect x="2" y="9" width="5" height="5" rx="1" fill="white" opacity="0.6" />
                  <rect x="9" y="9" width="5" height="5" rx="1" fill="white" opacity="0.9" />
                </svg>
              </div>
              SignalsHQ
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
              AI agents that prepare tax returns, organize documents, and cite IRS sources — so CPA firms can focus on review, not data entry.
            </p>

            {/* SOC 2 badge */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="text-emerald-600"
                aria-hidden="true"
              >
                <path
                  d="M8 1L2 4v4c0 3.5 2.5 6.5 6 7.5 3.5-1 6-4 6-7.5V4L8 1z"
                  fill="currentColor"
                  opacity="0.15"
                />
                <path
                  d="M8 1L2 4v4c0 3.5 2.5 6.5 6 7.5 3.5-1 6-4 6-7.5V4L8 1z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  fill="none"
                />
                <path d="M5.5 8l2 2 3-3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-xs font-medium text-slate-600">SOC 2 Type II Certified</span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-slate-900">{category}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-500 transition-colors hover:text-slate-700"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-100 py-6 sm:flex-row">
          <p className="text-sm text-slate-400">
            © {currentYear} SignalsHQ, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {/* Twitter / X */}
            <a
              href="#"
              className="text-slate-400 transition-colors hover:text-slate-600"
              aria-label="Follow us on X (Twitter)"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="#"
              className="text-slate-400 transition-colors hover:text-slate-600"
              aria-label="Follow us on LinkedIn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
