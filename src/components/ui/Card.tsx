import { cn } from '../../utils/cn';
import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

export default function Card({
  children,
  className,
  hover = true,
  padding = 'md',
}: CardProps) {
  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      className={cn(
        'rounded-xl border border-slate-200/80 bg-white shadow-[var(--shadow-card)]',
        hover && 'transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)] animated-glow-border',
        paddings[padding],
        className
      )}
    >
      {children}
    </div>
  );
}
