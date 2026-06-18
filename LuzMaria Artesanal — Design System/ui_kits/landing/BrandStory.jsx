/* global React */
// BrandStory — the one ornate moment + How it works steps
function BrandStory() {
  const { OrnateFrame, Eyebrow, StepList } = window.LuzMariaArtesanalDesignSystem_e1b018;
  return (
    <section id="sobre" style={{ background: 'var(--ink-850)', padding: 'var(--section-y) 0', borderTop: '1px solid var(--border-card)', borderBottom: '1px solid var(--border-card)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--container-pad)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-8)', alignItems: 'center' }} className="lm-story-grid">
        <div>
          <Eyebrow>Sobre a marca</Eyebrow>
          <OrnateFrame pad="var(--space-7)">
            <p style={{ margin: 0, fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 500, fontSize: 'clamp(24px, 3vw, 34px)', lineHeight: 1.4, color: 'var(--ivory-200)' }}>
              "Mais do que uma vela, uma lembrança de fé, cuidado e da presença de Deus nos pequenos detalhes."
            </p>
            <p style={{ margin: '20px 0 0', fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.7, color: 'var(--ivory-400)' }}>
              A LuzMaria Artesanal nasceu para transformar velas em presentes cheios de significado. Cada criação é feita à mão, com inspiração na fé católica e atenção em cada detalhe.
            </p>
            <div style={{ marginTop: 18, fontFamily: 'var(--font-script)', fontSize: 34, color: 'var(--gold-400)', lineHeight: 1 }}>
              com fé e carinho
            </div>
          </OrnateFrame>
        </div>
        <div>
          <Eyebrow>Como funciona</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(26px, 3vw, 36px)', color: 'var(--ivory-200)', margin: '12px 0 28px' }}>
            Sua encomenda em quatro passos
          </h2>
          <StepList direction="vertical" steps={[
            'Escolha o modelo de vela que mais combina com você',
            'Fale com a gente pelo WhatsApp',
            'Confira valores, personalização e prazo de produção',
            'Receba sua vela feita à mão em casa',
          ]} />
        </div>
      </div>
    </section>
  );
}
window.BrandStory = BrandStory;
