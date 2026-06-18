import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  /** Visual style. primary = gold-on-dark CTA; secondary = gold hairline outline; ghost = text only; onIvory = dark button on light blocks. */
  variant?: 'primary' | 'secondary' | 'ghost' | 'onIvory';
  size?: 'sm' | 'md' | 'lg';
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * Primary action surface for LuzMaria. Clean, high-contrast, no flourishes.
 * @startingPoint section="Buttons" subtitle="Gold-on-dark CTA & variants" viewport="700x180"
 */
export function Button(props: ButtonProps): JSX.Element;
