import HeadMeta from 'components/HeadMeta';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Image from 'next/image';
import vacuumCleaner from '../public/images/odkurzacz-pioracy-lublin.jpeg';
// import BaseLayout from '../components/BaseLayout';

const title = 'odkurza.cz - wynajem odkurzaczy piorących Lublin';
const description = 'odkurza.cz, wynajem odkurzaczy piorących Lublin, wypożycz odkurzacz i wyczyść dywan, tapicerkę lub siedzenia samochodowe .';
const ogData = {};
const canonical = 'https://odkurza.cz';

export default function FourOneFour() {
  return (
    <>
      <HeadMeta />
      <NextSeo title={title} description={description} canonical={canonical} openGraph={ogData} noindex nofollow />

      {/* <BaseLayout> */}
      <main className="relative bg-white">
        <Header />

        <div className="relative laptop:flex justify-between max-w-7xl mx-auto laptop:w-full overflow-hidden bg-white border-b-2 border-gray-100">
          <div className="mx-auto max-w-7xl">
            <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
              <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl laptop:text-5xl desktop:text-6xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl tracking-hero">
                    <span className="block text-lime-400 leading-relaxed xl:inline">Strona 404</span>
                  </h1>
                  <p className="text-2xl mb-8 text-neutral-800 font-bold">Wybierz odpowiednią stronę</p>
                  <Link href="/">
                    <a className="text-base font-medium text-gray-500 hover:text-gray-900 underline underline-offset-4">Wróć na stronę główną</a>
                  </Link>
                </div>
              </main>
            </div>
          </div>
          <div className="flex justify-center my-8 tablet:my-12 laptop:w-1/2">
            <Image className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full" src={vacuumCleaner} alt="Odkurzacz piorący Karcher" />
          </div>
        </div>

        <Footer />
      </main>
      {/* </BaseLayout> */}
    </>
  );
}
