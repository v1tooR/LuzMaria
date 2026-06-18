/* global React */
// FaqSection + Footer + final CTA band
function FaqSection() {
  const { FaqItem, Eyebrow } = window.LuzMariaArtesanalDesignSystem_e1b018;
  const faqs = [
    { q: 'As velas são feitas à mão?', a: 'Sim. Cada vela é produzida artesanalmente, com cuidado e atenção em cada detalhe.' },
    { q: 'Posso personalizar minha vela?', a: 'Sim. É possível consultar as opções de personalização — nome, data e intenção — diretamente pelo WhatsApp.' },
    { q: 'Vocês enviam para todo o Brasil?', a: 'Sim, enviamos para todo o país. O frete e o prazo são combinados durante a conversa no WhatsApp.' },
    { q: 'Qual o prazo de produção?', a: 'Por serem feitas sob encomenda, o prazo varia conforme o modelo. Informamos tudo antes de você confirmar.' },
  ];
  return (
    <section id="duvidas" style={{ background: 'var(--ink-900)', padding: 'var(--section-y) 0' }}>
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 var(--container-pad)' }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
          <Eyebrow>Dúvidas frequentes</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(28px, 4vw, 40px)', color: 'var(--ivory-200)', margin: '12px 0 0' }}>
            Antes de encomendar
          </h2>
        </div>
        <div>
          {faqs.map((f, i) => <FaqItem key={i} question={f.q} answer={f.a} defaultOpen={i === 0} />)}
        </div>
      </div>
    </section>
  );
}

function CtaBand() {
  const { WhatsAppButton } = window.LuzMariaArtesanalDesignSystem_e1b018;
  return (
    <section style={{ background: 'var(--surface-ivory)', padding: 'var(--space-9) 0' }}>
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 var(--container-pad)', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(30px, 4.5vw, 48px)', color: 'var(--text-on-ivory)', margin: 0, letterSpacing: '-0.01em' }}>
          Acenda uma luz de fé hoje
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, color: 'var(--text-on-ivory-muted)', margin: '16px auto 28px', maxWidth: '44ch', lineHeight: 1.6 }}>
          Fale com a gente e encomende sua vela artesanal, feita à mão e cheia de significado.
        </p>
        <WhatsAppButton size="lg" message="Olá! Quero encomendar uma vela artesanal da LuzMaria.">
          Falar pelo WhatsApp
        </WhatsAppButton>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: 'var(--ink-900)', borderTop: '1px solid var(--border-card)', padding: 'var(--space-7) 0' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--container-pad)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 22, color: 'var(--ivory-200)' }}>
            Luz<span style={{ fontStyle: 'italic', color: 'var(--gold-400)' }}>Maria</span>
          </span>
          <span style={{ fontFamily: 'var(--font-ui)', fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.34em', color: 'var(--ivory-500)', marginTop: 3 }}>Artesanal</span>
        </div>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--ivory-600)', margin: 0 }}>
          Velas devocionais feitas à mão · © 2026 LuzMaria Artesanal
        </p>
      </div>
    </footer>
  );
}
window.FaqSection = FaqSection;
window.CtaBand = CtaBand;
window.Footer = Footer;
