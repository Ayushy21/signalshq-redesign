import type { Metric } from '../types';

export const metrics: Metric[] = [
  {
    value: '12,400+',
    numericValue: 12400,
    suffix: '+',
    label: 'Hours saved across client firms',
  },
  {
    value: '850,000+',
    numericValue: 850000,
    suffix: '+',
    label: 'Documents processed',
  },
  {
    value: '< 3 min',
    numericValue: 3,
    prefix: '< ',
    suffix: ' min',
    label: 'Average response time',
  },
  {
    value: '99.2%',
    numericValue: 99.2,
    suffix: '%',
    label: 'Citation accuracy',
  },
  {
    value: '4.9/5',
    numericValue: 4.9,
    suffix: '/5',
    label: 'Customer satisfaction',
  },
];
