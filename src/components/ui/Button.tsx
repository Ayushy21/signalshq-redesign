import type { ButtonProps } from '../../types';
import { cn } from '../../utils/cn';

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  onClick,
  href,
  type = 'button',
  ariaLabel,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 cursor-pointer select-none';

  const variants = {
    primary:
      'bg-teal-600 text-white hover:bg-teal-700 active:bg-teal-800 shadow-sm hover:shadow-md',
    secondary:
      'border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50 active:bg-slate-100 shadow-sm',
    ghost: 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 active:bg-slate-100',
  };

  const sizes = {
    sm: 'px-3.5 py-2 text-sm gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-7 py-3.5 text-base gap-2.5',
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
