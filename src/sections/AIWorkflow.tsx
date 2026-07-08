import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Upload,
  Tags,
  Brain,
  BookOpen,
  CheckCircle,
  FileOutput,
} from 'lucide-react';
import Container from '../components/ui/Container';
import SectionHeader from '../components/ui/SectionHeader';
import { workflowSteps } from '../constants/features';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { useInView } from '../hooks/useInView';
import { cn } from '../utils/cn';

const iconMap: Record<string, React.ComponentType<any>> = {
  Upload,
  Tags,
  Brain,
  BookOpen,
  CheckCircle,
  FileOutput,
};

export default function AIWorkflow() {
  const prefersReduced = useReducedMotion();
  const [ref, isInView] = useInView({ threshold: 0.2, once: true });
  const [activeStep, setActiveStep] = useState(0);

  // Auto-advance every 3 seconds once the section is in view
  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % workflowSteps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isInView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReduced ? 0 : 0.08,
      },
    },
  };

  const stepVariants = {
    hidden: prefersReduced
      ? { opacity: 1 }
      : { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section id="workflow" className="relative overflow-hidden bg-slate-950 py-24 lg:py-32" aria-label="How It Works">
      <Container className="relative z-10">
        <SectionHeader
          badge="How It Works"
          title="From document to workpaper in six steps."
          description="Watch your documents flow through intelligent processing — every step visible, every decision traceable."
          className="[&>h2]:text-white [&>p]:text-slate-400"
        />

        {/* Desktop horizontal pipeline */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="hidden lg:grid lg:grid-cols-6 lg:gap-0"
        >
          {workflowSteps.map((step, index) => {
            const Icon = iconMap[step.icon];
            const isActive = index === activeStep;
            const isPast = index < activeStep;

            return (
              <motion.div
                key={step.step}
                variants={stepVariants}
                className="relative flex flex-col items-center"
              >
                {/* Connector line (between steps, not before the first) */}
                {index > 0 && (
                  <div className="absolute left-0 top-6 -translate-x-1/2 h-0.5 w-full z-0">
                    <motion.div
                      className="h-full origin-left"
                      initial={{ scaleX: 0 }}
                      animate={{
                        scaleX: isInView ? 1 : 0,
                        backgroundColor: isPast || isActive ? '#0D9488' : '#1E293B',
                      }}
                      transition={{
                        scaleX: { duration: 0.4, delay: index * 0.08, ease: 'easeOut' as const },
                        backgroundColor: { duration: 0.3 },
                      }}
                      style={{ height: '100%' }}
                    />
                  </div>
                )}

                {/* Step circle */}
                <button
                  onClick={() => setActiveStep(index)}
                  className={cn(
                    'relative z-10 flex h-12 w-12 items-center justify-center rounded-xl border-2 transition-all duration-300',
                    isActive
                      ? 'border-teal-600 bg-teal-600 text-white shadow-md shadow-teal-600/20'
                      : isPast
                        ? 'border-teal-500/50 bg-teal-500/10 text-teal-400'
                        : 'border-slate-800 bg-slate-900 text-slate-500'
                  )}
                  aria-label={`Step ${step.step}: ${step.title}`}
                  aria-current={isActive ? 'step' : undefined}
                >
                  {Icon && <Icon className="h-5 w-5" strokeWidth={1.75} />}
                </button>

                {/* Step label */}
                <div className="mt-4 text-center px-2">
                  <span
                    className={cn(
                      'block text-xs font-mono font-medium uppercase tracking-wider mb-1.5',
                      isActive ? 'text-teal-400' : 'text-slate-500'
                    )}
                  >
                    Step {step.step}
                  </span>
                  <h3
                    className={cn(
                      'text-sm font-semibold mb-1.5 transition-colors duration-300',
                      isActive ? 'text-white' : 'text-slate-500'
                    )}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={cn(
                      'text-xs leading-relaxed transition-colors duration-300',
                      isActive ? 'text-slate-400' : 'text-slate-600'
                    )}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mobile vertical pipeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-0 lg:hidden"
        >
          {workflowSteps.map((step, index) => {
            const Icon = iconMap[step.icon];
            const isActive = index === activeStep;
            const isPast = index < activeStep;
            const isLast = index === workflowSteps.length - 1;

            return (
              <motion.div
                key={step.step}
                variants={stepVariants}
                className="relative flex gap-4"
              >
                {/* Vertical connector + circle */}
                <div className="flex flex-col items-center">
                  <button
                    onClick={() => setActiveStep(index)}
                    className={cn(
                      'relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-2 transition-all duration-300',
                      isActive
                        ? 'border-teal-600 bg-teal-600 text-white shadow-md shadow-teal-600/20'
                        : isPast
                          ? 'border-teal-500/50 bg-teal-500/10 text-teal-400'
                          : 'border-slate-800 bg-slate-900 text-slate-500'
                    )}
                    aria-label={`Step ${step.step}: ${step.title}`}
                    aria-current={isActive ? 'step' : undefined}
                  >
                    {Icon && <Icon className="h-4.5 w-4.5" strokeWidth={1.75} />}
                  </button>

                  {/* Vertical line */}
                  {!isLast && (
                    <motion.div
                      className={cn(
                        'w-0.5 flex-1 min-h-[24px] transition-colors duration-300',
                        isPast || isActive ? 'bg-teal-500' : 'bg-slate-800'
                      )}
                    />
                  )}
                </div>

                {/* Content */}
                <div className={cn('pb-8', isLast && 'pb-0')}>
                  <span
                    className={cn(
                      'block text-xs font-mono font-medium uppercase tracking-wider mb-1',
                      isActive ? 'text-teal-400' : 'text-slate-500'
                    )}
                  >
                    Step {step.step}
                  </span>
                  <h3
                    className={cn(
                      'text-base font-semibold mb-1 transition-colors duration-300',
                      isActive ? 'text-white' : 'text-slate-500'
                    )}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={cn(
                      'text-sm leading-relaxed transition-colors duration-300',
                      isActive ? 'text-slate-400' : 'text-slate-600'
                    )}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Progress indicator */}
        <div className="mt-12 flex justify-center gap-2" role="tablist" aria-label="Workflow step navigation">
          {workflowSteps.map((step, index) => (
            <button
              key={step.step}
              onClick={() => setActiveStep(index)}
              role="tab"
              aria-selected={index === activeStep}
              aria-label={`Go to step ${step.step}`}
              className={cn(
                'h-1.5 rounded-full transition-all duration-300',
                index === activeStep
                  ? 'w-8 bg-teal-600'
                  : 'w-1.5 bg-slate-800 hover:bg-slate-700'
              )}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
