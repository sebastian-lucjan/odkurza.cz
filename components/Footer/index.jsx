import Image from 'next/image';
import iotenWhiteLogo from 'public/ioten-logo-white-small.png';
import Link from 'next/link';

export default function Footer({ cityObj }) {
  const { cityName, mail, mobile, address } = cityObj;

  const mainColor = cityName === 'Lublin' ? 'lime' : 'sky';

  return (
    <div className="mx-auto py-12 flex flex-col laptop:flex-row justify-between max-w-7xl px-4 sm:px-6">
      <div className="pb-4 laptop:pb-0">
        <p className="font-bold">odkurza.cz</p>
        <p>Wypożyczalnia odkurzaczy {cityName}</p>
        <p>Wynajmij, posprzątaj i oddaj...</p>
        {cityName === 'Lublin' ? <p>Miej problem z głowy i wolne miejsce w domu.</p> : <p>Bez kaucji, 7 dni w tygodniu.</p>}
      </div>

      <div className="py-4 laptop:pt-0 laptop:pb-0">
        <p className="font-bold hidden laptop:block">odkurza.cz</p>
        <p>Odkurzacze piorące {cityName}</p>
        <p className="h-[24px] ">
          <a
            href={`mailto:${mail}`}
            className={`inline-flex items-center justify-center underline underline-offset-2 decoration-2 decoration-${mainColor}-300`}
          >
            <span className="hover:font-semibold">{mail}</span>
          </a>
        </p>
        <p className="h-[24px] ">
          tel:
          <a
            href={`tel:+48${mobile}`}
            className={`ml-2 inline-flex items-center justify-center underline underline-offset-2 decoration-2 decoration-${mainColor}-300`}
          >
            <span className="hover:font-semibold">{mobile}</span>
          </a>
        </p>
        <p>{address}</p>
      </div>

      <Link href="https://www.ioten.io" title="autor strony">
        <a
          target="_blank"
          className="flex pt-2 pb-4 w-full h-full self-end justify-left tablet:pt-4 tablet:pb-0 laptop:pt-0 laptop:w-[unset]"
          rel="noopener noreferrer"
        >
          <p className="text-xs text-neutral-600 font-light">Created by</p>
          <div className="relative w-[70px] h-[16px]">
            <Image src={iotenWhiteLogo} priority layout="fill" objectFit="contain" alt="ioten, autor strony internetowej pulire" />
          </div>
          <p className="text-xs font-bold text-neutral-500 pt-[1px]">ioten.io</p>
        </a>
      </Link>
    </div>
  );
}
