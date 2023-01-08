import { NextSeo } from 'next-seo';
import HeadMeta from 'components/HeadMeta';
import Header from 'components/Wroclaw/Header';
import Footer from 'components/Footer';
import ContactWroclaw from 'components/Wroclaw/Contact';
import Script from 'next/script';
import cityData from 'data/citiesData';

const title = 'odkurza.cz - kontakt, wynajem odkurzaczy piorących Wrocław';
const description = 'odkurza.cz, wynajmij odkurzacz piorący Wrocław, wyczyść dywan lub tapicerkę w samochodzie.';
const ogData = {};
const canonical = 'https://odkurza.cz/wroclaw/kontakt';

export default function ContactPage() {
  return (
    <>
      <HeadMeta />
      <NextSeo title={title} description={description} canonical={canonical} openGraph={ogData} noindex nofollow />
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
        <ContactWroclaw />

        <Footer cityObj={cityData.wroclaw} />
      </main>
    </>
  );
}
