'use client';

import { createContext, Dispatch, ReactNode, SetStateAction } from 'react';
import contactData from 'data/contactForm';
import useCustomForm from 'app/hooks/useCustomForm';
import { FormTypeType } from 'app/types/FormTypes';

interface CustomFormContextType {
  errorServer: string;
  isMessageSend: boolean;
  setIsMessageSend?: Dispatch<SetStateAction<boolean>>;
  isSending: boolean;
  register?: (_ref: any, _condition: any) => any;
  reset?: () => void;
  getFormValues: () => any;
  errors?: Record<string, any>;
  handleSubmit?: () => any;
  handleBackToForm?: () => void;
}

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

interface ProvidersProps {
  children: ReactNode;
}

export default function ConversationFormProvider({ children }: ProvidersProps) {
  const conversationFormValue = useCustomForm(conversationForm as FormTypeType);

  return <ConversationFormContext.Provider value={conversationFormValue}>{children}</ConversationFormContext.Provider>;
}
