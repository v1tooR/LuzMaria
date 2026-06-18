**FaqItem** and **StepList** — content blocks.

```jsx
<FaqItem question="As velas são feitas à mão?" answer="Sim. Cada vela é produzida artesanalmente, com cuidado em cada detalhe." />

<StepList steps={['Escolha o modelo', 'Clique no produto', 'Fale pelo WhatsApp', 'Confira valores e prazo', 'Receba em casa']} />
```

`FaqItem` is a quiet accordion (hairline gold divider, rotating gold `+`). `StepList` renders the numbered ordering flow with gold numeral discs — `horizontal` on desktop, `vertical` on mobile.
