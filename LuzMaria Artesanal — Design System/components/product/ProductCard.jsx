import React from 'react';
import { WhatsAppButton } from '../buttons/WhatsAppButton.jsx';

/**
 * ProductCard — dark surface, fine gold border, centered product photo.
 * No ornamentation inside the card; name + price in clean ivory.
 */
export function ProductCard({
  name,
  description,
  price,
  image,           // url string
  imageAlt = '',
  badge = null,    // optional small label e.g. "Mais pedida"
  phone = '',
  message = '',
  ctaLabel = 'Quero essa vela',
}) {
  const [hover, setHover] = React.useState(false);

  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--surface-card)',
        border: `1px solid ${hover ? 'var(--gold-500)' : 'var(--border-card)'}`,
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        transition: 'border-color var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft), transform var(--dur-base) var(--ease-out)',
        boxShadow: hover ? 'var(--glow-soft), var(--shadow-md)' : 'var(--shadow-sm)',
        transform: hover ? 'translateY(-3px)' : 'none',
      }}
    >
      {/* Photo — chiaroscuro, dark backdrop */}
      <div style={{
        position: 'relative',
        aspectRatio: '4 / 5',
        background: image
          ? `radial-gradient(120% 90% at 50% 35%, rgba(201,162,39,0.10), transparent 60%), #0b0a09`
          : 'radial-gradient(120% 90% at 50% 35%, rgba(201,162,39,0.10), transparent 60%), #0b0a09',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
      }}>
        {image ? (
          <img src={image} alt={imageAlt || name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <span style={{
            font: 'var(--type-label)', textTransform: 'uppercase',
            letterSpacing: 'var(--tracking-wide)', color: 'var(--text-faint)',
          }}>Foto da vela</span>
        )}
        {badge && (
          <span style={{
            position: 'absolute', top: 12, left: 12,
            font: 'var(--type-label)', fontSize: 10,
            textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)',
            color: 'var(--ink-900)', background: 'var(--gold-500)',
            padding: '4px 10px', borderRadius: 'var(--radius-pill)',
          }}>{badge}</span>
        )}
      </div>

      {/* Body */}
      <div style={{ padding: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', flex: 1 }}>
        <h3 style={{
          margin: 0, font: 'var(--type-h3)', color: 'var(--text-strong)',
          letterSpacing: 'var(--tracking-tight)',
        }}>{name}</h3>
        {description && (
          <p style={{
            margin: 0, font: 'var(--type-body)', fontSize: 15,
            color: 'var(--text-muted)', lineHeight: 'var(--leading-normal)', flex: 1,
          }}>{description}</p>
        )}
        {price && (
          <div style={{ font: 'var(--type-price)', color: 'var(--text-accent)', marginTop: 'var(--space-1)' }}>
            {price}
          </div>
        )}
        <div style={{ marginTop: 'var(--space-2)' }}>
          <WhatsAppButton variant="secondary" size="sm" fullWidth phone={phone} message={message}>
            {ctaLabel}
          </WhatsAppButton>
        </div>
      </div>
    </article>
  );
}
