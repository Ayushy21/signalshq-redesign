import { cn } from '../../utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'teal' | 'amber' | 'coming-soon';
  className?: string;
}

export default function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default:
      'bg-slate-100 text-slate-600 border-slate-200',
    teal:
      'bg-teal-50 text-teal-700 border-teal-200',
    amber:
      'bg-amber-50 text-amber-700 border-amber-200',
    'coming-soon':
      'bg-slate-900 text-white border-slate-800',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium tracking-wide uppercase',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
