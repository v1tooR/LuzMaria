import React from 'react';

/**
 * SectionDivider — fine gold filete between content blocks.
 * Used with restraint. 'node' adds a central diamond ornament.
 */
export function SectionDivider({ variant = 'line', width = '100%' }) {
  if (variant === 'node') {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, width, margin: '0 auto', color: 'var(--gold-500)' }}>
        <span style={{ height: 1, flex: 1, maxWidth: 120, background: 'linear-gradient(90deg, transparent, var(--gold-600))' }} />
        <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" style={{ flexShrink: 0 }}>
          <path d="M7 0 L9 5 L14 7 L9 9 L7 14 L5 9 L0 7 L5 5 Z" fill="var(--gold-500)" />
        </svg>
        <span style={{ height: 1, flex: 1, maxWidth: 120, background: 'linear-gradient(90deg, var(--gold-600), transparent)' }} />
      </div>
    );
  }
  return (
    <hr style={{
      border: 0, height: 1, width,
      background: 'linear-gradient(90deg, transparent, var(--gold-600) 18%, var(--gold-400) 50%, var(--gold-600) 82%, transparent)',
      opacity: 0.7, margin: 0,
    }} />
  );
}
