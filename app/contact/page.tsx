import Header from '@ui/Header';
import Footer from '@ui/Footer';
import Contact from '@ui/Contact';
import InfoBar from '@ui/InfoBar';
import { pageMetadata } from 'data/metadata';
import infoBarVisibility from '@lib/helpers/isInfoBarVisible';
import { Metadata } from 'next';
import { getContent } from '@lib/services/cms/getContent';
import { INFOBAR_CMS_ID } from 'data/constants';

export const metadata: Metadata = pageMetadata.contact;

export default async function ContactPage() {
  const { isVisible, turnOffDate, textContent, bargain } = await getContent(INFOBAR_CMS_ID);

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
