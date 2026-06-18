import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  tone?: 'gold' | 'wine' | 'outline';
}

/** Tiny uppercase status marker, e.g. "Feito à mão", "Sob encomenda". */
export function Badge(props: BadgeProps): JSX.Element;
