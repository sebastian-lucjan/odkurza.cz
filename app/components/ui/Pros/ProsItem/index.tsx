import Link from 'next/link';
import { ProsItemProps } from 'app/types/UIComponentTypes';

export default function ProsItem({ icon, textContent }: ProsItemProps) {
  return (
    <Link href="/contact" as="/kontakt">
      <div className="mb-10 flex h-60 w-60 cursor-pointer flex-col items-center justify-center rounded-full bg-lime-300 shadow-custom tablet:mb-0 tablet:h-[240px] tablet:w-[240px]">
        <div className="mb-2 h-20 w-20">{icon}</div>
        {textContent.map(({ textType, text }) => {
          if (textType === 'paragraph') {
            return (
              <p key={text} className="flex flex-col px-3 text-center font-bold">
                {text}
              </p>
            );
          }

          return (
            <h3 key={text} className="mr-2 flex flex-row text-2xl font-extrabold underline decoration-white decoration-4 underline-offset-4">
              {text}
            </h3>
          );
        })}
      </div>
    </Link>
  );
}
