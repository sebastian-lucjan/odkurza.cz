import HeadMeta from 'components/HeadMeta';
import HeroWroclaw from 'components/Wroclaw/Hero';
import Footer from 'components/Footer';
import Pros from 'components/Wroclaw/Pros';
import { NextSeo } from 'next-seo';
import Script from 'next/script';
import Conversation from 'components/Conversation';
import Equipment from 'components/Equipment';
import HeaderWroclaw from 'components/Wroclaw/Header';
import { pricesWroclaw } from 'data/pricesList';
import cityData from 'data/citiesData';

const title = 'odkurza.cz - wynajem odkurzaczy piorących Wrocław';
const description = 'odkurza.cz, wynajem odkurzaczy piorących we Wrocławiu, wypożycz odkurzacz i wyczyść wykładzinę, dywan, tapicerkę samochodową.';
const ogData = {};
const canonical = 'https://odkurza.cz/wroclaw';

export default function Wroclaw() {
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
        <HeaderWroclaw />

        <HeroWroclaw />

        <Pros />

        <Equipment city="Wrocław" prices={pricesWroclaw} />

        <Conversation />

        <Footer cityObj={cityData.wroclaw} />
      </main>
    </>
  );
}
