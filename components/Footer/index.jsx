import Image from 'next/image';
import iotenWhiteLogo from 'public/ioten-logo-white-small.png';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="mx-auto py-12 flex flex-col laptop:flex-row justify-between max-w-7xl px-4 sm:px-6">
      <div className="pb-4 laptop:pb-0">
        <p className="font-bold">odkurza.cz</p>
        <p>Wypożyczalnia odkurzaczy Lublin</p>
        <p>Wynajmij, posprzątaj i oddaj...</p>
        <p>Miej problem z głowy i miejsce w domu.</p>
      </div>

      <div className="py-4 laptop:pt-0 laptop:pb-0">
        <p className="font-bold hidden laptop:block">odkurza.cz</p>
        <p>Odkurzacze piorące Lublin</p>
        <p className="h-[24px] ">
          <a href="mailto:lublin@odkurza.cz" className="inline-flex items-center justify-center underline underline-offset-2 decoration-amber-300">
            <span className="hover:font-semibold">lublin@odkurza.cz</span>
          </a>
        </p>
        <p className="h-[24px] ">
          tel:
          <a href="tel:+48602446335" className="ml-2 inline-flex items-center justify-center underline underline-offset-2 decoration-amber-300">
            <span className="hover:font-semibold">602 446 335</span>
          </a>
        </p>
        <p>ul. Skrzetuskiego 8, Lublin</p>
      </div>

      <Link href="https://www.ioten.io" target="_blank" title="autor strony" rel="noopener noreferrer">
        <div className="flex pt-2 pb-4 w-full h-full self-end justify-left tablet:pt-4 tablet:pb-0 laptop:pt-0 laptop:w-[unset]">
          <p className="text-xs text-neutral-400 font-light">Created by</p>
          <div className="relative w-[70px] h-[16px]">
            <Image src={iotenWhiteLogo} priority layout="fill" objectFit="contain" alt="ioten, autor strony internetowej pulire" />
          </div>
          <p className="text-xs font-bold text-neutral-400 pt-[2px]">ioten.io</p>
        </div>
      </Link>
    </div>
  );
}
