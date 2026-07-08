import { motion } from 'framer-motion';
import {
  MessageSquareText,
  FolderKanban,
  ScanSearch,
  ClipboardCheck,
  Users,
} from 'lucide-react';
import Container from '../components/ui/Container';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { products } from '../constants/features';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { useInView } from '../hooks/useInView';

const iconMap: Record<string, React.ComponentType<any>> = {
  MessageSquareText,
  FolderKanban,
  ScanSearch,
  ClipboardCheck,
  Users,
};

export default function ProductOverview() {
  const prefersReduced = useReducedMotion();
  const [ref, isInView] = useInView({ threshold: 0.1, once: true });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReduced ? 0 : 0.07,
      },
    },
  };

  const cardVariants = {
    hidden: prefersReduced
      ? { opacity: 1 }
      : { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section id="solutions" className="relative overflow-hidden bg-slate-950 py-24 lg:py-32" aria-label="Products">
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/3 rounded-full bg-teal-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-[500px] w-[500px] translate-y-1/3 -translate-x-1/3 rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeader
          badge="Products"
          title="Five agents. One platform."
          description="Each agent is purpose-built for a specific part of the tax workflow. Together, they handle preparation so your team handles review."
          className="[&>h2]:text-white [&>p]:text-slate-400"
        />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6"
        >
          {products.map((product, index) => {
            const Icon = iconMap[product.icon];

            // First row: 2 cards spanning 3 cols each. Second row: 3 cards spanning 2 cols each.
            const isFirstRow = index < 2;
            const colSpanClass = isFirstRow ? 'lg:col-span-3' : 'lg:col-span-2';

            return (
              <motion.div
                key={product.title}
                variants={cardVariants}
                className={colSpanClass}
              >
                <motion.div
                  whileHover={prefersReduced ? {} : { scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="h-full"
                >
                  <Card className="relative h-full bg-slate-900/50 border-slate-800 backdrop-blur-sm" padding="lg" hover>
                    <div className="mb-4 flex items-start justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal-500/10 text-teal-400 border border-teal-500/20">
                        {Icon && <Icon className="h-5 w-5" strokeWidth={1.75} />}
                      </div>
                      {product.comingSoon && (
                        <Badge variant="coming-soon" className="border-amber-500/30 bg-amber-500/10 text-amber-400">Coming Soon</Badge>
                      )}
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-white">
                      {product.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-400">
                      {product.description}
                    </p>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
