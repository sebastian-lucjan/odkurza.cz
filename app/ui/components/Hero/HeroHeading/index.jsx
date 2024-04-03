import { homepageData } from '../data/homepageData';

export default function HeroHeading() {
  const { heading } = homepageData.hero;
  return (
    <h1 className="text-4xl laptop:text-5xl desktop:text-6xl font-black text-gray-900 sm:text-5xl md:text-6xl tracking-hero font-roboto">
      {heading.mainText} <span className="block xl:inline text-lime-400 font-bold leading-relaxed font-poppins">{heading.highlightedText}</span>
    </h1>
  );
}
