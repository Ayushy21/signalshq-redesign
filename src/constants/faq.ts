import type { FAQItem } from '../types';

export const faqItems: FAQItem[] = [
  {
    question: 'How accurate is the AI for tax research?',
    answer: 'SignalsHQ agents achieve 99.2% accuracy on citation retrieval, verified against IRS publications and IRC sections. Every answer includes the source reference so your team can verify in one click. We don\'t generate tax advice from general knowledge — we retrieve from authoritative sources.',
  },
  {
    question: 'Is our client data secure?',
    answer: 'Yes. We\'re SOC 2 Type II certified, use AES-256 encryption for data at rest and in transit, and maintain complete tenant data isolation. Your client data is never used to train models or shared across firms. We meet IRS data handling requirements and state-level privacy regulations.',
  },
  {
    question: 'How long does onboarding take?',
    answer: 'Most firms are processing their first documents within the first week. We provide dedicated onboarding support, help configure your firm\'s specific workflows, and offer training sessions for your team. Full productivity typically happens within 2–3 weeks.',
  },
  {
    question: 'Does it work with our existing tax software?',
    answer: 'SignalsHQ is designed to work alongside your current stack — not replace it. We integrate with major tax preparation software and document management systems. Your team keeps using the tools they know while agents handle the preparation work.',
  },
  {
    question: 'What document types can it process?',
    answer: 'The Document Intelligence agent handles W-2s, 1099 series (INT, DIV, NEC, MISC, B, R), K-1s, bank statements, brokerage statements, and most standard tax documents. We\'re continuously expanding coverage based on firm feedback.',
  },
  {
    question: 'Can we control what the AI does?',
    answer: 'Absolutely. You set your firm\'s rules, review thresholds, and approval workflows. The AI agents follow your defined processes — they prepare work, but your team always has final review and sign-off authority. Every AI decision is logged and auditable.',
  },
  {
    question: 'What does pricing look like?',
    answer: 'Pricing is based on your firm size and document volume. We offer annual plans with predictable costs — no per-query surprises. Book a demo and we\'ll walk through a proposal tailored to your firm\'s workflow.',
  },
  {
    question: 'What happens if the AI gets something wrong?',
    answer: 'Every AI output goes through your team\'s review workflow before anything is finalized. The Review Workspace shows the AI\'s reasoning chain and source citations, making it easy to catch and correct errors. We also track accuracy metrics so you can see performance over time.',
  },
];
