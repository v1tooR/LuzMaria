import React from 'react';

export interface ProductCardProps {
  name: string;
  description?: string;
  /** Display price string, e.g. "R$ 68,00". */
  price?: string;
  /** Product photo URL (chiaroscuro, dark backdrop). Omit for a placeholder. */
  image?: string;
  imageAlt?: string;
  /** Optional corner label, e.g. "Mais pedida". */
  badge?: string;
  phone?: string;
  message?: string;
  ctaLabel?: string;
}

/**
 * Product card: dark surface, fine gold border, centered photo, clean ivory name + price. No ornament inside.
 * @startingPoint section="Product" subtitle="Devotional candle product card" viewport="340x520"
 */
export function ProductCard(props: ProductCardProps): JSX.Element;
