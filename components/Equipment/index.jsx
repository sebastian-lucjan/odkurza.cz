import { Fragment } from 'react';
import { Menu, Transition, Disclosure } from '@headlessui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import vacuumCleaner from 'public/images/odkurzacz-pioracy-lublin.jpeg';
import Link from 'next/link';

export default function Equipment({ prices }) {
  const {
    dayRenting: { smallPrice, mediumPrice, biggestPrice },
    cleaner,
    delivery: { toCustomer, fromCustomer },
  } = prices;

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
                <Menu.Button className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                  Szczegółowy <span className="ml-2 font-semibold">CENNIK</span>
                  <span className="ml-2 animate-wiggle">🔔</span>
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
                    <div className="flex mb-4 border-b-4 pb-2 border-gray-100 border-b-4 pb-2 border-gray-100">
                      <p className="font-bold mr-4 w-[25%]">CENNIK:</p>
                      <div className="w-[80%]">
                        <div className="flex justify-between">
                          <p>Pon. - Czw.:</p>
                          <p className="font-semibold">{smallPrice} zł / dzień (24h)</p>
                        </div>
                        <div className="flex justify-between">
                          <div className="flex font-bold text-black">
                            <p className="underline underline-offset-2 decoration-2 decoration-lime-300">Pt. - Nd. (weekend):</p>
                            <p className="text-xl">*</p>
                          </div>
                          <p>{mediumPrice} zł / dzień (24h)</p>
                        </div>
                        <div className="flex justify-between">
                          <p>Święta ustawowe:</p>
                          <p>{biggestPrice} zł / dzień (24h)</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex mb-4 border-b-4 pb-2 border-gray-100">
                      <p className="font-bold text-[12px] mr-4 w-[25%]">ŚRODEK CZYSZCZĄCY:</p>
                      <div className="w-[80%]">
                        <div className="flex justify-between">
                          <p className="w-1/5">100ml</p>
                          <div className="w-3/5">- Kanapa 2os.</div>
                          <p className="w-1/5 font-semibold">GRATIS</p>
                        </div>
                        <div className="flex justify-between border-t border-gray-100">
                          <p className="w-1/5">200ml</p>
                          <ul className="w-3/5">
                            <li>- Kanapa 3os.</li>
                            <li>- Pufa</li>
                          </ul>
                          <p className="w-1/5 font-semibold">{cleaner[200]}zł</p>
                        </div>
                        <div className="flex justify-between border-t border-gray-100">
                          <p className="w-1/5">300ml</p>
                          <ul className="w-3/5">
                            <li>- Kanapa 3os.</li>
                            <li>- Fotel</li>
                            <li>
                              - Dywanik 4m<sup>2</sup>
                            </li>
                          </ul>
                          <p className="w-1/5 font-semibold">{cleaner[300]}zł</p>
                        </div>
                        <div className="flex justify-between border-t border-gray-100">
                          <p className="w-1/5">400ml</p>
                          <ul className="w-3/5">
                            <li>- Kanapa 4os.</li>
                            <li>- Fotel</li>
                            <li>
                              - Dywan/wykładzina 10m<sup>2</sup>
                            </li>
                          </ul>
                          <p className="w-1/5 font-semibold">{cleaner[400]}zł</p>
                        </div>
                        <div className="flex justify-between border-t border-gray-100">
                          <div className="flex font-bold text-black w-1/5">
                            <p className="underline underline-offset-2 decoration-2 decoration-lime-300">600ml</p>
                            <p className="text-xl">*</p>
                          </div>
                          <ul className="w-3/5">
                            <li>- Kanapa 4os.</li>
                            <li>- Fotel x2</li>
                            <li>
                              - Dywan/wykładzina 10m<sup>2</sup>
                            </li>
                            <li>- Siedzenia w aucie osob.</li>
                          </ul>
                          <p className="w-1/5 font-semibold">{cleaner[600]}zł</p>
                        </div>
                        <div className="flex justify-between border-t border-gray-100">
                          <p className="w-1/5">1000ml</p>
                          <ul className="w-3/5">
                            <li>- jw.</li>
                            <li>- Zabrudzenia wymagające użycia większej ilości środka czyszczącego</li>
                          </ul>
                          <p className="w-1/5 font-semibold">{cleaner[1000]}zł</p>
                        </div>
                        <div className="flex flex-col justify-between border-t border-gray-100">
                          <p className="font-semibold text-[10px] text-gray-700">
                            <span>☝️</span>Do odkurzacza dodajemy większą ilość środków czyszczących. Rozliczenie jest przy oddaniu gdy wiadomym jest
                            ile chemii zostało ostatecznie zużyte.
                          </p>
                          <p className="font-semibold text-[10px] text-gray-700">
                            ✌️ Ilość potrzebnego środka czyszczącego jest zależna od stopnia zabrudzeń oraz sposobu prania.
                          </p>
                        </div>

                        <Disclosure>
                          {({ open }) => (
                            <>
                              <Disclosure.Button
                                className={`${
                                  open ? 'rounded-t-lg' : 'rounded-lg'
                                } flex w-full justify-between bg-neutral-700 px-4 py-2 text-left font-semibold text-white hover:bg-neutral-600 focus:outline-none focus-visible:ring focus-visible:ring-lime-500/75`}
                              >
                                <span>🥼 Chemia do cięższych zabrudzeń? 🧪</span>
                                <ChevronUpIcon className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-white`} />
                              </Disclosure.Button>
                              <Disclosure.Panel className={`${open ? 'rounded-b-lg' : 'rounded-lg'} px-2 pb-2 pt-2 text-natural-700 bg-neutral-100`}>
                                <p>Jeśli chcesz uprać uporczywe plamy lepszym rozwiązaniem będzie użycie mocniejszej chemii w proszku.</p>
                                <div className="flex justify-between">
                                  <p className="w-1/5">100g</p>
                                  <div className="w-3/5">- Kanapa 3os.</div>
                                  <p className="w-1/5 font-semibold">12zł</p>
                                </div>
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      </div>
                    </div>
                    <div className="flex mb-4 border-b-4 pb-2 border-gray-100">
                      <p className="font-bold mr-4 w-1/4">DOWÓZ:</p>
                      <div className="w-[80%]">
                        <p>W granicach Lublina:</p>
                        <div className="flex justify-between">
                          <p>Dowóz:</p>
                          <p>{toCustomer}zł</p>
                        </div>
                        <div className="flex justify-between">
                          <p>Odbiór:</p>
                          <p>{fromCustomer}zł</p>
                        </div>
                        <div className="flex justify-between">
                          <div className="flex font-bold text-black">
                            <p className="underline underline-offset-2 decoration-2 decoration-lime-300">Odbiór osobisty:</p>
                            <p className="text-xl">*</p>
                          </div>
                          <p className="font-semibold">0zł</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex font-bold  mr-4 w-1/4">
                        <p className="underline underline-offset-[-4px] decoration-4 decoration-lime-300 text-4xl text-black">*</p>
                      </div>
                      <div className="w-4/5">
                        <p className="">Najczęstszy wybór klientów</p>
                      </div>
                    </div>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
          <div className="bg-gray-50 px-5 py-5 sm:px-8 sm:py-8 flex justify-center">
            <div>
              CENA: od <span className="text-6xl font-bold decoration-green-500 underline underline-offset-8">{smallPrice}zł</span> / za dobę
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
