import React from 'react';

/**
 * LuzMaria Button — high-contrast, restrained, no ornamentation.
 * The conversion surface stays clean: gold-on-dark or dark-on-ivory.
 */
export function Button({
  children,
  variant = 'primary',   // 'primary' | 'secondary' | 'ghost' | 'onIvory'
  size = 'md',           // 'sm' | 'md' | 'lg'
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  type = 'button',
  onClick,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const sizes = {
    sm: { padding: '8px 16px', fontSize: 12, gap: 7 },
    md: { padding: '13px 26px', fontSize: 13, gap: 9 },
    lg: { padding: '17px 38px', fontSize: 14, gap: 10 },
  };

  const base = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    gap: sizes[size].gap,
    padding: sizes[size].padding,
    fontFamily: 'var(--font-ui)',
    fontWeight: 600,
    fontSize: sizes[size].fontSize,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    lineHeight: 1,
    border: '1.5px solid transparent',
    borderRadius: 'var(--radius-md)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.42 : 1,
    transition: 'background var(--dur-base) var(--ease-soft), color var(--dur-base) var(--ease-soft), border-color var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft), transform var(--dur-fast) var(--ease-out)',
    transform: active && !disabled ? 'translateY(1px)' : 'none',
    WebkitFontSmoothing: 'antialiased',
  };

  const variants = {
    primary: {
      background: hover && !disabled ? 'var(--gold-400)' : 'var(--gold-500)',
      color: 'var(--ink-900)',
      borderColor: 'transparent',
      boxShadow: hover && !disabled ? 'var(--glow-soft)' : 'none',
    },
    secondary: {
      background: hover && !disabled ? 'rgba(201,162,39,0.10)' : 'transparent',
      color: 'var(--gold-400)',
      borderColor: 'var(--gold-500)',
    },
    ghost: {
      background: hover && !disabled ? 'rgba(244,238,224,0.06)' : 'transparent',
      color: 'var(--ivory-300)',
      borderColor: 'transparent',
    },
    onIvory: {
      background: hover && !disabled ? 'var(--ink-700)' : 'var(--ink-900)',
      color: 'var(--ivory-200)',
      borderColor: 'transparent',
    },
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      style={{ ...base, ...variants[variant] }}
      {...rest}
    >
      {iconLeft}
      <span>{children}</span>
      {iconRight}
    </button>
  );
}
