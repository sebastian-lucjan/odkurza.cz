import Image from 'next/image';
import iotenWhiteLogo from 'public/ioten-logo-white-small.png';

export default function Footer() {
  return (
    <div className="mx-auto py-12 flex justify-between items-end max-w-7xl px-4 sm:px-6">
      <div>
        <p className="font-bold">odkurza.cz</p>
        <p>Wypożyczalnia odkurzaczy Lublin</p>
        <p>Wynajmij, posprzątaj i oddaj...</p>
        <p>Miej problem z głowy i miejsce w domu.</p>
      </div>

      <div>
        <p className="font-bold">odkurza.cz</p>
        <p>Odkurzacze piorące Lublin</p>
        <p className="h-[24px] ">
          tel:
          <a href="tel:+48602446335" className="ml-2 inline-flex items-center justify-center underline underline-offset-2 decoration-amber-300">
            <span className="hover:font-bold">602 446 335</span>
          </a>
        </p>
        <p>ul. Skrzetuskiego 8, Lublin</p>
      </div>

      <a href="https://www.ioten.io" target="_blank" title="autor strony" rel="noopener noreferrer">
        <div className="flex px-4 pt-2 pb-4 w-full h-full  items-left justify-left xxs:px-6 tablet:px-8 tablet:pt-0 tablet:pb-8">
          <p className="text-xs text-neutral-400 font-light">Created by</p>
          <div className="relative w-[70px] h-[16px]">
            <Image src={iotenWhiteLogo} priority layout="fill" objectFit="contain" alt="ioten, autor strony internetowej pulire" />
          </div>
          <p className="text-xs font-bold text-neutral-400 pt-[2px]">ioten.io</p>
        </div>
      </a>
    </div>
  );
}
