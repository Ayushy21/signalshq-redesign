import { useEffect, useState, useMemo, useCallback } from 'react';
import { cn } from '../../utils/cn';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { useInView } from '../../hooks/useInView';

interface LedgerGridProps {
  rows?: number;
  cols?: number;
  className?: string;
  animated?: boolean;
  variant?: 'hero' | 'background' | 'compact';
}

const DOC_LABELS = ['W-2', '1099', 'K-1', '§199A', '§179', 'Sch C', 'Sch E', 'Sch K', '1040', '941', '990', '8829'];

export default function LedgerGrid({
  rows = 8,
  cols = 16,
  className,
  animated = true,
  variant = 'hero',
}: LedgerGridProps) {
  const prefersReduced = useReducedMotion();
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [activeCells, setActiveCells] = useState<Set<string>>(new Set());

  const cells = useMemo(() => {
    const result: { row: number; col: number; label?: string; delay: number }[] = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const hasLabel = Math.random() > 0.75;
        result.push({
          row: r,
          col: c,
          label: hasLabel ? DOC_LABELS[Math.floor(Math.random() * DOC_LABELS.length)] : undefined,
          delay: (r * cols + c) * 30,
        });
      }
    }
    return result;
  }, [rows, cols]);

  const animateCells = useCallback(() => {
    if (prefersReduced || !animated || !isInView) return;

    let currentIndex = 0;
    const batchSize = 3;
    const interval = setInterval(() => {
      setActiveCells((prev) => {
        const next = new Set(prev);
        for (let i = 0; i < batchSize && currentIndex < cells.length; i++, currentIndex++) {
          const cell = cells[currentIndex];
          next.add(`${cell.row}-${cell.col}`);
        }
        return next;
      });

      if (currentIndex >= cells.length) {
        clearInterval(interval);
        // Reset after completion and restart
        setTimeout(() => {
          setActiveCells(new Set());
          setTimeout(() => animateCells(), 1000);
        }, 3000);
      }
    }, 60);

    return () => clearInterval(interval);
  }, [prefersReduced, animated, isInView, cells]);

  useEffect(() => {
    if (!isInView || !animated) return;
    const cleanup = animateCells();
    return cleanup;
  }, [isInView, animated, animateCells]);

  const sizeClasses = {
    hero: 'gap-1',
    background: 'gap-0.5',
    compact: 'gap-0.5',
  };

  const cellSizeClasses = {
    hero: 'w-4 h-4 rounded-[3px] text-[6px]',
    background: 'w-2.5 h-2.5 rounded-[2px] text-[4px]',
    compact: 'w-3 h-3 rounded-[2px] text-[5px]',
  };

  return (
    <div
      ref={ref}
      className={cn('flex flex-col', sizeClasses[variant], className)}
      aria-hidden="true"
      role="presentation"
    >
      {Array.from({ length: rows }, (_, r) => (
        <div key={r} className={cn('flex', sizeClasses[variant])}>
          {Array.from({ length: cols }, (_, c) => {
            const key = `${r}-${c}`;
            const isActive = activeCells.has(key);
            const cell = cells[r * cols + c];
            return (
              <div
                key={key}
                className={cn(
                  cellSizeClasses[variant],
                  'flex items-center justify-center font-mono font-medium transition-all duration-500',
                  isActive
                    ? cell?.label
                      ? 'bg-teal-500/20 text-teal-700 border border-teal-300/40'
                      : 'bg-teal-400/15'
                    : 'bg-slate-100/80'
                )}
              >
                {isActive && cell?.label && variant === 'hero' && (
                  <span className="leading-none">{cell.label}</span>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
