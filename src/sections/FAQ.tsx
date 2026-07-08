import Container from '../components/ui/Container';
import SectionHeader from '../components/ui/SectionHeader';
import Accordion from '../components/ui/Accordion';
import Card from '../components/ui/Card';
import { faqItems } from '../constants/faq';

export default function FAQ() {
  return (
    <section id="faq" className="relative overflow-hidden bg-slate-900 py-24 lg:py-32">
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 h-96 w-96 -translate-y-1/2 rounded-full bg-teal-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 h-96 w-96 translate-y-1/2 rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeader
          badge="FAQ"
          title="Questions we hear from firms like yours."
          className="[&>h2]:text-white [&>p]:text-slate-400"
        />

        <div className="mx-auto max-w-[800px]">
          <Card padding="lg" hover={false} className="bg-slate-950/80 border-slate-800 backdrop-blur-md shadow-2xl">
            <Accordion items={faqItems} />
          </Card>
        </div>
      </Container>
    </section>
  );
}
