import HeadMeta from 'components/HeadMeta';
import Hero from 'components/Hero';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Pros from 'components/Pros';
import { NextSeo } from 'next-seo';
import Script from 'next/script';
import Conversation from 'components/Conversation';
import EquipmentWroclaw from 'components/EquipmentWroclaw';

const title = 'odkurza.cz - wynajem odkurzaczy piorących Wrocław';
const description = 'odkurza.cz, wynajem odkurzaczy piorących we Wrocławiu, wypożycz odkurzacz i wyczyść wykładzinę, dywan, tapicerkę samochodową.';
const ogData = {};
const canonical = 'https://odkurza.cz/wroclaw';

export default function Wroclaw() {
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

        <Hero city="Wrocław" color="#F63A34" />

        <Pros city="Wrocław" />

        <EquipmentWroclaw />

        <Conversation city="Wrocław" />

        <Footer city="Wrocław" />
      </main>
    </>
  );
}
