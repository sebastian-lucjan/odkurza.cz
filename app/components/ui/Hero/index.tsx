import Image from 'next/image';
import HeroHeading from '@ui/Hero/HeroHeading';
import HeroButton from '@ui/Hero/HeroButton';
import HeroProsList from '@ui/Hero/HeroProsList';
import { homepageData } from 'data/homepageData';

export default function HeroLublin() {
  const {
    image: { src, alt },
  } = homepageData.hero;

  return (
    <div className="relative mx-auto max-w-7xl justify-between overflow-hidden border-b-2 border-gray-100 bg-white laptop:flex laptop:w-full">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <div className="mx-auto mt-10 flex max-w-7xl flex-col items-center px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 laptop:items-start">
            <HeroHeading />

            <HeroProsList />

            <HeroButton />
          </div>
        </div>
      </div>

      <div className="my-8 flex justify-center tablet:my-12 laptop:w-1/2">
        <Image className="h-full w-full object-cover lg:w-full" src={src} alt={alt} width={800} height={800} />
      </div>
    </div>
  );
}
