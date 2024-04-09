import vacuumCleaner from 'public/images/odkurzacz-pioracy-lublin.jpeg';
import Image from 'next/image';

export default function EquipmentImage() {
  return (
    <div className="m-8">
      <Image
        className="h-full object-cover transition-transform hover:scale-105 md:h-96 lg:h-full lg:w-full"
        src={vacuumCleaner?.src}
        width={800}
        height={800}
        alt="Odkurzacz piorący z akcesoriami dostępny w wypożyczalni w Lublinie"
      />
    </div>
  );
}
