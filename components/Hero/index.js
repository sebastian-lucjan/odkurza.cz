import vacuumCleaner from 'public/images/odkurzacz-pioracy-lublin.jpeg';
import { CheckCircleIcon } from '@heroicons/react/20/solid';

import Image from 'next/image';
import Link from 'next/link';

export default function HeroLublin() {
  return (
    <div className="relative laptop:flex justify-between max-w-7xl mx-auto laptop:w-full overflow-hidden bg-white border-b-2 border-gray-100">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl laptop:text-5xl desktop:text-6xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl tracking-hero">
                <span className="block xl:inline font-roboto font-black">Wypożyczalnia</span>{' '}
                <span className="block text-lime-400 leading-relaxed xl:inline">odkurzaczy Lublin</span>
              </h1>
              <div className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                <h3>Zamów odkurzacz piorący w Lublinie i wypierz sam:</h3>
                <ul className="flex flex-col">
                  <li className="inline-flex">
                    <CheckCircleIcon className="w-6 h-6 mr-2 mt-[2px] text-lime-300" />
                    <p>Wykładziny i dywany</p>
                  </li>
                  <li className="inline-flex">
                    <CheckCircleIcon className="w-6 h-6 mr-2 mt-[2px] text-lime-300" />

                    <p>Sofy, kanapy, fotele</p>
                  </li>
                  <li className="inline-flex">
                    <CheckCircleIcon className="w-6 h-6 mr-2 mt-[2px] text-lime-300" />

                    <p>Tapicerka samochodowa</p>
                  </li>
                </ul>
              </div>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md">
                  <Link href="/kontakt">
                    <a className="flex w-full items-center justify-center rounded-md bg-gradient-to-b from-lime-200 to-lime-400 color-black px-8 py-3 text-base font-bold text-black font-black hover:from-green-400 hover:to-green-600 md:py-4 md:px-10 md:text-lg shadow-lg">
                      Wynajmij
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="flex justify-center my-8 tablet:my-12 laptop:w-1/2">
        <Image className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full" src={vacuumCleaner} alt="Odkurzacz piorący Karcher" />
      </div>
    </div>
  );
}
