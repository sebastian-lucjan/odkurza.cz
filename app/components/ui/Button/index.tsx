import Link from 'next/link';
import ButtonStyle from '@ui/Button/ButtonStyle';
import { ButtonProps } from 'app/types/types';

export default function ButtonLink({ children, text, href, type = 'button' }: ButtonProps) {
  return (
    <Link href={href}>
      <button type={type}>
        <ButtonStyle>
          {children}
          {text}
        </ButtonStyle>
      </button>
    </Link>
  );
}
