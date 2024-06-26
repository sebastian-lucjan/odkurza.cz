import { FieldErrors } from 'react-hook-form';
import { Dispatch, ReactNode, SetStateAction } from 'react';

/**
 * Represents a single form validation error, specifying the field and error message.
 */
export interface ErrorMessageType {
  message: string;
  type: string;
  [key: string]: any; // Allows additional properties
}

export interface ValidationError {
  name?: ErrorMessageType;
  message?: ErrorMessageType;
  email?: ErrorMessageType;
  [key: string]: any; // Allows additional properties
}

export type FormTypeType = 'conversation-form' | 'contact-form';

/**
 * Defines the payload structure for forms, including contact information and the form type.
 */
export interface PayloadType {
  name: string;
  mobile: string;
  email: string;
  message: string;
  formType: FormTypeType;
}

/**
 * Describes the structure of form errors, optionally including a list of validation errors,
 * a server-side error message, and a flag indicating if the error occurred in a "conversation form".
 */
export interface FormErrorProps {
  conversation?: boolean;
  errorServ?: string;
  errors?: FieldErrors;
}

/**
 * Properties for components responsible for handling the action of going back to form after successful sending message. .
 */
export interface MessageSendProps {
  handleBackToForm: () => void;
}

/**
 * Properties for conversation form data provider
 */
export interface CustomFormContextType {
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

export interface ProvidersProps {
  children: ReactNode;
}
