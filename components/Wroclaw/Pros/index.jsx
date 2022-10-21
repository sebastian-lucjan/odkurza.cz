import { HandThumbUpIcon, SparklesIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';

import Link from 'next/link';

export default function Pros() {
  return (
    <div className="mx-auto max-w-7xl flex flex-col items-center mt-8 md:flex-row md:justify-evenly px-4 text-white">
      <Link href="/wroclaw/kontakt">
        <div className="w-60 h-60 text-xs tablet:w-[220px] tablet:h-[220px] bg-sky-500 rounded-full flex flex-col justify-center items-center mb-10 tablet:mb-0 cursor-pointer">
          <SparklesIcon className="w-20 h-20 mb-2" />
          <p className="text-center font-bold text-2xl underline decoration-lime-300 decoration-4">100ml</p>
          <p className="px-10 text-sm font-semibold tablet:px-8 text-center">wysokiej jakości środka czyszczącego Karcher w cenie</p>
        </div>
      </Link>

      <Link href="/wroclaw/kontakt">
        <div className="w-60 h-60 tablet:w-[220px] tablet:h-[220px] bg-sky-500 rounded-full flex flex-col justify-center items-center cursor-pointer">
          <HandThumbUpIcon className="w-20 h-20 mb-2" />

          <p className="text-center font-bold">
            <span className="font-extrabold text-2xl underline decoration-lime-300 decoration-4">Kaucja 0 zł</span>
          </p>
        </div>
      </Link>

      <Link href="/wroclaw/kontakt">
        <div className="w-60 h-60 tablet:w-[220px] tablet:h-[220px] bg-sky-500 rounded-full flex flex-col justify-center items-center mb-10 tablet:mb-0 cursor-pointer">
          <CalendarDaysIcon className="w-20 h-20 mb-2" />
          <p className="text-center font-bold flex flex-col">Wynajmij</p>
          <div className="flex flex-row text-xl">
            <span className="font-extrabold text-2xl mr-2 underline decoration-lime-300 decoration-4">7 dni</span> w tyg.
          </div>
        </div>
      </Link>
    </div>
  );
}
