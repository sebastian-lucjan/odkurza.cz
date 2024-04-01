import Header from '@ui/components/Header';
import Footer from '@ui/components/Footer';
import Pros from '@ui/components/Pros';
import Equipment from '@ui/components/Equipment';
import Hero from '@ui/components/Hero';
import AdditionalInfo from '@ui/components/AdditionalInfo';
import InfoBar from '@ui/components/InfoBar';
import Conversation from '@ui/components/Conversation';
import { getContent } from '@lib/services/cms/getContent';
import { pageMetadata } from 'data/metadata';
import infoBarVisibility from '@lib/helpers/isInfoBarVisible';

export const metadata = pageMetadata.homepage;

export default async function Page() {
  const infoBar = await getContent('infoBar');
  const mobileData = await getContent('mobile');
  const pricesData = await getContent('pricesData');

  const { mobile: mobileNumber } = mobileData;

  const { isVisible, turnOffDate, textContent, bargain } = infoBar;

  const { pricesObj: prices } = pricesData;

  const isInfoBarVisible = infoBarVisibility(isVisible, turnOffDate);

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
        {isInfoBarVisible && <InfoBar textContent={textContent} bargain={bargain} />}

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
