import ConversationMessage from '@ui/Conversation/ConversationMessage';
import contactData from 'data/contactForm';
import { useContext } from 'react';
import { ConversationFormContext } from 'app/providers/ConversationFormProvider';

export default function SuccessConversation() {
  const { getFormValues } = useContext(ConversationFormContext);

  const { successMessages } = contactData;

  return (
    <>
      {successMessages.map((successMessage) => {
        const allValues = getFormValues?.();

        const fieldValue = allValues[successMessage.formField]; // getFormValues().name or email etc...

        return fieldValue ? (
          <ConversationMessage key={successMessage.formField} type="user" textContent={successMessage.textContent as any} fieldValue={fieldValue} />
        ) : null;
      })}

      <ConversationMessage type="answer">
        <p className="ml-4 max-w-[60%] rounded-2xl bg-gradient-to-b from-lime-200 to-lime-300 px-4 py-2 text-black shadow-md">
          Dzięki za wiadomość <span className="font-semibold">{getFormValues().name}</span>. Odpiszemy w ciągu kilku godzin roboczych. Jeśli zależy Ci
          na czasie zapraszamy do kontaktu telefonicznego.
        </p>
      </ConversationMessage>
    </>
  );
}
