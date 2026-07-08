import { motion } from 'framer-motion';
import {
  Target,
  ScrollText,
  Shield,
  Bot,
  Zap,
  Plug,
  UsersRound,
  Repeat,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Container from '../components/ui/Container';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import { features } from '../constants/features';
import { useReducedMotion } from '../hooks/useReducedMotion';

const iconMap: Record<string, LucideIcon> = {
  Target,
  ScrollText,
  Shield,
  Bot,
  Zap,
  Plug,
  UsersRound,
  Repeat,
};

export default function FeatureGrid() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="features" className="relative overflow-hidden bg-slate-900 py-24 lg:py-32">
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 h-96 w-96 -translate-y-1/2 rounded-full bg-teal-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 h-96 w-96 translate-y-1/2 rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeader
          badge="Features"
          title="Built for how CPA firms actually work."
          className="[&>h2]:text-white [&>p]:text-slate-400"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];

            return (
              <motion.div
                key={feature.title}
                initial={prefersReduced ? {} : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.45,
                  ease: 'easeOut' as const,
                  delay: prefersReduced ? 0 : index * 0.05,
                }}
              >
                <Card className="h-full bg-slate-950/80 border-slate-800 backdrop-blur-md shadow-2xl">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-500/10 border border-teal-500/20">
                    {Icon && <Icon className="h-5 w-5 text-teal-400" />}
                  </div>
                  <h3 className="text-base font-medium text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {feature.description}
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
