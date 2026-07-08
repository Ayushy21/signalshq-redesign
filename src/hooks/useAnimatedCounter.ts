import { useEffect, useRef, useState, useCallback } from 'react';

export function useAnimatedCounter(
  end: number,
  duration: number = 2000,
  startOnView: boolean = true
): [React.RefObject<HTMLDivElement | null>, number] {
  const ref = useRef<HTMLDivElement | null>(null);
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  const animate = useCallback(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();
    const isFloat = end % 1 !== 0;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * end;

      setCount(isFloat ? parseFloat(current.toFixed(1)) : Math.floor(current));

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(tick);
  }, [end, duration]);

  useEffect(() => {
    if (!startOnView) {
      animate();
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
          observer.unobserve(element);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [animate, startOnView]);

  return [ref, count];
}
