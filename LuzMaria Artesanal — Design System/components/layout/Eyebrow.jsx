import React from 'react';

/** Eyebrow — small-caps gold label above a heading. */
export function Eyebrow({ children }) {
  return (
    <span style={{
      display: 'inline-block',
      font: 'var(--font-ui)', fontSize: 12, fontWeight: 600,
      textTransform: 'uppercase', letterSpacing: 'var(--tracking-wider)',
      color: 'var(--text-accent)',
    }}>{children}</span>
  );
}
