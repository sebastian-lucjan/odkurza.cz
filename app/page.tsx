// import HeadMeta from '@ui/components/HeadMeta';
import Header from '@ui/components/Header';
import Footer from '@ui/components/Footer';
import Pros from '@ui/components/Pros';
import Equipment from '@ui/components/Equipment';
// import Script from 'next/script';
import Hero from '@ui/components/Hero';
import AdditionalInfo from '@ui/components/AdditionalInfo';
import InfoBar from '@ui/components/InfoBar';
import Conversation from '@ui/components/Conversation';
import { getContent } from './lib/services/cms/getContent';

// const title = 'odkurza.cz - wynajem odkurzaczy piorących Lublin';
// const description = 'odkurza.cz, wynajem odkurzaczy piorących Lublin, wypożycz odkurzacz i wyczyść dywan, tapicerkę lub siedzenia samochodowe .';
// const ogData = {};
// const canonical = 'https://odkurza.cz';

export default async function Page() {
  const infoBar = await getContent('infoBar');
  const mobileData = await getContent('mobile');
  const pricesData = await getContent('pricesData');

  const [
    {
      fields: { mobile: mobileNumber },
    },
  ] = mobileData;

  const [
    {
      fields: { isVisible, turnOffDate, textContent, bargain },
    },
  ] = infoBar;

  const noRobotsCondition = process.env.NEXT_PUBLIC_APP_STAGE === 'DEV';

  const { pricesObj: prices } = pricesData[0].fields;

  const isInfoBarVisible = () => {
    const visibleCondition = isVisible === true;

    const nowDate = new Date();
    const validUntilDate = new Date(turnOffDate);

    return visibleCondition && nowDate < validUntilDate;
  };

  return (
    <>
      {/*<HeadMeta />*/}

      {/*<Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`} strategy="afterInteractive" />*/}
      {/*<Script id="google-analytics" strategy="afterInteractive">*/}
      {/*  {` */}
      {/*    window.dataLayer = window.dataLayer || [];*/}
      {/*    function gtag(){window.dataLayer.push(arguments);} */}
      {/*    gtag('js', new Date()); */}

      {/*    gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}'); */}
      {/*  `}*/}
      {/*</Script>*/}

      <main className="relative bg-white">
        {isInfoBarVisible() && <InfoBar textContent={textContent} bargain={bargain} />}

        <Header mobileNumber={mobileNumber} />

        <Hero />

        <Pros />

        <Equipment pricesJSON={JSON.stringify(prices)} />

        <Conversation />

        <AdditionalInfo />

        <Footer />
      </main>
    </>
  );
}
