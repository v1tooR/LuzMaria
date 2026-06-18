import React from 'react';

export interface InputProps {
  label?: string;
  id?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

/** Clean form field with gold focus ring for the order/contact flow. */
export function Input(props: InputProps): JSX.Element;
