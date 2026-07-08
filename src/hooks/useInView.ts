import { useEffect, useRef, useState } from 'react';

export function useInView(
  options: { threshold?: number; once?: boolean } = {}
): [React.RefObject<HTMLDivElement | null>, boolean] {
  const { threshold = 0.1, once = true } = options;
  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsInView(false);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, once]);

  return [ref, isInView];
}
