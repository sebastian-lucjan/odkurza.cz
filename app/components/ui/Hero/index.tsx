import HeroContent from '@ui/Hero/HeroContent';
import HeroImage from '@ui/Hero/HeroImage';

export default function Hero() {
  return (
    <div className="relative mx-auto max-w-7xl justify-between overflow-hidden border-b-2 border-gray-100 bg-white laptop:flex laptop:w-full">
      <HeroContent />

      <HeroImage />
    </div>
  );
}
