import openGraphImage from '@images/odkurzacz-pioracy-lublin.jpeg';
import { AppStageType } from 'types/types';

const { NEXT_PUBLIC_APP_STAGE } = process.env;

const indexRobotsCondition = (NEXT_PUBLIC_APP_STAGE as AppStageType) === 'PROD';

export const pageMetadata = {
  homepage: {
    alternates: {
      canonical: 'https://odkurza.cz',
    },
    description: 'odkurza.cz, wynajem odkurzaczy piorących Lublin, wypożycz odkurzacz i wyczyść dywan, tapicerkę lub siedzenia samochodowe .',
    openGraph: {
      images: openGraphImage.src,
    },
    title: 'odkurza.cz - wynajem odkurzaczy piorących Lublin',

    robots: {
      index: indexRobotsCondition,
      follow: indexRobotsCondition,
    },
  },
  contact: {
    title: 'odkurza.cz - kontakt, wynajem odkurzaczy piorących Lublin',
    description: 'odkurza.cz, napisz lub zadzwoń i wynajmij odkurzacz piorący Lublin, wyczyść dywan lub tapicerkę.',
    alternates: {
      canonical: 'https://odkurza.cz/kontakt',
    },
    openGraph: {
      images: openGraphImage,
    },
    robots: {
      index: indexRobotsCondition,
      follow: indexRobotsCondition,
    },
  },
};
