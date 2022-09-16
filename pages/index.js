import HeadMeta from 'components/HeadMeta';
import Hero from 'components/Hero';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Pros from 'components/Pros';
import Equipment from 'components/Equipment';
import { NextSeo } from 'next-seo';
import Script from 'next/script';
import Conversation from 'components/Conversation';

const title = 'odkurza.cz - wynajem odkurzaczy piorących Lublin';
const description = 'odkurza.cz, wynajem odkurzaczy piorących Lublin, wypożycz odkurzacz i wyczyść dywan, tapicerkę lub siedzenia samochodowe .';
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

        <Hero />

        <Pros />

        <Equipment />

        <Conversation />

        <Footer />
      </main>
    </>
  );
}
