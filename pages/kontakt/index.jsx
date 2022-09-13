import { Popover } from '@headlessui/react';
import { NextSeo } from 'next-seo';
import HeadMeta from 'src/components/HeadMeta';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Contact from 'src/components/Contact';

const title = '';
const description = '';
const ogData = {};
const canonical = 'https://odkurza.cz/kontakt';

export default function ContactPage() {
  return (
    <Popover className="relative bg-white">
      <HeadMeta />
      <NextSeo title={title} description={description} canonical={canonical} openGraph={ogData} />

      <Header />
      <Contact />
      {/* <Pros /> */}
      {/* <Equipment /> */}

      <Footer />
    </Popover>
  );
}
