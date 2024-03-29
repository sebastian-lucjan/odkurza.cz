import Image from 'next/image';
import { homepageData } from 'data/homepageData';
import HeroHeading from 'components/Hero/HeroHeading';
import HeroButton from 'components/Hero/HeroButton';
import HeroProsList from 'components/Hero/HeroProsList';

export default function HeroLublin() {
  const {
    image: { src, alt },
  } = homepageData.hero;

  return (
    <div className="relative laptop:flex justify-between max-w-7xl mx-auto laptop:w-full overflow-hidden bg-white border-b-2 border-gray-100">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <HeroHeading />

              <HeroProsList />
            </div>

            <HeroButton />
          </main>
        </div>
      </div>

      <div className="flex justify-center my-8 tablet:my-12 laptop:w-1/2">
        <Image className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full" src={src} alt={alt} width={800} height={800} />
      </div>
    </div>
  );
}
