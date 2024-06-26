import openGraphImage from '@images/odkurzacz-pioracy-lublin.jpeg';
import { AppStageType } from 'app/types/AppTypes';

const { NEXT_PUBLIC_APP_STAGE } = process.env;

const indexRobotsCondition = (NEXT_PUBLIC_APP_STAGE as AppStageType) === 'PROD';

export const pageMetadata = {
  homepage: {
    metadataBase: new URL('https://odkurza.cz'),

    alternates: {
      canonical: 'https://odkurza.cz',
    },
    description: 'odkurza.cz, wynajem odkurzaczy piorących Lublin, wypożycz odkurzacz i wyczyść dywan, tapicerkę lub siedzenia samochodowe .',

    openGraph: {
      title: 'odkurza.cz - wynajem odkurzaczy piorących Lublin',
      description: 'odkurza.cz, wynajem odkurzaczy piorących Lublin, wypożycz odkurzacz i wyczyść dywan, tapicerkę lub siedzenia samochodowe .',
      url: 'https://odkurza.cz/kontakt',
      siteName: 'odkurza.cz',
      images: [
        {
          url: openGraphImage.src,
          width: 1000,
          height: 1000,
          alt: 'Odkurzacz piorący Karcher',
        },
      ],
      locale: 'pl_PL',
      type: 'website',
    },

    title: 'odkurza.cz - wynajem odkurzaczy piorących Lublin',

    robots: {
      index: indexRobotsCondition,
      follow: indexRobotsCondition,
    },
  },
  contact: {
    metadataBase: new URL('https://odkurza.cz/kontakt'),

    alternates: {
      canonical: 'https://odkurza.cz/kontakt',
    },
    description: 'odkurza.cz, napisz lub zadzwoń i wynajmij odkurzacz piorący Lublin, wyczyść dywan lub tapicerkę.',
    openGraph: {
      title: 'odkurza.cz - kontakt, wynajem odkurzaczy piorących Lublin',
      description: 'odkurza.cz, napisz lub zadzwoń i wynajmij odkurzacz piorący Lublin, wyczyść dywan lub tapicerkę.',
      url: 'https://odkurza.cz/kontakt',
      siteName: 'odkurza.cz',
      images: [
        {
          url: openGraphImage.src,
          width: 1000,
          height: 1000,
          alt: 'Odkurzacz piorący Karcher',
        },
      ],
      locale: 'pl_PL',
      type: 'website',
    },
    robots: {
      index: indexRobotsCondition,
      follow: indexRobotsCondition,
    },
    title: 'odkurza.cz - kontakt, wynajem odkurzaczy piorących Lublin',
  },
  notFound: {
    metadataBase: new URL('https://odkurza.cz'),

    description: 'odkurza.cz, napisz lub zadzwoń i wynajmij odkurzacz piorący Lublin, wyczyść dywan lub tapicerkę.',
    robots: {
      index: false,
      follow: false,
    },
    title: 'odkurza.cz - strona 404',
  },
};
