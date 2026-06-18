/* global React */
// ProductGrid — section heading + 3-up ProductCard grid
function ProductGrid() {
  const { ProductCard, SectionDivider, Eyebrow } = window.LuzMariaArtesanalDesignSystem_e1b018;
  const products = [
    { name: 'Vela Nossa Senhora Aparecida', description: 'Peça delicada e devocional, ideal para oratórios e cantinhos de oração.', price: 'R$ 68,00', badge: 'Mais pedida' },
    { name: 'Vela Sagrado Coração', description: 'Inspirada na imagem do Sagrado Coração de Jesus, para momentos de intenção.', price: 'R$ 72,00' },
    { name: 'Kit Presente de Fé', description: 'Presente cheio de significado para datas religiosas e o Dia das Mães.', price: 'R$ 119,00' },
  ];
  return (
    <section id="velas" style={{ background: 'var(--ink-900)', padding: 'var(--section-y) 0' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--container-pad)' }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-7)' }}>
          <Eyebrow>Nossas velas</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(30px, 4vw, 44px)', color: 'var(--ivory-200)', margin: '12px 0 16px', letterSpacing: '-0.01em' }}>
            Escolha a sua devoção
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center' }}><SectionDivider variant="node" /></div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-5)' }} className="lm-product-grid">
          {products.map((p, i) => (
            <ProductCard key={i} {...p} message={`Olá! Tenho interesse na ${p.name}. Pode me passar valores e prazo?`} />
          ))}
        </div>
      </div>
    </section>
  );
}
window.ProductGrid = ProductGrid;
