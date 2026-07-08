import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Lock,
  KeyRound,
  ClipboardList,
  Scale,
  Database,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Container from '../components/ui/Container';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import { securityFeatures } from '../constants/features';
import { useReducedMotion } from '../hooks/useReducedMotion';

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  Lock,
  KeyRound,
  ClipboardList,
  Scale,
  Database,
};

export default function Security() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="security" className="bg-slate-950 py-24 lg:py-32">
      <Container>
        <SectionHeader
          badge="Security"
          title="Your clients trust you. You can trust us."
          description="Enterprise-grade security built for firms that handle sensitive financial data."
          className="[&_h2]:text-white [&_p]:text-slate-400 [&_span]:bg-slate-800 [&_span]:text-slate-300 [&_span]:border-slate-700"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {securityFeatures.map((feature, index) => {
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
                  delay: prefersReduced ? 0 : index * 0.07,
                }}
              >
                <Card
                  className="bg-slate-900/50 border-slate-800 hover:bg-slate-900/70"
                  padding="lg"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-800">
                    {Icon && <Icon className="h-6 w-6 text-white" strokeWidth={1.5} />}
                  </div>
                  <h3 className="text-base font-semibold text-white">
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
