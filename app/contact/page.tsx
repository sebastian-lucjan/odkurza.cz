import Header from '@ui/Header';
import Footer from '@ui/Footer';
import Contact from '@ui/Contact';
import InfoBar from '@ui/InfoBar';
import { pageMetadata } from 'data/metadata';
import infoBarVisibility from '@lib/helpers/isInfoBarVisible';
import { pageData } from 'data/pageData';
import { Metadata } from 'next';
import { getContent } from '@lib/services/cms/getContent';

export const metadata: Metadata = pageMetadata.contact;

const {
  cmsData: { infoBar },
} = pageData;

export default async function ContactPage() {
  const { isVisible, turnOffDate, textContent, bargain } = await getContent(infoBar.id);

  const isInfoBarVisible = infoBarVisibility(isVisible, turnOffDate);

  return (
    <main className="relative bg-white">
      {isInfoBarVisible && <InfoBar textContent={textContent} bargain={bargain} />}

      <Header />

      <Contact />

      <Footer />
    </main>
  );
}
