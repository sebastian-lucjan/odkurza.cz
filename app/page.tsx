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
import { pageData } from 'data/pageData';

export const metadata = pageMetadata.homepage;

const {
  cmsData: { infoBar, mobile, pricesData },
} = pageData;

export default async function Page() {
  const { pricesObj: prices } = await getContent(pricesData.id);
  const { isVisible, turnOffDate, textContent, bargain } = await getContent(infoBar.id);
  const { mobile: mobileNumber } = await getContent(mobile.id);

  const isInfoBarVisible = infoBarVisibility(isVisible, turnOffDate);

  return (
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
  );
}
