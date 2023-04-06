import HeadMeta from 'components/HeadMeta';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Pros from 'components/Pros';
import Equipment from 'components/Equipment';
import { NextSeo } from 'next-seo';
import Script from 'next/script';
import Conversation from 'components/Conversation';
import Hero from 'components/Hero';
import { prices } from 'data/pricesList';
import AdditionalInfo from 'components/AdditionalInfo';
import InfoBar from 'components/InfoBar';
import { getContent } from 'src/services/cms/getContent';
// import BaseLayout from '../components/BaseLayout';

const title = 'odkurza.cz - wynajem odkurzaczy piorących Lublin';
const description = 'odkurza.cz, wynajem odkurzaczy piorących Lublin, wypożycz odkurzacz i wyczyść dywan, tapicerkę lub siedzenia samochodowe .';
const ogData = {};
const canonical = 'https://odkurza.cz';

export async function getStaticProps() {
  const infoBar = await getContent('infoBar');

  return {
    props: {
      infoBar,
    },
  };
}

export default function Page({ infoBar = [{ fields: { isVisible: false, turnOffDate: '2021-05-06' } }] }) {
  const noRobotsCondition = process.env.NEXT_PUBLIC_APP_STAGE === 'DEV';

  const infoBarData = infoBar[0].fields;
  const { isVisible, turnOffDate } = infoBarData;

  const isInfoBarVisible = () => {
    const visibleCondition = isVisible === true;

    const nowDate = new Date();
    const validUntilDate = new Date(turnOffDate);

    return visibleCondition && nowDate < validUntilDate;
  };

  return (
    <>
      <HeadMeta />
      <NextSeo
        title={title}
        description={description}
        canonical={canonical}
        openGraph={ogData}
        noindex={noRobotsCondition}
        nofollow={noRobotsCondition}
      />

      <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {` 
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);} 
          gtag('js', new Date()); 

          gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}'); 
        `}
      </Script>

      {/* <BaseLayout infoBar={infoBar}> */}
      <main className="relative bg-white">
        {isInfoBarVisible() && <InfoBar infoBarData={infoBarData} />}

        <Header />

        <Hero />

        <Pros />

        <Equipment prices={prices} />

        <Conversation />

        <AdditionalInfo />

        <Footer />
      </main>
      {/* </BaseLayout> */}
    </>
  );
}
