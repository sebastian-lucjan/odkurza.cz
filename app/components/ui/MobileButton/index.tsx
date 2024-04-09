import Link from 'next/link';
import { addSpaces } from '@lib/utils';
import MobileSVG from '@ui/svg/MobileSVG';

interface ButtonProps {
  mobileNumber: number;
}

export default function MobileButton({ mobileNumber }: ButtonProps) {
  const mobileNumberFormatted = addSpaces(mobileNumber);

  return (
    <Link
      href={`tel:+48${mobileNumber}`}
      className="my-4 flex items-center justify-center whitespace-nowrap rounded-md bg-gradient-to-b from-lime-200 to-lime-400 px-4 py-2 text-base font-medium text-black shadow-sm transition-colors hover:bg-lime-400 hover:from-green-400 hover:to-green-600"
    >
      <MobileSVG />

      <div className="mt-1">{mobileNumberFormatted}</div>
    </Link>
  );
}
