import { NextSeo } from 'next-seo';
import HeadMeta from 'components/HeadMeta';
import Header from 'components/Lublin/Header';
import Footer from 'components/Footer';
import Contact from 'components/Contact';
import Script from 'next/script';
import cityData from 'data/citiesData';

const title = 'odkurza.cz - kontakt, wynajem odkurzaczy piorących Lublin';
const description = 'odkurza.cz, napisz lub zadzwoń i wynajmij odkurzacz piorący Lublin, wyczyść dywan lub tapicerkę.';
const ogData = {};
const canonical = 'https://odkurza.cz/kontakt';

export default function ContactPage() {
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
        <Contact />

        <Footer cityObj={cityData.lublin} />
      </main>
    </>
  );
}
