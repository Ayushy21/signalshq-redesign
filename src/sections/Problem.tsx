import { motion } from 'framer-motion';
import {
  Mail,
  FileText,
  AlertTriangle,
  Clock,
  FolderOpen,
  Calculator,
} from 'lucide-react';
import Container from '../components/ui/Container';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import { painPoints } from '../constants/features';
import { useReducedMotion } from '../hooks/useReducedMotion';

const iconMap: Record<string, React.ComponentType<any>> = {
  Mail,
  FileText,
  AlertTriangle,
  Clock,
  FolderOpen,
  Calculator,
};

export default function Problem() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="problem" className="relative overflow-hidden bg-slate-900 py-24 lg:py-32">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 h-96 w-96 -translate-y-1/2 rounded-full bg-red-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 translate-y-1/2 rounded-full bg-amber-500/10 blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeader
          badge="The Problem"
          title="Tax season shouldn't mean 80-hour weeks."
          description="Your team spends more time organizing documents and re-entering data than actually reviewing returns."
          className="[&>h2]:text-white [&>p]:text-slate-400"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {painPoints.map((point, index) => {
            const Icon = iconMap[point.icon];

            return (
              <motion.div
                key={point.label}
                initial={prefersReduced ? {} : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.45,
                  ease: 'easeOut' as const,
                  delay: prefersReduced ? 0 : index * 0.07,
                }}
              >
                <Card hover={false} className="h-full bg-slate-950/80 border-slate-800 backdrop-blur-md shadow-2xl">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 border border-red-500/20">
                    {Icon && (
                      <Icon
                        className="h-5 w-5 text-red-400"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <h3 className="text-base font-semibold text-white">
                    {point.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {point.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
