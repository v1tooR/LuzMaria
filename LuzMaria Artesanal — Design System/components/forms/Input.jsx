import React from 'react';

/**
 * Input — clean form field for the order/contact flow.
 * High contrast, gold focus ring, no flourishes.
 */
export function Input({
  label,
  id,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  required = false,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || `lm-${Math.random().toString(36).slice(2, 8)}`;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
      {label && (
        <label htmlFor={inputId} style={{
          font: 'var(--font-ui)', fontSize: 12, fontWeight: 600,
          textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)',
          color: 'var(--text-muted)',
        }}>{label}{required && <span style={{ color: 'var(--gold-500)' }}> *</span>}</label>
      )}
      <input
        id={inputId}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          font: 'var(--font-body)', fontSize: 16,
          color: 'var(--ivory-200)',
          background: 'var(--ink-900)',
          border: `1.5px solid ${focus ? 'var(--gold-500)' : 'var(--ink-600)'}`,
          borderRadius: 'var(--radius-md)',
          padding: '12px 14px',
          outline: 'none',
          boxShadow: focus ? '0 0 0 3px var(--ring-accent)' : 'none',
          transition: 'border-color var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft)',
        }}
        {...rest}
      />
    </div>
  );
}
