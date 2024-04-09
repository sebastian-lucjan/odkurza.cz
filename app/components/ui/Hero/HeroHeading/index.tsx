import { homepageData } from 'data/homepageData';

export default function HeroHeading() {
  const { heading } = homepageData.hero;
  return (
    <h1 className="font-roboto text-4xl font-black tracking-hero text-gray-900 sm:text-5xl md:text-6xl laptop:text-5xl desktop:text-6xl">
      {heading.mainText} <span className="block font-poppins font-bold leading-relaxed text-lime-400 xl:inline">{heading.highlightedText}</span>
    </h1>
  );
}
