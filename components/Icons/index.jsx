import { UserIcon } from '@heroicons/react/24/outline';

export function FirmIcon({ iconSize, bubblesSize, lublin }) {
  return (
    <div
      className={`flex justify-center items-center bg-gradient-to-b ${
        lublin ? 'from-lime-100 to-lime-400' : 'from-sky-200 to-sky-400'
      } w-[${iconSize}px] h-[${iconSize}px] px-2 py-2 rounded-full text-${bubblesSize} ml-2 shadow-md`}
    >
      <span className={`brightness-${lublin ? '100' : '150'}`}>🫧</span>
    </div>
  );
}

export function CustomersIcon() {
  return (
    <div className="flex justify-center items-end bg-gradient-to-b from-gray-50 to-gray-100 border border-gray-300 shadow-md rounded-full text-xl mx-4 w-[32px] h-[32px] text-sm">
      <UserIcon className="w-[32px] h-[32px] p-1 text-gray-700" />
    </div>
  );
}
