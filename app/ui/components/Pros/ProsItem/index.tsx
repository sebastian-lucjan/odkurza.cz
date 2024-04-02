import Link from 'next/link';
import { ProsItemProps } from 'app/types/types';

export default function ProsItem({ icon, textContent }: ProsItemProps) {
  return (
    <Link href="/contact" as="/kontakt">
      <div className="w-60 h-60 tablet:w-[240px] tablet:h-[240px] bg-lime-300 rounded-full flex flex-col justify-center items-center mb-10 tablet:mb-0 cursor-pointer shadow-custom">
        {icon}
        {textContent.map(({ textType, text }) => {
          if (textType === 'paragraph') {
            return (
              <p key={text} className="text-center font-bold flex flex-col px-3">
                {text}
              </p>
            );
          }

          return (
            <h3 key={text} className="flex flex-row font-extrabold text-2xl mr-2 underline decoration-white decoration-4 underline-offset-4">
              {text}
            </h3>
          );
        })}
      </div>
    </Link>
  );
}
