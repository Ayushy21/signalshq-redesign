import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import Container from '../components/ui/Container';
import Badge from '../components/ui/Badge';
import LedgerGrid from '../components/ui/LedgerGrid';
import { useReducedMotion } from '../hooks/useReducedMotion';

const FIRM_LOGOS = [
  { initials: 'M&P', name: 'Mitchell & Partners' },
  { initials: 'BCG', name: 'Baker Consulting Group' },
  { initials: 'LRT', name: 'Lawson Ross Tax' },
  { initials: 'CFO', name: 'CFO Advisory Co' },
  { initials: 'PKS', name: 'Park Kim Stein' },
];

export default function Hero() {
  const prefersReduced = useReducedMotion();

  const fadeUp = prefersReduced
    ? {}
    : {
        initial: { opacity: 0, y: 24, scale: 0.95 },
        animate: { opacity: 1, y: 0, scale: 1 },
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
      };

  const stagger = (delay: number) =>
    prefersReduced
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, ease: 'easeOut' as const, delay },
        };

  return (
    <section
      aria-label="SignalsHQ hero"
      className="relative overflow-hidden bg-slate-950 py-24 lg:py-32"
    >
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-500/20 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 h-[400px] w-[400px] translate-x-1/3 rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none" />

      {/* Background LedgerGrid */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.08] mix-blend-screen">
        <LedgerGrid variant="hero" rows={12} cols={20} animated={!prefersReduced} />
      </div>

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column — Text Content */}
          <div className="max-w-xl">
            <motion.div {...stagger(0)}>
              <Badge variant="teal" className="mb-6 border-teal-500/30 bg-teal-500/10 backdrop-blur-md">
                AI Agents for CPA Firms
              </Badge>
            </motion.div>

            <motion.h1
              {...stagger(0.08)}
              className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]"
            >
              Your firm's tax knowledge, working 24/7.
            </motion.h1>

            <motion.p
              {...stagger(0.16)}
              className="mb-8 text-lg leading-relaxed text-slate-400"
            >
              SignalsHQ AI agents read documents, pull IRS citations, and prepare
              workpapers — so your team reviews work instead of doing it from scratch.
            </motion.p>

            <motion.div
              {...stagger(0.24)}
              className="flex flex-wrap items-center gap-4"
            >
              <Button variant="primary" size="lg">
                Book a Demo
              </Button>
              <Button variant="secondary" size="lg" href="#workflow" className="bg-slate-900/50 text-white border-slate-700 hover:bg-slate-800">
                See How It Works
                <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>

            {/* Social Proof Bar */}
            <motion.div
              {...stagger(0.32)}
              className="mt-12 border-t border-slate-800 pt-8"
            >
              <p className="mb-4 text-sm font-medium text-slate-500">
                Trusted by 50+ CPA firms
              </p>
              <div className="flex flex-wrap items-center gap-3">
                {FIRM_LOGOS.map((firm) => (
                  <div
                    key={firm.initials}
                    className="flex h-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/50 px-4 backdrop-blur-sm"
                    aria-label={firm.name}
                  >
                    <span className="text-sm font-semibold tracking-wide text-slate-400">
                      {firm.initials}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column — Product Image */}
          <motion.div {...fadeUp} className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[540px]">
              {/* Outer glow for image */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-teal-500/30 to-indigo-500/30 blur-2xl opacity-50" />
              
              <div className="relative rounded-2xl border border-slate-800 bg-slate-900/50 p-2 shadow-2xl backdrop-blur-xl">
                <img 
                  src="/hero-dashboard.png" 
                  alt="SignalsHQ Dashboard Visualization" 
                  className="rounded-xl w-full h-auto object-cover border border-slate-800/50"
                  loading="eager"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
