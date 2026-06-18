import React from 'react';

export interface FaqItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

/** Quiet accordion row with a hairline gold divider and rotating gold "+". */
export function FaqItem(props: FaqItemProps): JSX.Element;
