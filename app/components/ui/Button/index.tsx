import Link from 'next/link';
import ButtonStyle from '@ui/Button/ButtonStyle';
import { ButtonProps } from 'app/types/ButtonTypes';

export default function ButtonLink({ children, text, href, asHref }: ButtonProps) {
  return (
    <Link href={href} as={asHref || href}>
      <button type="button">
        <ButtonStyle>
          {children}
          {text}
        </ButtonStyle>
      </button>
    </Link>
  );
}
