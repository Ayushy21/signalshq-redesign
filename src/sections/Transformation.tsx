import { motion } from 'framer-motion';
import { X, ArrowRight, Check, ChevronRight } from 'lucide-react';
import Container from '../components/ui/Container';
import SectionHeader from '../components/ui/SectionHeader';
import LedgerGrid from '../components/ui/LedgerGrid';
import { transformationStages } from '../constants/features';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { cn } from '../utils/cn';

const phaseConfig = {
  before: {
    headerBg: 'bg-red-500/10',
    headerText: 'text-red-400',
    headerBorder: 'border-red-500/20',
    icon: X,
    iconColor: 'text-red-400',
    iconBg: 'bg-red-500/10',
    cardBorder: 'border-slate-800',
    cardShadow: 'shadow-sm',
    cardScale: '',
  },
  transition: {
    headerBg: 'bg-teal-500/10',
    headerText: 'text-teal-400',
    headerBorder: 'border-teal-500/20',
    icon: ArrowRight,
    iconColor: 'text-teal-400',
    iconBg: 'bg-teal-500/10',
    cardBorder: 'border-teal-500/50',
    cardShadow: 'shadow-[0_0_30px_rgba(20,184,166,0.15)]',
    cardScale: 'lg:scale-105',
  },
  after: {
    headerBg: 'bg-emerald-500/10',
    headerText: 'text-emerald-400',
    headerBorder: 'border-emerald-500/20',
    icon: Check,
    iconColor: 'text-emerald-400',
    iconBg: 'bg-emerald-500/10',
    cardBorder: 'border-slate-800',
    cardShadow: 'shadow-sm',
    cardScale: '',
  },
} as const;

function ArrowConnector() {
  return (
    <div className="hidden items-center lg:flex" aria-hidden="true">
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 bg-slate-900 shadow-sm">
        <ChevronRight className="h-5 w-5 text-slate-500" />
      </div>
    </div>
  );
}

export default function Transformation() {
  const prefersReduced = useReducedMotion();

  const cardVariants = {
    hidden: prefersReduced
      ? {}
      : { opacity: 0, y: 16 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut' as const,
        delay: i * 0.08,
      },
    }),
  };

  return (
    <section
      id="transformation"
      className="relative overflow-hidden bg-slate-950 py-24 lg:py-32"
      aria-labelledby="transformation-heading"
    >
      {/* Background LedgerGrid */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.04]">
        <LedgerGrid variant="hero" rows={15} cols={20} animated={!prefersReduced} />
      </div>

      <Container className="relative z-10">
        <SectionHeader
          badge="The Transformation"
          title="From inbox chaos to structured output."
          className="[&>h2]:bg-gradient-to-br [&>h2]:from-white [&>h2]:to-slate-400 [&>h2]:bg-clip-text [&>h2]:text-transparent [&>p]:text-slate-400"
        />

        <div
          className="flex flex-col items-stretch gap-6 lg:flex-row lg:items-center lg:justify-center lg:gap-0"
          role="list"
          aria-label="Transformation stages"
        >
          {transformationStages.map((stage, index) => {
            const config = phaseConfig[stage.phase];
            const Icon = config.icon;

            return (
              <div
                key={stage.phase}
                className="flex flex-col items-center gap-6 lg:flex-row"
                role="listitem"
              >
                {/* Arrow connector before center and after columns on desktop */}
                {index > 0 && <ArrowConnector />}

                <motion.div
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  variants={cardVariants}
                  className={cn(
                    'w-full overflow-hidden rounded-xl border bg-slate-900/80 backdrop-blur-md',
                    'lg:w-[340px]',
                    config.cardBorder,
                    config.cardShadow,
                    config.cardScale,
                    stage.phase === 'transition' && 'relative z-10 bg-slate-900/95 border-teal-500/50'
                  )}
                >
                  {/* Card header */}
                  <div
                    className={cn(
                      'border-b border-slate-800 px-5 py-3.5',
                      config.headerBg,
                      config.headerBorder
                    )}
                  >
                    <h3
                      className={cn(
                        'text-sm font-semibold tracking-wide',
                        config.headerText
                      )}
                    >
                      {stage.title}
                    </h3>
                  </div>

                  {/* Card items */}
                  <ul className="divide-y divide-slate-800/50 p-0" aria-label={stage.title}>
                    {stage.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 px-5 py-3"
                      >
                        <span
                          className={cn(
                            'mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full',
                            config.iconBg
                          )}
                        >
                          <Icon
                            className={cn('h-3 w-3', config.iconColor)}
                            strokeWidth={2.5}
                          />
                        </span>
                        <span className="text-sm leading-relaxed text-slate-400">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Mobile flow arrows (visible only on mobile between stacked cards) */}
        <style>{`
          @media (max-width: 1023px) {
            [role="list"] > [role="listitem"]:not(:last-child)::after {
              content: '';
              display: block;
              width: 1px;
              height: 24px;
              background-color: #1e293b;
              margin: 0 auto;
            }
          }
        `}</style>
      </Container>
    </section>
  );
}
