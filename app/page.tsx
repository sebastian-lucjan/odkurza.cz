import Header from '@ui/components/Header';
import Footer from '@ui/components/Footer';
import Pros from '@ui/components/Pros';
import Equipment from '@ui/components/Equipment';
import Hero from '@ui/components/Hero';
import AdditionalInfo from '@ui/components/AdditionalInfo';
import InfoBar from '@ui/components/InfoBar';
import Conversation from '@ui/components/Conversation';
import { getContent } from '@lib/services/cms/getContent';
import openGraphImage from '@images/odkurzacz-pioracy-lublin.jpeg';

export const metadata = {
  title: 'odkurza.cz - wynajem odkurzaczy piorących Lublin',
  description: 'odkurza.cz, wynajem odkurzaczy piorących Lublin, wypożycz odkurzacz i wyczyść dywan, tapicerkę lub siedzenia samochodowe .',
  alternates: {
    canonical: 'https://odkurza.cz',
  },
  openGraph: {
    images: openGraphImage,
  },
};

export default async function Page() {
  const infoBar = await getContent('infoBar');
  const mobileData = await getContent('mobile');
  const pricesData = await getContent('pricesData');

  const { mobile: mobileNumber } = mobileData;

  const { isVisible, turnOffDate, textContent, bargain } = infoBar;

  const noRobotsCondition = process.env.NEXT_PUBLIC_APP_STAGE === 'DEV';

  const { pricesObj: prices } = pricesData;

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
