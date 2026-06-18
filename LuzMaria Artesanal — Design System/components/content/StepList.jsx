import React from 'react';

/**
 * StepList — numbered "como funciona" flow. Gold numeral discs, ivory text.
 * Horizontal on desktop, vertical on mobile (controlled by `direction`).
 */
export function StepList({ steps = [], direction = 'horizontal' }) {
  const horizontal = direction === 'horizontal';
  return (
    <ol style={{
      listStyle: 'none', margin: 0, padding: 0,
      display: 'flex', flexDirection: horizontal ? 'row' : 'column',
      gap: horizontal ? 'var(--space-3)' : 'var(--space-4)',
      flexWrap: horizontal ? 'wrap' : 'nowrap',
    }}>
      {steps.map((step, i) => (
        <li key={i} style={{
          flex: horizontal ? '1 1 140px' : 'none',
          display: 'flex',
          flexDirection: horizontal ? 'column' : 'row',
          alignItems: horizontal ? 'flex-start' : 'center',
          gap: 'var(--space-3)',
        }}>
          <span style={{
            flexShrink: 0,
            width: 42, height: 42, borderRadius: '50%',
            border: '1px solid var(--gold-500)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            font: 'var(--font-display)', fontSize: 20, fontWeight: 600,
            color: 'var(--gold-400)',
            background: 'rgba(201,162,39,0.06)',
          }}>{i + 1}</span>
          <span style={{
            font: 'var(--type-body)', fontSize: 16, color: 'var(--text-body)',
          }}>{typeof step === 'string' ? step : step.label}</span>
        </li>
      ))}
    </ol>
  );
}
