import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import LedgerGrid from '../components/ui/LedgerGrid';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function FinalCTA() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="cta" className="relative overflow-hidden bg-slate-950 py-24 lg:py-32">
      {/* Background LedgerGrid */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.05]">
        <LedgerGrid
          rows={12}
          cols={24}
          variant="background"
          animated={false}
        />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={
            prefersReduced
              ? { duration: 0 }
              : { duration: 0.6, ease: 'easeOut' as const }
          }
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mb-4 flex justify-center">
            <Badge variant="teal">Get Started</Badge>
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            Stop doing the work your AI&nbsp;agents should handle.
          </h2>

          <p className="mt-4 text-lg leading-relaxed text-slate-400">
            Book a 15-minute demo. See your firm&rsquo;s documents processed in
            real&nbsp;time.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="primary" size="lg">
              Book a Demo
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="border-slate-700 bg-transparent text-white hover:border-slate-500 hover:bg-slate-800/50"
            >
              Schedule a Consultation
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
