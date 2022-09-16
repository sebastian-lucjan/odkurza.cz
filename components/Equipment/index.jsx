import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import vacuumCleaner from 'public/images/karcher-se-5100.jpeg';
import Link from 'next/link';

export default function Equipment() {
  return (
    <div id="equipment" className="mx-auto py-12 flex justify-evenly items-end max-w-7xl  sm:px-6 border-b-2 border-gray-100">
      <div className="border flex flex-col bg-white border-gray-200 shadow-lg rounded-xl mx-4 tablet:w-[60%] laptop:w-[480px]">
        <div className="m-8">
          <Image
            className="transition-transform h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full hover:scale-105"
            src={vacuumCleaner}
            alt="Odkurzacz piorący z akcesoriami dostępny w wypożyczalni w Lublinie"
          />
        </div>
        <div className="bg-gray-50 pt-6 px-6">
          <div className="flex justify-center pb-6 flex flex-col">
            <p className="text-2xl font-[600]">ODKURZACZ PIORĄCY KARCHER SE 5.100</p>
            <p className="text-md mt-4">
              Profesjonalne urządzenie do czyszczenie dywanów i wykładzin. Metoda polega na natryskiwaniu silnie skoncentrowanego środka czyszczącego
              i jednoczesnym odsysaniu go wraz z rozpuszczonym brudem, dzięki czemu czyszczona tkanina jest dogłębnie wyprana a czas schnięcia
              maksymalnie skrócony.
            </p>

            <Menu as="div" className="relative text-left">
              <div className="mt-6">
                <Menu.Button className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                  Szczegóły
                  <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none w-[100%] text-xs leading-6">
                  <div className="relative p-4 w-full">
                    <div className="flex mb-4">
                      <p className="font-bold mr-4 w-[20%]">GRATIS:</p>
                      <div className="w-[80%]">
                        <p className="font-semibold">100g proszku w cenie</p>
                        <p>Taka ilość proszku wystarczy na ok. 10-15m2 w zależności od poziomu zabrudzenia.</p>
                        <p>Dodatkowe 100g proszku w cenie 10zł.</p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      <p className="font-bold mr-4 w-[20%]">CENNIK:</p>
                      <div className="w-[80%]">
                        <div className="flex justify-between">
                          <p>Pon. - Czw.:</p>
                          <p className="font-semibold">60zł / dzień</p>
                        </div>
                        <div className="flex justify-between">
                          <p>Pt. - Nd. (weekend):</p>
                          <p>80zł / dzień</p>
                        </div>
                        <div className="flex justify-between">
                          <p>Święta ustawowe:</p>
                          <p>120zł / dzień</p>
                        </div>
                        <p>Wszystkie ceny brutto</p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      <p className="font-bold mr-4 w-[20%]">DOWÓZ:</p>
                      <div className="w-[80%]">
                        <p>W granicach Lublina:</p>
                        <div className="flex justify-between">
                          <p>Dowóz:</p>
                          <p>20zł</p>
                        </div>
                        <div className="flex justify-between">
                          <p>Odbiór:</p>
                          <p>20zł</p>
                        </div>
                        <div className="flex justify-between">
                          <p className="font-semibold">Osobiście:</p>
                          <p className="font-semibold">0zł</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
          <div className="bg-gray-50 px-5 py-5 sm:px-8 sm:py-8 flex justify-center">
            <div>
              CENA: od <span className="text-6xl font-bold decoration-amber-300 underline underline-offset-4">60zł</span> / za dobę
            </div>
          </div>
          <div className="my-5 sm:mt-8 sm:flex sm:justify-center">
            <div className="rounded-md">
              <Link href="/kontakt">
                <a className="flex w-full items-center justify-center rounded-md bg-gradient-to-b from-lime-200 to-lime-400 color-black px-8 py-3 text-base font-medium text-black hover:text-white font-black hover:from-green-600 hover:to-green-600 md:py-4 md:px-10 md:text-lg shadow-lg hover:brightness-125">
                  <p>Wynajmij</p> <span className="text-4xl ml-2">🫧</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
