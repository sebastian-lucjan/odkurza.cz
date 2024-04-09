import { UserIcon } from '@heroicons/react/24/outline';
import { FirmIconProps } from 'app/types/types';

export function FirmIcon({ iconSize, bubblesSize }: FirmIconProps) {
  return (
    <div
      className={`flex items-center justify-center bg-gradient-to-b from-lime-100 to-lime-400 w-[${iconSize}px] h-[${iconSize}px] rounded-full px-2 py-2 text-${bubblesSize} ml-2 shadow-md`}
    >
      <span className="brightness-100">🫧</span>
    </div>
  );
}

export function CustomersIcon() {
  return (
    <div className="mx-4 flex h-[32px] w-[32px] items-end justify-center rounded-full border border-gray-300 bg-gradient-to-b from-gray-50 to-gray-100 text-xl shadow-md">
      <UserIcon className="h-[32px] w-[32px] p-1 text-gray-700" />
    </div>
  );
}
