import { CustomersIcon, FirmIcon } from '@ui/Icons';
import { homepageData } from 'data/homepageData';

export default function IntroSection() {
  const { headingCTA, companyAddress } = homepageData.conversation;

  return (
    <div>
      <h2 className="flex justify-center text-3xl font-semibold text-gray-800">{headingCTA}</h2>
      <div className="flex items-center border-b-2 border-gray-100 pb-4 mb-4">
        <FirmIcon iconSize={60} bubblesSize="4xl" />
        <p className="ml-4 text-2xl font-semibold text-gray-800">{companyAddress}</p>
      </div>

      <div className="flex flex-row-reverse justify-start items-end my-4">
        <CustomersIcon />
        <p className="rounded-2xl bg-gray-50 border border-gray-300 px-4 py-2 text-gray-700 shadow-md">odkurza.cz czyli kto?</p>
      </div>
    </div>
  );
}
