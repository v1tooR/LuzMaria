import React from 'react';

/**
 * Tag / Chip — small label for personalization options, categories, occasions.
 * Pill shape is the only place rounded geometry is allowed liberally.
 */
export function Tag({ children, tone = 'gold', size = 'md' }) {
  const tones = {
    gold:  { color: 'var(--gold-400)', border: 'var(--border-hairline)', bg: 'rgba(201,162,39,0.07)' },
    wine:  { color: '#E0A9A4', border: 'rgba(122,42,44,0.55)', bg: 'rgba(122,42,44,0.18)' },
    muted: { color: 'var(--text-muted)', border: 'var(--ink-600)', bg: 'transparent' },
  };
  const t = tones[tone] || tones.gold;
  const pad = size === 'sm' ? '4px 10px' : '6px 14px';
  const fs = size === 'sm' ? 11 : 12;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center',
      padding: pad,
      font: 'var(--font-ui)', fontSize: fs, fontWeight: 500,
      letterSpacing: '0.02em',
      color: t.color, background: t.bg,
      border: `1px solid ${t.border}`,
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
    }}>{children}</span>
  );
}
