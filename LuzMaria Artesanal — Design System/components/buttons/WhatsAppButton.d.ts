import React from 'react';

export interface WhatsAppButtonProps {
  children?: React.ReactNode;
  /** Pre-filled message body (devotional, first-person). */
  message?: string;
  /** Destination number, any format; non-digits are stripped. */
  phone?: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'onIvory';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

/** The brand's principal conversion action — opens WhatsApp with a pre-written message. */
export function WhatsAppButton(props: WhatsAppButtonProps): JSX.Element;
