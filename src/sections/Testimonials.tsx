import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import Container from '../components/ui/Container';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import { testimonials } from '../constants/testimonials';
import { useReducedMotion } from '../hooks/useReducedMotion';

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

export default function Testimonials() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="testimonials" className="relative overflow-hidden bg-slate-950 py-24 lg:py-32">
      {/* Background Glows */}
      <div className="absolute top-1/4 right-0 h-[400px] w-[400px] translate-x-1/2 rounded-full bg-teal-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeader
          badge="Testimonials"
          title="What CPA firms are saying."
          className="[&>h2]:text-white [&>p]:text-slate-400"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={prefersReduced ? {} : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={
                prefersReduced
                  ? { duration: 0 }
                  : { duration: 0.5, delay: index * 0.08, ease: 'easeOut' as const }
              }
            >
              <Card className="h-full flex flex-col bg-slate-950/80 border-slate-800 backdrop-blur-md shadow-2xl" hover={false} padding="lg">
                {/* Decorative quotation mark */}
                <Quote className="mb-4 h-8 w-8 text-teal-500/40" strokeWidth={1.5} />

                {/* Quote text */}
                <p className="flex-1 text-[15px] italic leading-relaxed text-slate-300">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Divider */}
                <div className="my-6 h-px bg-slate-800" />

                {/* Author info */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-500/10 border border-teal-500/20">
                    <span className="text-sm font-semibold text-teal-400">
                      {getInitials(testimonial.name)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-slate-500">
                      {testimonial.title}, {testimonial.firm}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
