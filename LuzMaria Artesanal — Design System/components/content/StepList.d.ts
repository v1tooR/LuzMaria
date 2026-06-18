import React from 'react';

export interface StepListProps {
  /** Array of strings or { label } objects, in order. */
  steps: Array<string | { label: string }>;
  direction?: 'horizontal' | 'vertical';
}

/** Numbered "como funciona" flow with gold numeral discs. */
export function StepList(props: StepListProps): JSX.Element;
