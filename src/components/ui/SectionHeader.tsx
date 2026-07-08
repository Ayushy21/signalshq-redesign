import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import type { SectionHeaderProps } from '../../types';
import Badge from './Badge';

export default function SectionHeader({
  badge,
  title,
  description,
  align = 'center',
  className,
}: SectionHeaderProps) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      initial={prefersReduced ? {} : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn(
        'mb-16',
        align === 'center' && 'text-center',
        className
      )}
    >
      {badge && (
        <div className={cn('mb-4', align === 'center' && 'flex justify-center')}>
          <Badge variant="teal">{badge}</Badge>
        </div>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-lg text-slate-500 leading-relaxed',
            align === 'center' && 'mx-auto max-w-2xl'
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
