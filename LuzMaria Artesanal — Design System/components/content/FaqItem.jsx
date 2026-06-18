import React from 'react';

/**
 * FaqItem — quiet accordion row. Hairline gold divider, gold "+" that
 * rotates to "×". Devotional, unhurried.
 */
export function FaqItem({ question, answer, defaultOpen = false }) {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div style={{ borderBottom: '1px solid var(--border-card)' }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 'var(--space-4)', padding: 'var(--space-5) 0',
          background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
        }}
        aria-expanded={open}
      >
        <span style={{ font: 'var(--type-h3)', fontSize: 20, color: 'var(--text-strong)' }}>{question}</span>
        <span style={{
          flexShrink: 0, width: 26, height: 26, position: 'relative',
          color: 'var(--gold-500)', fontSize: 24, lineHeight: '24px',
          transform: open ? 'rotate(135deg)' : 'rotate(0deg)',
          transition: 'transform var(--dur-base) var(--ease-out)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>+</span>
      </button>
      <div style={{
        maxHeight: open ? 400 : 0, overflow: 'hidden',
        transition: 'max-height var(--dur-slow) var(--ease-soft)',
      }}>
        <p style={{
          margin: 0, paddingBottom: 'var(--space-5)',
          font: 'var(--type-body)', color: 'var(--text-body)',
          maxWidth: '60ch',
        }}>{answer}</p>
      </div>
    </div>
  );
}
