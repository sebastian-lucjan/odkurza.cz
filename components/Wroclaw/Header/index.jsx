import Link from 'next/link';
import cityData from 'data/citiesData';

export default function HeaderWroclaw() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="flex flex-col laptop:flex-row items-center justify-between border-b-2 border-gray-100 py-6">
        <div className="relative text-4xl text-gray-800 font-bold">
          <Link href="/wroclaw">odkurza.cz</Link>
        </div>
        <nav className="my-8">
          <Link href="/wroclaw">
            <a className="text-base p-6 font-medium text-gray-500 hover:text-gray-900">Home</a>
          </Link>

          <Link href="/wroclaw#equipment">
            <a className="text-base p-6 font-medium text-gray-500 hover:text-gray-900">Sprzęt</a>
          </Link>

          <Link href="/wroclaw#faq">
            <a className="text-base p-6 font-medium text-gray-500 hover:text-gray-900">FAQ</a>
          </Link>

          <Link href="/wroclaw/kontakt">
            <a className="text-base p-6 font-medium text-gray-500 hover:text-gray-900">Kontakt</a>
          </Link>
        </nav>
        <div className="items-center justify-end">
          <a
            href={`tel:+48${cityData.wroclaw.mobile}`}
            className="flex items-center justify-center whitespace-nowrap transition-colors rounded-md bg-gradient-to-b from-sky-400 to-sky-600 hover:from-green-400 hover:to-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-400"
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
            <div className="font-semibold">{cityData.wroclaw.mobile}</div>
          </a>
        </div>
      </div>
    </div>
  );
}
