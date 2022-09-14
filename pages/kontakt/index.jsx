import { NextSeo } from 'next-seo';
import HeadMeta from 'components/HeadMeta';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Contact from 'components/Contact';

const title = '';
const description = '';
const ogData = {};
const canonical = 'https://odkurza.cz/kontakt';

export default function ContactPage() {
  return (
    <main className="relative bg-white">
      <HeadMeta />
      <NextSeo title={title} description={description} canonical={canonical} openGraph={ogData} />

      <Header />
      <Contact />

      <Footer />
    </main>
  );
}
