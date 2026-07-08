import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navItems } from '../../constants/navigation';
import Button from '../ui/Button';
import Container from '../ui/Container';
import { cn } from '../../utils/cn';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/70 backdrop-blur-xl border-b border-slate-200/50 shadow-sm'
          : 'bg-transparent'
      )}
      role="banner"
    >
      <Container>
        <nav
          className="flex h-16 items-center justify-between lg:h-[72px]"
          aria-label="Primary navigation"
        >
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 text-xl font-semibold text-slate-950 tracking-tight"
            aria-label="SignalsHQ Home"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-600">
              <svg
                width="18"
                height="18"
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
            <span>SignalsHQ</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 hover:bg-slate-50"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <Button variant="primary" size="sm" href="#cta">
              Book a Demo
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 transition-colors hover:bg-slate-100 lg:hidden cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={prefersReduced ? {} : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReduced ? {} : { opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 border-b border-slate-200 bg-white shadow-lg lg:hidden"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <Container>
              <div className="flex flex-col gap-1 py-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="rounded-lg px-4 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-900"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="mt-3 border-t border-slate-100 pt-4">
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full"
                    href="#cta"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Book a Demo
                  </Button>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
