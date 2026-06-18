import React from 'react';

/**
 * OrnateFrame — the ONE place baroque ornamentation is allowed.
 * A gold corner-bracketed moldura for the "sobre a marca" highlight.
 * Never repeat this as a background pattern.
 */
export function OrnateFrame({ children, pad = 'var(--space-7)' }) {
  const corner = (rot) => (
    <svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true"
      style={{ position: 'absolute', transform: `rotate(${rot}deg)`, color: 'var(--gold-500)' }}>
      <path d="M2 32 L2 10 Q2 2 10 2 L32 2" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 32 L8 14 Q8 8 14 8 L32 8" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.55" />
      <circle cx="14" cy="14" r="2" fill="currentColor" />
    </svg>
  );
  return (
    <div style={{ position: 'relative', padding: pad }}>
      <div style={{
        position: 'absolute', inset: 0,
        border: '1px solid var(--border-hairline)',
        borderRadius: 'var(--radius-sm)',
        pointerEvents: 'none',
      }} />
      <div style={{ position: 'absolute', top: -2, left: -2 }}>{corner(0)}</div>
      <div style={{ position: 'absolute', top: -2, right: -2 }}>{corner(90)}</div>
      <div style={{ position: 'absolute', bottom: -2, right: -2 }}>{corner(180)}</div>
      <div style={{ position: 'absolute', bottom: -2, left: -2 }}>{corner(270)}</div>
      <div style={{ position: 'relative' }}>{children}</div>
    </div>
  );
}
