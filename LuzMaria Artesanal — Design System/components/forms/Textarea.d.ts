import React from 'react';

export interface TextareaProps {
  label?: string;
  id?: string;
  placeholder?: string;
  rows?: number;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
}

/** Multiline field for personalization intentions / messages. */
export function Textarea(props: TextareaProps): JSX.Element;
