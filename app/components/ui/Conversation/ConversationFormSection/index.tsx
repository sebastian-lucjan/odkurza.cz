import SuccessConversation from '@ui/Conversation/SuccessConversation';
import ConversationForm from '@ui/Conversation/ConversationForm';
import { ConversationFormContext } from 'app/providers/ConversationFormProvider';
import { useContext } from 'react';

export default function ConversationFormSection() {
  const { isMessageSend } = useContext(ConversationFormContext);

  return <div className="mt-5 md:col-span-2 md:mt-0">{isMessageSend ? <SuccessConversation /> : <ConversationForm />}</div>;
}
