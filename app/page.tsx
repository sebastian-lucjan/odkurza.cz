import Header from '@ui/Header';
import Footer from '@ui/Footer';
import Pros from '@ui/Pros';
import Equipment from '@ui/Equipment';
import Hero from '@ui/Hero';
import AdditionalInfo from '@ui/AdditionalInfo';
import InfoBar from '@ui/InfoBar';
import Conversation from '@ui/Conversation';
import { getContent } from '@lib/services/cms/getContent';
import { pageMetadata } from 'data/metadata';
import infoBarVisibility from '@lib/helpers/isInfoBarVisible';
import { pageData } from 'data/pageData';

export const metadata = pageMetadata.homepage;

const {
  cmsData: { infoBar, pricesData },
} = pageData;

export default async function Page() {
  const { pricesObj: prices } = await getContent(pricesData.id);
  const { isVisible, turnOffDate, textContent, bargain } = await getContent(infoBar.id);

  const isInfoBarVisible = infoBarVisibility(isVisible, turnOffDate);

  return (
    <main className="relative bg-white">
      {isInfoBarVisible && <InfoBar textContent={textContent} bargain={bargain} />}

      <Header />

      <Hero />

      <Pros />

      <Equipment pricesJSON={JSON.stringify(prices)} />

      <Conversation />

      <AdditionalInfo />

      <Footer />
    </main>
  );
}
