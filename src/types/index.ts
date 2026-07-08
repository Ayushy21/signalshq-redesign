import type { ReactNode } from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Product {
  icon: string;
  title: string;
  description: string;
  comingSoon?: boolean;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  firm: string;
  avatar?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Metric {
  value: string;
  numericValue: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export interface ComparisonRow {
  feature: string;
  traditional: string;
  signalshq: string;
}

export interface SecurityFeature {
  icon: string;
  title: string;
  description: string;
}

export interface WorkflowStep {
  step: number;
  icon: string;
  title: string;
  description: string;
}

export interface PainPoint {
  icon: string;
  label: string;
  description: string;
}

export interface TransformationStage {
  phase: 'before' | 'transition' | 'after';
  title: string;
  items: string[];
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit';
  ariaLabel?: string;
}

export interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
  className?: string;
}

export interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'header' | 'footer' | 'nav' | 'main';
  id?: string;
}
