import { ReactNode } from 'react';

export interface ButtonProps {
  children?: ReactNode;
  text?: string;
  href: string;
  asHref?: string;
}

export interface ButtonStyleProps {
  children: ReactNode;
}
