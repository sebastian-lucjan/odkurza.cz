'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@ui/Accordion';
import { cn } from '@lib/utils';
import { useState } from 'react';
import Image from 'next/image';
import vacuumCleaner from 'public/images/odkurzacz-pioracy-lublin.jpeg';
import Link from 'next/link';
import AdditionalChemistryAccordion from '@ui/AdditionalChemistryAccordion';

export default function Equipment({ pricesJSON }) {
  const prices = JSON.parse(pricesJSON);

  const [isOpen, setIsOpen] = useState(false);

  const {
    dayRenting: { smallPrice, mediumPrice, biggestPrice },
    cleaner,
    delivery: { toCustomer, fromCustomer },
  } = prices;

  return (
    <div id="equipment" className="mx-auto py-12 flex justify-evenly items-end max-w-7xl sm:px-6 border-b-2 border-gray-100">
      <div className="border flex flex-col bg-white border-gray-200 shadow-lg rounded-xl mx-4 w-[100% - 32px] tablet:w-[60%] laptop:w-[480px] overflow-hidden">
        <div className="m-8">
          <Image
            className="transition-transform h-full object-cover md:h-96 lg:h-full lg:w-full hover:scale-105"
            src={vacuumCleaner?.src}
            width={800}
            height={800}
            alt="Odkurzacz piorący z akcesoriami dostępny w wypożyczalni w Lublinie"
          />
        </div>
        <div className="bg-gray-50 pt-6 px-6 ">
          <div className="flex relative justify-center flex-col tablet:justify-start">
            <p className="text-2xl font-[600]">ODKURZACZ PIORĄCY KARCHER SE 5.100</p>
            <p className="text-md mt-4">
              Profesjonalne urządzenie do czyszczenie dywanów i wykładzin. Metoda polega na natryskiwaniu silnie skoncentrowanego środka czyszczącego
              i jednoczesnym odsysaniu go wraz z rozpuszczonym brudem, dzięki czemu czyszczona tkanina jest dogłębnie wyprana a czas schnięcia
              maksymalnie skrócony.
            </p>

            <Accordion type="single" collapsible>
              <AccordionItem value="price-list-item">
                <AccordionTrigger
                  className={cn(
                    'inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 mt-6 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 focus:ring-offset-gray-100',
                    isOpen ? 'rounded-t-lg' : 'rounded-lg',
                  )}
                  onClick={() => setIsOpen((prev) => !prev)}
                >
                  Szczegółowy <span className="ml-2 font-semibold">CENNIK</span>
                  <span className="ml-2 animate-wiggle">🔔</span>
                </AccordionTrigger>

                <AccordionContent className="mt-2 origin-top-left rounded-md bg-white ring-1 ring-black ring-opacity-5 focus:outline-none text-xs leading-6">
                  <div className="relative p-4 w-[100% - 32px]">
                    <div className="flex mb-4 border-b-4 pb-2 border-gray-100">
                      <p className="font-bold mr-3 w-[25%]">CENNIK:</p>
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
                      <p className="font-bold text-[12px] mr-3 w-[25%]">ŚRODEK CZYSZCZĄCY:</p>
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

                        <AdditionalChemistryAccordion />
                      </div>
                    </div>
                    <div className="flex mb-4 border-b-4 pb-2 border-gray-100">
                      <p className="font-bold mr-3 w-1/4">DOWÓZ:</p>
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
                      <div className="flex font-bold mr-3 w-1/4">
                        <p className="underline underline-offset-[-4px] decoration-4 decoration-lime-300 text-4xl text-black">*</p>
                      </div>
                      <div className="w-4/5">
                        <p className="">Najczęstszy wybór klientów</p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="bg-gray-50 px-5 py-5 sm:px-8 sm:py-8 flex justify-center">
            <div>
              CENA: od <span className="text-6xl font-bold decoration-green-500 underline underline-offset-8">{smallPrice}zł</span> / za dobę
            </div>
          </div>
          <div className="my-5 sm:mt-8 sm:flex sm:justify-center">
            <div className="rounded-md">
              <Link
                href="/contact"
                as="/kontakt"
                className="flex w-full items-center justify-center rounded-md bg-gradient-to-b from-lime-200 to-lime-400 color-black px-8 py-3 text-base text-black hover:text-white font-black hover:from-green-600 hover:to-green-600 md:py-4 md:px-10 md:text-lg shadow-lg hover:brightness-125"
              >
                <p>Wynajmij</p> <span className="text-4xl ml-2">🫧</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
