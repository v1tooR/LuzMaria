import React from 'react';

export interface OrnateFrameProps {
  children: React.ReactNode;
  /** Inner padding. */
  pad?: string;
}

/**
 * Baroque corner-bracket moldura — the single ornamental highlight (use for the "sobre a marca" block). Never tile it.
 * @startingPoint section="Layout" subtitle="Ornate frame for brand-story highlight" viewport="700x320"
 */
export function OrnateFrame(props: OrnateFrameProps): JSX.Element;
