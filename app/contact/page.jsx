// import HeadMeta from '@ui/components/HeadMeta';
import Header from '@ui/components/Header';
import Footer from '@ui/components/Footer';
import Contact from '@ui/components/Contact';
// import Script from 'next/script';
import InfoBar from '@ui/components/InfoBar';
import { getContent } from '@lib/services/cms/getContent';

// const title = 'odkurza.cz - kontakt, wynajem odkurzaczy piorących Lublin';
// const description = 'odkurza.cz, napisz lub zadzwoń i wynajmij odkurzacz piorący Lublin, wyczyść dywan lub tapicerkę.';
// const ogData = {};
// const canonical = 'https://odkurza.cz/kontakt';

export default async function ContactPage() {
  const infoBar = await getContent('infoBar');
  const mobileData = await getContent('mobile');

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

  const isInfoBarVisible = () => {
    const visibleCondition = isVisible === true;

    const nowDate = new Date();
    const validUntilDate = new Date(turnOffDate);

    return visibleCondition && nowDate < validUntilDate;
  };

  return (
    <>
      {/*<HeadMeta />*/}
      {/*<NextSeo*/}
      {/*  title={title}*/}
      {/*  description={description}*/}
      {/*  canonical={canonical}*/}
      {/*  openGraph={ogData}*/}
      {/*  noindex={noRobotsCondition}*/}
      {/*  nofollow={noRobotsCondition}*/}
      {/*/>*/}

      {/*<Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`} strategy="afterInteractive" />*/}
      {/*<Script id="google-analytics" strategy="afterInteractive">*/}
      {/*  {` */}
      {/*    window.dataLayer = window.dataLayer || []; */}
      {/*    function gtag(){window.dataLayer.push(arguments);} */}
      {/*    gtag('js', new Date()); */}

      {/*    gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}'); */}
      {/*  `}*/}
      {/*</Script>*/}
      <main className="relative bg-white">
        {isInfoBarVisible() && <InfoBar textContent={textContent} bargain={bargain} />}

        <Header mobileNumber={mobileNumber} />

        <Contact />

        <Footer />
      </main>
    </>
  );
}
