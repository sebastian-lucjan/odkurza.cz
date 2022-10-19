import HeadMeta from 'components/HeadMeta';
import Hero from 'components/Lublin/Hero';
import Header from 'components/Lublin/Header';
import Footer from 'components/Footer';
import Pros from 'components/Lublin/Pros';
import Equipment from 'components/Lublin/Equipment';
import { NextSeo } from 'next-seo';
import Script from 'next/script';
import Conversation from 'components/Conversation';
import Link from 'next/link';

const title = 'odkurza.cz - wynajem odkurzaczy piorących Lublin i Wrocław';
const description =
  'odkurza.cz, wynajem odkurzaczy piorących w Lublinie i Wrocławiu, wypożycz odkurzacz i wyczyść dywan, wykładzinę oraz tapicerkę samochodową.';
const ogData = {};
const canonical = 'https://odkurza.cz';

export default function Home() {
  return (
    <>
      <HeadMeta />
      <NextSeo title={title} description={description} canonical={canonical} openGraph={ogData} />
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {` 
          window.dataLayer = window.dataLayer || []; 
          function gtag(){window.dataLayer.push(arguments);} 
          gtag('js', new Date()); 

          gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}'); 
        `}
      </Script>

      <main className="relative bg-white">
        <Header />

        {/* <PolishMap/> */}
        <div className="my-5 sm:mt-8 sm:flex sm:justify-center">
          <div className="rounded-md">
            <Link href="/lublin">
              <a className="flex w-full items-center justify-center rounded-md bg-gradient-to-b from-sky-200 to-lime-400 color-black px-8 py-3 text-base font-medium text-black hover:text-white font-black hover:from-green-600 hover:to-green-600 md:py-4 md:px-10 md:text-lg shadow-lg hover:brightness-125">
                <p>Lublin</p> <span className="text-4xl ml-2">🫧</span>
              </a>
            </Link>
          </div>
        </div>

        <div className="my-5 sm:mt-8 sm:flex sm:justify-center">
          <div className="rounded-md">
            <Link href="/wroclaw">
              <a className="flex w-full items-center justify-center rounded-md bg-gradient-to-b from-lime-200 to-lime-400 color-black px-8 py-3 text-base font-medium text-black hover:text-white font-black hover:from-green-600 hover:to-green-600 md:py-4 md:px-10 md:text-lg shadow-lg hover:brightness-125">
                <p>Wroclaw</p> <span className="text-4xl ml-2">🫧</span>
              </a>
            </Link>
          </div>
        </div>

        <Hero />

        <Pros />

        <Equipment />

        <Conversation />

        <Footer />
      </main>
    </>
  );
}
