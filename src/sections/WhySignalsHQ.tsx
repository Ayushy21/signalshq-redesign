import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import Container from '../components/ui/Container';
import SectionHeader from '../components/ui/SectionHeader';
import { comparisonRows } from '../constants/features';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { cn } from '../utils/cn';

export default function WhySignalsHQ() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="comparison" className="relative overflow-hidden bg-slate-900 py-24 lg:py-32">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-teal-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] translate-x-1/3 rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeader
          badge="Why SignalsHQ"
          title="Not another tax software. A new way to work."
          description="See how SignalsHQ AI agents compare to traditional tax preparation workflows."
          className="[&>h2]:text-white [&>p]:text-slate-400"
        />

        {/* Desktop / Tablet Table */}
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' as const }}
          className="hidden sm:block"
        >
          <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-950/80 backdrop-blur-md shadow-2xl">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/50">
                  <th className="px-6 py-4 font-semibold text-white">
                    Feature
                  </th>
                  <th className="px-6 py-4 font-semibold text-white">
                    Traditional Software
                  </th>
                  <th className="px-6 py-4 font-semibold text-white">
                    SignalsHQ AI Agents
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, index) => (
                  <tr
                    key={row.feature}
                    className={cn(
                      'border-b border-slate-800/50 last:border-b-0',
                      index % 2 === 0 ? 'bg-transparent' : 'bg-slate-900/30'
                    )}
                  >
                    <td className="px-6 py-4 font-medium text-white">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-slate-500">
                      <span className="flex items-center gap-2">
                        <X className="h-4 w-4 shrink-0 text-red-500/70" />
                        {row.traditional}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-300">
                      <span className="flex items-center gap-2">
                        <Check className="h-4 w-4 shrink-0 text-teal-500" />
                        {row.signalshq}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Mobile Cards */}
        <div className="space-y-4 sm:hidden">
          {comparisonRows.map((row, index) => (
            <motion.div
              key={row.feature}
              initial={prefersReduced ? {} : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.4,
                ease: 'easeOut' as const,
                delay: prefersReduced ? 0 : index * 0.05,
              }}
              className="rounded-xl border border-slate-800 bg-slate-950/80 p-5 backdrop-blur-md shadow-xl"
            >
              <h3 className="mb-3 text-sm font-semibold text-white">
                {row.feature}
              </h3>

              <div className="space-y-2">
                <div className="flex items-start gap-2 text-sm text-slate-500">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-red-500/70" />
                  <span>{row.traditional}</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-slate-300">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" />
                  <span>{row.signalshq}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
