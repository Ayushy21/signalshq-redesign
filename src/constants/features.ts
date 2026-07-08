import type { Feature, Product, PainPoint, WorkflowStep, SecurityFeature, ComparisonRow, TransformationStage } from '../types';

export const painPoints: PainPoint[] = [
  {
    icon: 'Mail',
    label: 'Email overload',
    description: 'Client documents scattered across 47 email threads per engagement.',
  },
  {
    icon: 'FileText',
    label: 'Manual data entry',
    description: 'Staff re-typing W-2 data that already exists in digital form.',
  },
  {
    icon: 'AlertTriangle',
    label: 'Human errors',
    description: 'Transposition errors caught only during final review — or not at all.',
  },
  {
    icon: 'Clock',
    label: 'Slow turnaround',
    description: 'Clients waiting 3–4 weeks for returns that could take days.',
  },
  {
    icon: 'FolderOpen',
    label: 'Disorganized files',
    description: 'PDFs named "scan001.pdf" in folders named "misc_docs_final_v2."',
  },
  {
    icon: 'Calculator',
    label: 'Spreadsheet chaos',
    description: 'Workpapers in 14 different Excel files with no version control.',
  },
];

export const transformationStages: TransformationStage[] = [
  {
    phase: 'before',
    title: 'Before SignalsHQ',
    items: [
      'Documents in email attachments',
      'Manual data entry from PDFs',
      'Research across multiple IRS publications',
      'Unstructured workpapers in Excel',
      'Review takes hours per return',
      'No audit trail for decisions',
    ],
  },
  {
    phase: 'transition',
    title: 'SignalsHQ AI Agents',
    items: [
      'Automated document ingestion',
      'Intelligent classification & extraction',
      'LLM reasoning with IRS citations',
      'Structured workpaper generation',
      'Built-in review workspace',
      'Complete decision audit trail',
    ],
  },
  {
    phase: 'after',
    title: 'After SignalsHQ',
    items: [
      'Every document organized and labeled',
      'Data extracted with 99.2% accuracy',
      'Every answer cites the IRC section',
      'Workpapers ready for review in minutes',
      'Review time reduced by 70%',
      'Full traceability for every decision',
    ],
  },
];

export const products: Product[] = [
  {
    icon: 'MessageSquareText',
    title: 'Tax Assist',
    description: 'Answers tax questions with IRS citations, not guesses. Ask about Section 199A, depreciation methods, or filing deadlines — get the IRC reference, not a generic summary.',
  },
  {
    icon: 'FolderKanban',
    title: 'Client Organizer',
    description: 'Every document filed, labeled, and ready for review. Client uploads go from "scan001.pdf" to "Smith_W2_2024_Employer1" automatically.',
  },
  {
    icon: 'ScanSearch',
    title: 'Document Intelligence',
    description: 'Reads W-2s, 1099s, and K-1s in seconds. Extracts data points, cross-references against prior year returns, flags discrepancies before you open the file.',
  },
  {
    icon: 'ClipboardCheck',
    title: 'Review Workspace',
    description: 'Your team reviews AI work, not blank pages. Every prepared workpaper includes source documents, extracted data, and the reasoning chain.',
  },
  {
    icon: 'Users',
    title: 'Client Portal',
    description: 'Clients upload documents, check status, and review returns — in one place. No more "did you get my email?" conversations.',
    comingSoon: true,
  },
];

export const workflowSteps: WorkflowStep[] = [
  {
    step: 1,
    icon: 'Upload',
    title: 'Upload Documents',
    description: 'Drop client documents — PDFs, images, scans. Bulk upload or direct client submission.',
  },
  {
    step: 2,
    icon: 'Tags',
    title: 'Classification',
    description: 'AI identifies document types: W-2, 1099-INT, K-1, bank statements. No manual sorting.',
  },
  {
    step: 3,
    icon: 'Brain',
    title: 'LLM Reasoning',
    description: 'Specialized tax models extract data, apply rules, and generate structured outputs.',
  },
  {
    step: 4,
    icon: 'BookOpen',
    title: 'IRS Citation Retrieval',
    description: 'Every conclusion links to the relevant IRC section, Revenue Ruling, or IRS publication.',
  },
  {
    step: 5,
    icon: 'CheckCircle',
    title: 'Review',
    description: 'Your team reviews AI-prepared work in a structured workspace. Accept, modify, or flag.',
  },
  {
    step: 6,
    icon: 'FileOutput',
    title: 'Final Workpaper',
    description: 'Completed workpapers with full audit trail, source references, and sign-off tracking.',
  },
];

export const features: Feature[] = [
  {
    icon: 'Target',
    title: 'Citation-backed accuracy',
    description: 'Every answer cites the IRC section. Verify in one click. No hallucinated tax advice.',
  },
  {
    icon: 'ScrollText',
    title: 'Complete audit trail',
    description: 'Every AI decision is logged. Every data extraction is traceable. Your reviewers see the full chain.',
  },
  {
    icon: 'Shield',
    title: 'Enterprise security',
    description: 'SOC 2 Type II compliant. AES-256 encryption. Your client data stays under your control.',
  },
  {
    icon: 'Bot',
    title: 'Specialized AI agents',
    description: 'Purpose-built agents for tax research, document processing, and workpaper preparation. Not a generic chatbot.',
  },
  {
    icon: 'Zap',
    title: '12 minutes, not 4 hours',
    description: 'What takes a staff accountant half a day takes SignalsHQ agents minutes. Your team focuses on review.',
  },
  {
    icon: 'Plug',
    title: 'Fits your stack',
    description: 'Works alongside your existing tax software and document management. No rip-and-replace.',
  },
  {
    icon: 'UsersRound',
    title: 'Built for teams',
    description: 'Assign, review, and approve within one workspace. Managers see everything. Staff sees what they need.',
  },
  {
    icon: 'Repeat',
    title: 'Consistent every time',
    description: 'Set your firm\'s rules. The agents follow them on every engagement. No training new hires on process.',
  },
];

export const comparisonRows: ComparisonRow[] = [
  {
    feature: 'Document Processing',
    traditional: 'Manual data entry from PDFs',
    signalshq: 'Auto-extracted in seconds with source mapping',
  },
  {
    feature: 'Tax Research',
    traditional: 'Search across publications manually',
    signalshq: 'Instant answers with IRC citations',
  },
  {
    feature: 'Citation Accuracy',
    traditional: 'Depends on individual knowledge',
    signalshq: '99.2% accuracy with source verification',
  },
  {
    feature: 'Return Preparation',
    traditional: '4–6 hours per return',
    signalshq: '12 minutes average preparation time',
  },
  {
    feature: 'Review Process',
    traditional: 'Review from scratch in Excel',
    signalshq: 'Structured workspace with AI reasoning visible',
  },
  {
    feature: 'Error Rate',
    traditional: '3–5% manual transposition errors',
    signalshq: '< 0.3% with automated cross-referencing',
  },
  {
    feature: 'Audit Trail',
    traditional: 'Manual documentation',
    signalshq: 'Automatic logging of every decision',
  },
  {
    feature: 'Onboarding',
    traditional: '2–3 months for new staff',
    signalshq: 'Productive in the first week',
  },
];

export const securityFeatures: SecurityFeature[] = [
  {
    icon: 'ShieldCheck',
    title: 'SOC 2 Type II',
    description: 'Independently audited security controls, verified annually by a third-party firm.',
  },
  {
    icon: 'Lock',
    title: 'AES-256 Encryption',
    description: 'All data encrypted at rest and in transit. Bank-grade cryptography for every document.',
  },
  {
    icon: 'KeyRound',
    title: 'Role-Based Access',
    description: 'Partners, managers, and staff see exactly what they need. Granular permission controls.',
  },
  {
    icon: 'ClipboardList',
    title: 'Complete Audit Logs',
    description: 'Every access, every change, every AI decision — logged and searchable.',
  },
  {
    icon: 'Scale',
    title: 'Regulatory Compliance',
    description: 'Built to meet IRS data handling requirements and state-level privacy regulations.',
  },
  {
    icon: 'Database',
    title: 'Tenant Data Isolation',
    description: 'Your firm\'s data is completely isolated. No cross-tenant access, ever.',
  },
];
