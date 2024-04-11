import { CustomersIcon, FirmIcon } from '@ui/Icons';
import { ConversationMessageType, TextContentArray } from 'app/types/ConversationTypes';

export default function ConversationMessage({ type, textContent, fieldValue, children }: ConversationMessageType) {
  if (type === 'user') {
    return (
      <div className="my-8 flex flex-row-reverse items-end justify-start">
        <CustomersIcon />
        {children || (
          <p className="rounded-2xl border border-gray-300 bg-gray-50 px-4 py-2 text-gray-700 shadow-md">
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
            {fieldValue ? <span className="ml-2 font-semibold">{fieldValue}</span> : null}
          </p>
        )}
      </div>
    );
  }
  // type === 'answer'
  return (
    <div className="my-8 mr-10 flex items-end">
      <FirmIcon iconSize={32} bubblesSize="xl" />
      {children || (
        <p className="ml-4 max-w-[60%] rounded-2xl bg-gradient-to-b from-lime-200 to-lime-300 px-4 py-2 text-black shadow-md">
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
      )}
    </div>
  );
}
