import Link from 'next/link';
import { MessageSendProps } from 'app/types/types';

export default function MessageSend({ handleBackToForm }: MessageSendProps) {
  return (
    <div className="overflow-hidden flex flex-col justify-between shadow rounded-md bg-white px-4 py-5 sm:p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Twoja wiadomość została wysłana.</h2>
      <p className="text-sm text-gray-700">Zwykle odpowiadamy maksymalnie w ciągu kilku godzin roboczych.</p>
      <p className="text-sm text-gray-700">Jeśli zależy Ci na czasie zadzwoń do nas.</p>
      <button
        type="button"
        className="mt-4 text-md text-left font-medium underline underline-offset-[5px] text-gray-700 hover:text-green-600 cursor-pointer"
        onClick={handleBackToForm}
      >
        Wróć do <span className="font-semibold">formularza</span>
      </button>

      <Link href="/" className="mt-4 text-md font-medium underline underline-offset-[5px] text-gray-700 hover:text-green-600 cursor-pointer">
        Wróć do <span className="font-semibold">strony głównej</span>
      </Link>
    </div>
  );
}
