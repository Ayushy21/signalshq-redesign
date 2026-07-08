import type { ContainerProps } from '../../types';
import { cn } from '../../utils/cn';

export default function Container({
  children,
  className,
  as: Component = 'div',
  id,
}: ContainerProps) {
  return (
    <Component id={id} className={cn('mx-auto max-w-[1200px] px-6', className)}>
      {children}
    </Component>
  );
}
