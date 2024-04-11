'use client';

import { createContext } from 'react';
import contactData from 'data/contactForm';
import useCustomForm from 'app/hooks/useCustomForm';
import { CustomFormContextType, FormTypeType, ProvidersProps } from 'app/types/FormTypes';

const conversationFormDefaultValue = {
  errorServer: '',
  errors: {},
  isMessageSend: false,
  isSending: false,
  getFormValues: () => {},
  register: () => {},
};

export const ConversationFormContext = createContext<CustomFormContextType>(conversationFormDefaultValue);

const {
  types: { conversationForm },
} = contactData.form;

export default function ConversationFormProvider({ children }: ProvidersProps) {
  const conversationFormValue = useCustomForm(conversationForm as FormTypeType);

  return <ConversationFormContext.Provider value={conversationFormValue}>{children}</ConversationFormContext.Provider>;
}
