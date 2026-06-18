import React from 'react';

export interface TagProps {
  children: React.ReactNode;
  tone?: 'gold' | 'wine' | 'muted';
  size?: 'sm' | 'md';
}

/** Small pill label for personalization options, occasions, categories. */
export function Tag(props: TagProps): JSX.Element;
