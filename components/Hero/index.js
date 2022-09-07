import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import vacuumCleaner from 'public/images/karcher-puzzi.png';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl border-b-2 border-gray-100">
        <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <Popover>
            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel focus className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden">
                <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                  <div className="flex items-center justify-between px-5 pt-4">
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close main menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="space-y-1 px-2 pt-2 pb-3"></div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl tracking-hero">
                <span className="block xl:inline font-roboto font-black">Wypożyczalnia</span>{' '}
                <span className="block text-lime-300 leading-relaxed xl:inline ">odkurzaczy Lublin</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                Przed wypożyczeniem sprzętu nie pobieramy żadnej kaucji, potrzebny nam jest tylko Twój podpis pod regulaminem i umową wynajmu.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md">
                  <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-lime-300 color-black px-8 py-3 text-base font-medium text-black font-black hover:bg-lime-400 md:py-4 md:px-10 md:text-lg shadow-lg"
                  >
                    Wynajmij
                  </a>
                </div>
                {/* <div className="mt-3 sm:mt-0 sm:ml-3"> */}
                {/*  <a */}
                {/*    href="#" */}
                {/*    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg" */}
                {/*  > */}
                {/*    Live demo */}
                {/*  </a> */}
                {/* </div> */}
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <Image className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full" src={vacuumCleaner} alt="" />
      </div>
    </div>
  );
}
