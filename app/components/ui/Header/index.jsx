import Link from 'next/link';
import Button from '@ui/Button';

export default function HeaderLublin({ mobileNumber }) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="flex flex-col laptop:flex-row items-center justify-between border-b-2 border-gray-100 py-6">
        <div className="relative text-4xl text-gray-800 font-bold">
          <Link href="/">odkurza.cz</Link>
        </div>
        <nav className="my-8">
          <Link href="/" className="text-base p-6 font-medium text-gray-500 hover:text-gray-900">
            Home
          </Link>

          <Link href="/#equipment" className="text-base p-6 font-medium text-gray-500 hover:text-gray-900">
            Sprzęt
          </Link>

          <Link href="/#faq" className="text-base p-6 font-medium text-gray-500 hover:text-gray-900">
            FAQ
          </Link>

          <Link href="/kontakt" className="text-base p-6 font-medium text-gray-500 hover:text-gray-900">
            Kontakt
          </Link>
        </nav>
        <div className="items-center justify-end">
          <Button mobileNumber={mobileNumber} />
        </div>
      </div>
    </div>
  );
}
