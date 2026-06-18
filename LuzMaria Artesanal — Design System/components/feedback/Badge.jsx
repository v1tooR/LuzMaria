import React from 'react';

/**
 * Badge — tiny status/eyebrow marker. Use for "Feito à mão", "Sob encomenda".
 */
export function Badge({ children, tone = 'gold' }) {
  const tones = {
    gold: { color: 'var(--ink-900)', bg: 'var(--gold-500)' },
    wine: { color: 'var(--ivory-200)', bg: 'var(--wine-700)' },
    outline: { color: 'var(--gold-400)', bg: 'transparent', border: '1px solid var(--border-hairline)' },
  };
  const t = tones[tone] || tones.gold;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center',
      padding: '4px 10px',
      font: 'var(--font-ui)', fontSize: 10, fontWeight: 600,
      textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)',
      color: t.color, background: t.bg, border: t.border || 'none',
      borderRadius: 'var(--radius-sm)',
    }}>{children}</span>
  );
}
