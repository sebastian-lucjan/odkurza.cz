import Link from 'next/link';
import { MessageSendProps } from 'app/types/types';

export default function MessageSend({ handleBackToForm }: MessageSendProps) {
  return (
    <div className="flex flex-col justify-between overflow-hidden rounded-md bg-white px-4 py-5 shadow sm:p-6">
      <h2 className="mb-4 text-lg font-semibold text-gray-800">Twoja wiadomość została wysłana.</h2>
      <p className="text-sm text-gray-700">Zwykle odpowiadamy maksymalnie w ciągu kilku godzin roboczych.</p>
      <p className="text-sm text-gray-700">Jeśli zależy Ci na czasie zadzwoń do nas.</p>
      <button
        type="button"
        className="text-md mt-4 cursor-pointer text-left font-medium text-gray-700 underline underline-offset-[5px] hover:text-green-600"
        onClick={handleBackToForm}
      >
        Wróć do <span className="font-semibold">formularza</span>
      </button>

      <Link href="/" className="text-md mt-4 cursor-pointer font-medium text-gray-700 underline underline-offset-[5px] hover:text-green-600">
        Wróć do <span className="font-semibold">strony głównej</span>
      </Link>
    </div>
  );
}
