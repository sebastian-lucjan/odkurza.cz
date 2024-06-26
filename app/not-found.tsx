import Header from '@ui/Header';
import Footer from '@ui/Footer';
import Link from 'next/link';
import Image from 'next/image';
import vacuumCleaner from 'public/images/odkurzacz-pioracy-lublin.jpeg';

export default function FourOneFour() {
  return (
    <main className="relative bg-white">
      <Header />

      <div className="relative mx-auto max-w-7xl justify-between overflow-hidden border-b-2 border-gray-100 bg-white laptop:flex laptop:w-full">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
            <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl font-bold tracking-hero text-gray-900 sm:text-5xl md:text-6xl laptop:text-5xl desktop:text-6xl">
                  <span className="block leading-relaxed text-lime-400 xl:inline">Strona 404</span>
                </h1>
                <p className="mb-8 text-2xl font-bold text-neutral-800">Wybierz odpowiednią stronę</p>
                <Link href="/public" className="text-base font-medium text-gray-500 underline underline-offset-4 hover:text-gray-900">
                  Wróć na stronę główną
                </Link>
              </div>
            </main>
          </div>
        </div>
        <div className="my-8 flex justify-center tablet:my-12 laptop:w-1/2">
          <Image
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
            src={vacuumCleaner.src}
            alt="Odkurzacz piorący Karcher"
            width={800}
            height={800}
          />
        </div>
      </div>

      <Footer />
    </main>
  );
}
