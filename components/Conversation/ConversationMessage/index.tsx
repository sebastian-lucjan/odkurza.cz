import { CustomersIcon, FirmIcon } from 'components/Icons';
import { ConversationMessageType, TextContentArray } from 'types';

export default function ConversationMessage({ type, textContent }: ConversationMessageType) {
  if (type === 'question') {
    return (
      <div className="flex flex-row-reverse justify-start items-end my-8">
        <CustomersIcon />
        <p className="rounded-2xl bg-gray-50 border border-gray-300 px-4 py-2 text-gray-700 shadow-md">{textContent as string}</p>
      </div>
    );
  }
  // type === 'answer'
  return (
    <div className="flex mr-10 items-end my-8">
      <FirmIcon iconSize={32} bubblesSize="xl" />
      <p className="ml-4 bg-gradient-to-b from-lime-200 to-lime-300 max-w-[60%] rounded-2xl px-4 py-2 text-black shadow-md">
        {(textContent as TextContentArray).map((item) => {
          if (item.type === 'regular') {
            return <span key={item.text}>{item.text}</span>;
          }
          return (
            <span key={item.text} className="font-semibold">
              {item.text}
            </span>
          );
        })}
      </p>
    </div>
  );
}
