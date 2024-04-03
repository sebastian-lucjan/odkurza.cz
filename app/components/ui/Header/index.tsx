import Link from 'next/link';
import Button from '@ui/Button';
import Navigation from '@ui/NavigationMenu';
import { getContent } from '@lib/services/cms/getContent';
import { pageData } from 'data/pageData';

const {
  cmsData: { mobile },
} = pageData;

export default async function Header() {
  const { mobile: mobileNumber } = await getContent(mobile.id);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="relative flex flex-col laptop:flex-row items-center justify-between border-b-2 border-gray-100 py-6">
        <div className="text-4xl text-gray-800 font-bold flex items-center justify-between w-[80%]">
          <Link href="/">odkurza.cz</Link>

          <Navigation />
        </div>

        <div className="items-center justify-end">
          <Button mobileNumber={mobileNumber} />
        </div>
      </div>
    </div>
  );
}
