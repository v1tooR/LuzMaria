import React from 'react';

export interface SectionDividerProps {
  /** 'line' = plain gold filete; 'node' = filete with central diamond ornament. */
  variant?: 'line' | 'node';
  width?: string;
}

/** Fine gold filete between content blocks — use with restraint. */
export function SectionDivider(props: SectionDividerProps): JSX.Element;
