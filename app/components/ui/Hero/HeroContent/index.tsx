import HeroHeading from '@ui/Hero/HeroHeading';
import HeroProsList from '@ui/Hero/HeroProsList';
import ButtonLink from '@ui/Button';

export default function HeroContent() {
  return (
    <div className="relative z-10 mx-auto mt-10 flex max-w-7xl flex-col items-center bg-white px-4 pb-8 sm:mt-12 sm:px-6 sm:pb-16 md:mt-16 md:pb-20 lg:mt-20 lg:w-full lg:max-w-2xl lg:px-8 lg:pb-28 xl:mt-28 xl:pb-32 laptop:items-start">
      <HeroHeading />

      <HeroProsList />

      <ButtonLink href="/contact" asHref="/kontakt" text="Wynajmij" />
    </div>
  );
}
