import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import SectionHeader from '../components/ui/SectionHeader';
import { metrics } from '../constants/metrics';
import { useAnimatedCounter } from '../hooks/useAnimatedCounter';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { cn } from '../utils/cn';
import type { Metric } from '../types';

function MetricCard({
  metric,
  index,
  isLast,
  prefersReduced,
}: {
  metric: Metric;
  index: number;
  isLast: boolean;
  prefersReduced: boolean;
}) {
  const [ref, count] = useAnimatedCounter(metric.numericValue, 2000, true);

  const formatCount = (value: number): string => {
    if (value >= 1000) {
      return value.toLocaleString();
    }
    return value.toString();
  };

  return (
    <motion.div
      ref={ref}
      initial={prefersReduced ? {} : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.5,
        ease: 'easeOut' as const,
        delay: prefersReduced ? 0 : index * 0.08,
      }}
      className={cn(
        'flex flex-col items-center text-center',
        !isLast && 'border-b border-slate-800 pb-8 lg:border-b-0 lg:pb-0 lg:border-r lg:pr-0'
      )}
    >
      <p className="font-mono text-4xl font-bold tracking-tight text-white">
        {metric.prefix && (
          <span className="text-slate-500">{metric.prefix}</span>
        )}
        {formatCount(count)}
        {metric.suffix && (
          <span className="text-slate-500">{metric.suffix}</span>
        )}
      </p>
      <p className="mt-2 text-sm text-slate-400">{metric.label}</p>
    </motion.div>
  );
}

export default function Metrics() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="metrics" className="bg-slate-950 py-24 lg:py-32">
      <Container>
        <SectionHeader
          badge="Impact"
          title="The numbers speak."
          className="[&>h2]:text-white [&>p]:text-slate-400"
        />

        <div
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0"
          role="list"
          aria-label="Key metrics"
        >
          {metrics.map((metric, index) => (
            <MetricCard
              key={metric.label}
              metric={metric}
              index={index}
              isLast={index === metrics.length - 1}
              prefersReduced={prefersReduced}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
