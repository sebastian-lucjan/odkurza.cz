import { HandThumbUpIcon, SparklesIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Pros() {
  return (
    <div className="mx-auto max-w-7xl flex flex-col items-center laptop:mt-8 md:flex-row md:justify-evenly px-4">
      <Link href="/kontakt">
        <div className="w-60 h-60 tablet:w-[200px] tablet:h-[200px] bg-lime-300 rounded-full flex flex-col justify-center items-center mb-10 tablet:mb-0 cursor-pointer">
          <CalendarDaysIcon className="w-20 h-20 mb-2" />
          <p className="text-center font-bold flex flex-col">Wynajmij</p>
          <div className="flex flex-row text-xl">
            <span className="font-extrabold text-2xl mr-2">7 dni</span> w tyg.
          </div>
        </div>
      </Link>

      <Link href="/kontakt">
        <div className="w-60 h-60 text-xs tablet:w-[200px] tablet:h-[200px] bg-lime-300 rounded-full flex flex-col justify-center items-center mb-10 tablet:mb-0 cursor-pointer">
          <SparklesIcon className="w-20 h-20 mb-2" />

          <p className="text-center font-bold">
            <span className="font-extrabold text-2xl">100g</span> wysokiej jakości proszku w cenie
          </p>
        </div>
      </Link>
      <Link href="/kontakt">
        <div className="w-60 h-60 tablet:w-[200px] tablet:h-[200px] bg-lime-300 rounded-full flex flex-col justify-center items-center cursor-pointer">
          <HandThumbUpIcon className="w-20 h-20 mb-2" />

          <p className="text-center font-bold">
            <span className="font-extrabold text-2xl">Kaucja 0 zł</span>
          </p>
        </div>
      </Link>
    </div>
  );
}
