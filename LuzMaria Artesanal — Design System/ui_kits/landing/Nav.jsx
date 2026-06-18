/* global React */
// Nav — fixed translucent bar, wordmark + WhatsApp CTA
function Nav() {
  const { WhatsAppButton } = window.LuzMariaArtesanalDesignSystem_e1b018;
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: scrolled ? 'rgba(14,13,12,0.82)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border-card)' : '1px solid transparent',
      transition: 'background var(--dur-base) var(--ease-soft), border-color var(--dur-base) var(--ease-soft)',
    }}>
      <div style={{
        maxWidth: 'var(--container-max)', margin: '0 auto',
        padding: '16px var(--container-pad)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 26, color: 'var(--ivory-200)', letterSpacing: '0.02em' }}>
            Luz<span style={{ fontStyle: 'italic', color: 'var(--gold-400)' }}>Maria</span>
          </span>
          <span style={{ fontFamily: 'var(--font-ui)', fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.34em', color: 'var(--ivory-500)', marginTop: 3 }}>Artesanal</span>
        </div>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-6)' }} className="lm-navlinks">
          {['Velas', 'Como funciona', 'Sobre', 'Dúvidas'].map(l => (
            <a key={l} href="#" style={{
              fontFamily: 'var(--font-ui)', fontSize: 13, fontWeight: 500,
              color: 'var(--ivory-300)', textDecoration: 'none', letterSpacing: '0.02em',
            }}>{l}</a>
          ))}
          <WhatsAppButton size="sm" variant="primary">Encomendar</WhatsAppButton>
        </nav>
      </div>
    </header>
  );
}
window.Nav = Nav;
