import Header from '@ui/components/Header';
import Footer from '@ui/components/Footer';
import Contact from '@ui/components/Contact';
import InfoBar from '@ui/components/InfoBar';
import { getContent } from '@lib/services/cms/getContent';
import { pageMetadata } from 'data/metadata';
import infoBarVisibility from '@lib/helpers/isInfoBarVisible';
import { pageData } from 'data/pageData';
import { Metadata } from 'next';

export const metadata: Metadata = pageMetadata.contact;

const {
  cmsData: { infoBar, mobile },
} = pageData;

export default async function ContactPage() {
  const { isVisible, turnOffDate, textContent, bargain } = await getContent(infoBar.id);
  const { mobile: mobileNumber } = await getContent(mobile.id);

  const isInfoBarVisible = infoBarVisibility(isVisible, turnOffDate);

  return (
    <>
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
        {isInfoBarVisible && <InfoBar textContent={textContent} bargain={bargain} />}

        <Header mobileNumber={mobileNumber} />

        <Contact />

        <Footer />
      </main>
    </>
  );
}
