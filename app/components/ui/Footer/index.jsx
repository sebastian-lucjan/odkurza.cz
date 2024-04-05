import Image from 'next/image';
import iotenWhiteLogo from 'public/ioten-logo-white-small.png';
import Link from 'next/link';
import cityData from 'data/citiesData';

export default function Footer() {
  const { cityName, mail, mobile, address } = cityData;

  return (
    <div className="mx-auto py-12 flex flex-col laptop:flex-row justify-between max-w-7xl px-4 sm:px-6">
      <div className="pb-4 laptop:pb-0">
        <p className="font-bold">odkurza.cz</p>
        <p>Wypożyczalnia odkurzaczy {cityName}</p>
        <p>Wynajmij, posprzątaj i oddaj...</p>
        <p>Miej problem z głowy i wolne miejsce w domu.</p>
      </div>

      <div className="flex flex-col items-start py-4 laptop:pt-0 laptop:pb-0">
        <p className="font-bold hidden laptop:block">odkurza.cz</p>
        <p>Odkurzacze piorące {cityName}</p>
        <Link
          href={`mailto:${mail}`}
          className="h-[24px] inline-flex items-center justify-center underline underline-offset-2 decoration-2 decoration-lime-300 hover:font-semibold"
        >
          {mail}
        </Link>

        <Link href={`tel:+48${mobile}`} className="underline underline-offset-2 decoration-2 decoration-lime-300 hover:font-semibold">
          Tel: {mobile}
        </Link>
        <p>{address}</p>
      </div>

      <Link
        href="https://www.ioten.io"
        title="Autor strony: ioten"
        target="_blank"
        className="flex pt-2 pb-4 w-full h-full self-end justify-left tablet:pt-4 tablet:pb-0 laptop:pt-0 laptop:w-[unset]"
        rel="noopener noreferrer"
      >
        <p className="text-xs text-neutral-600 font-light">Created by</p>
        <div className="relative w-[70px] h-[16px] flex justify-center">
          <Image src={iotenWhiteLogo?.src} width={41} height={15} alt="ioten, autor strony internetowej" />
        </div>
        <p className="text-xs font-bold text-neutral-500 pt-[1px]">ioten.io</p>
      </Link>
    </div>
  );
}