import Header from '@ui/Header';
import Footer from '@ui/Footer';
import Pros from '@ui/Pros';
import Equipment from '@ui/Equipment';
import Hero from '@ui/Hero';
import AdditionalInfo from '@ui/AdditionalInfo';
import Conversation from '@ui/Conversation';
import { getContent } from '@lib/services/cms/getContent';
import { pageMetadata } from 'data/metadata';
import { pageData } from 'data/pageData';

export const metadata = pageMetadata.homepage;

const { pricesData } = pageData.cmsData;

export default async function Page() {
  const { pricesObj: prices } = await getContent(pricesData.id);

  return (
    <>
      <Header />

      <Hero />

      <Pros />

      <Equipment pricesJSON={JSON.stringify(prices)} />

      <Conversation />

      <AdditionalInfo />

      <Footer />
    </>
  );
}
