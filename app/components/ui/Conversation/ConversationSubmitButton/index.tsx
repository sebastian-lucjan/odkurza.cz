import { ConversationSubmitButtonProps } from 'app/types/ConversationTypes';

export default function ConversationSubmitButton({ isSending }: ConversationSubmitButtonProps) {
  return (
    <div className="flex justify-end bg-gray-100 px-6 py-3 text-left">
      <button
        type="submit"
        className="text-md inline-flex w-full justify-center rounded-md border border-transparent bg-lime-300 py-3 font-semibold text-black shadow-sm hover:bg-green-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 laptop:w-[300px]"
      >
        {isSending ? 'Wysyłanie...' : 'Wyślij wiadomość'}
      </button>
    </div>
  );
}
