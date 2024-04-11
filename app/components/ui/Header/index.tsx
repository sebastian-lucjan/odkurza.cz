import Link from 'next/link';
import Navigation from '@ui/NavigationMenu';
import { getContent } from '@lib/services/cms/getContent';
import Button from '@ui/Button';
import MobileSVG from 'app/components/svg/MobileSVG';
import { MOBILE_CMS_ID } from 'data/constants';

export default async function Header() {
  const { mobile: mobileNumber } = await getContent(MOBILE_CMS_ID);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="relative flex flex-col items-center justify-between border-b-2 border-gray-100 py-6 laptop:flex-row">
        <div className="flex w-[80%] items-center justify-between text-4xl font-bold text-gray-800">
          <Link href="/">odkurza.cz</Link>

          <Navigation />
        </div>

        <Button text={mobileNumber} href={`tel:+48${mobileNumber}`}>
          <MobileSVG />
        </Button>
      </div>
    </div>
  );
}
