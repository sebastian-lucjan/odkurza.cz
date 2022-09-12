import { Popover } from '@headlessui/react';
import { NextSeo } from 'next-seo';
import HeadMeta from 'src/HeadMeta';
import Header from 'components/Header';
import Footer from 'components/Footer';

const title = '';
const description = '';
const ogData = {};
const canonical = 'https://odkurza.cz/kontakt';

export default function Contact() {
  return (
    <Popover className="relative bg-white">
      <HeadMeta />
      <NextSeo title={title} description={description} canonical={canonical} openGraph={ogData} />

      <Header />
      {/* <Hero /> */}
      {/* <Pros /> */}
      {/* <Equipment /> */}

      <Footer />
    </Popover>
  );
}
