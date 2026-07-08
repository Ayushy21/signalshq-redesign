import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  id: string;
}

function AccordionItem({ question, answer, isOpen, onToggle, id }: AccordionItemProps) {
  const prefersReduced = useReducedMotion();

  return (
    <div className="border-b border-slate-800 last:border-b-0">
      <button
        id={`accordion-trigger-${id}`}
        aria-expanded={isOpen}
        aria-controls={`accordion-panel-${id}`}
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-teal-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 cursor-pointer"
      >
        <span className="text-base font-medium text-white">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={prefersReduced ? { duration: 0 } : { duration: 0.2 }}
          className="shrink-0 text-slate-500"
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`accordion-panel-${id}`}
            role="region"
            aria-labelledby={`accordion-trigger-${id}`}
            initial={prefersReduced ? {} : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={prefersReduced ? {} : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-[15px] leading-relaxed text-slate-400">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface AccordionProps {
  items: { question: string; answer: string }[];
  className?: string;
}

export default function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  return (
    <div className={cn('divide-y-0', className)}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          id={String(index)}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
}
