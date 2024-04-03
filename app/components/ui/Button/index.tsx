import Link from 'next/link';
import { addSpaces } from '@lib/utils';

interface ButtonProps {
  mobileNumber: number;
}

export default function Button({ mobileNumber }: ButtonProps) {
  const mobileNumberFormatted = addSpaces(mobileNumber);
  return (
    <Link
      href={`tel:+48${mobileNumber}`}
      className="flex items-center justify-center whitespace-nowrap transition-colors rounded-md bg-gradient-to-b from-lime-200 to-lime-400 hover:from-green-400 hover:to-green-600 px-4 py-2 text-base font-medium text-black shadow-sm hover:bg-lime-400"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 mr-2 animate-wiggle"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
        />
      </svg>

      <div className="mt-1">{mobileNumberFormatted}</div>
    </Link>
  );
}
