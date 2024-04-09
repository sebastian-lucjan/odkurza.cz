import Image from 'next/image';
import { homepageData } from 'data/homepageData';

const {
  image: { src, alt },
} = homepageData.hero;

export default function HeroImage() {
  return (
    <div className="my-8 flex justify-center tablet:my-12 laptop:w-1/2">
      <Image className="h-full w-full object-cover lg:w-full" src={src} alt={alt} width={800} height={800} />
    </div>
  );
}
