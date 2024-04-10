import { ReactNode } from 'react';

export type ButtonType = 'button' | 'submit' | 'reset';

export interface ButtonProps {
  children?: ReactNode;
  text?: string;
  href: string;
  asHref?: string;
  type?: ButtonType;
}

export interface ButtonStyleProps {
  children: ReactNode;
}
