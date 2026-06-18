/* global React */
// Hero — chiaroscuro candlelight backdrop, serif display, single CTA
function Hero() {
  const { WhatsAppButton, Eyebrow } = window.LuzMariaArtesanalDesignSystem_e1b018;
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--ink-900)' }}>
      {/* Candlelight backdrop (placeholder gradient — replace with real chiaroscuro photo/video) */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(70% 80% at 72% 38%, rgba(201,162,39,0.30), rgba(184,134,11,0.08) 38%, #0a0908 70%)',
      }} />
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(40% 50% at 74% 36%, rgba(228,199,101,0.42), transparent 60%)',
        filter: 'blur(6px)',
      }} />
      <div style={{
        position: 'relative', maxWidth: 'var(--container-max)', margin: '0 auto',
        padding: '140px var(--container-pad) 120px',
        display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'var(--space-7)', alignItems: 'center',
      }} className="lm-hero-grid">
        <div>
          <Eyebrow>Velas devocionais artesanais</Eyebrow>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(44px, 6vw, 76px)',
            lineHeight: 1.04, letterSpacing: '-0.01em', color: 'var(--ivory-200)', margin: '18px 0 0',
            textWrap: 'balance',
          }}>
            Iluminar momentos<br />de fé e devoção
          </h1>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: 'clamp(17px, 2.2vw, 21px)', lineHeight: 1.7,
            color: 'var(--ivory-400)', margin: '24px 0 0', maxWidth: '46ch',
          }}>
            Velas feitas à mão, com cuidado em cada detalhe, para transformar orações, presentes e memórias em luz.
          </p>
          <div style={{ marginTop: 'var(--space-7)', display: 'flex', alignItems: 'center', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
            <WhatsAppButton size="lg" message="Olá! Vim pela landing page e gostaria de encomendar uma vela artesanal.">
              Quero fazer minha encomenda
            </WhatsAppButton>
            <span style={{ fontFamily: 'var(--font-script)', fontSize: 30, color: 'var(--gold-400)', lineHeight: 1 }}>
              feitas com fé
            </span>
          </div>
        </div>
        {/* Product spotlight placeholder */}
        <div style={{
          aspectRatio: '3/4', borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-card)',
          background: 'radial-gradient(80% 70% at 50% 32%, rgba(201,162,39,0.22), #0b0a09 68%)',
          boxShadow: 'var(--glow-candle)',
          display: 'flex', alignItems: 'flex-end', justifyContent: 'center', padding: 18,
        }} className="lm-hero-img">
          <span style={{ fontFamily: 'var(--font-ui)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--ivory-600)' }}>
            Foto da vela em claro-escuro
          </span>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
