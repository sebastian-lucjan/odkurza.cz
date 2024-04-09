import Image from 'next/image';
import iotenWhiteLogo from 'public/ioten-logo-white-small.png';
import Link from 'next/link';
import cityData from 'data/citiesData';

export default function Footer() {
  const { cityName, mail, mobile, address } = cityData;

  return (
    <div className="mx-auto flex max-w-7xl flex-col justify-between py-12 px-4 sm:px-6 laptop:flex-row">
      <div className="pb-4 laptop:pb-0">
        <p className="font-bold">odkurza.cz</p>
        <p>Wypożyczalnia odkurzaczy {cityName}</p>
        <p>Wynajmij, posprzątaj i oddaj...</p>
        <p>Miej problem z głowy i wolne miejsce w domu.</p>
      </div>

      <div className="flex flex-col items-start py-4 laptop:pt-0 laptop:pb-0">
        <p className="hidden font-bold laptop:block">odkurza.cz</p>
        <p>Odkurzacze piorące {cityName}</p>
        <Link
          href={`mailto:${mail}`}
          className="inline-flex h-[24px] items-center justify-center underline decoration-lime-300 decoration-2 underline-offset-2 hover:font-semibold"
        >
          {mail}
        </Link>

        <Link href={`tel:+48${mobile}`} className="underline decoration-lime-300 decoration-2 underline-offset-2 hover:font-semibold">
          Tel: {mobile}
        </Link>
        <p>{address}</p>
      </div>

      <Link
        href="https://www.ioten.io"
        title="Autor strony: ioten"
        target="_blank"
        className="justify-left flex h-full w-full self-end pt-2 pb-4 tablet:pt-4 tablet:pb-0 laptop:w-[unset] laptop:pt-0"
        rel="noopener noreferrer"
      >
        <p className="text-xs font-light text-neutral-600">Created by</p>
        <div className="relative flex h-[16px] w-[70px] justify-center">
          <Image src={iotenWhiteLogo?.src} width={41} height={15} alt="ioten, autor strony internetowej" />
        </div>
        <p className="pt-[1px] text-xs font-bold text-neutral-500">ioten.io</p>
      </Link>
    </div>
  );
}
