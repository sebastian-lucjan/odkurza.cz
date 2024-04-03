import { ReactNode } from 'react';

export type AppStageType = 'PROD' | 'DEV';

export type MobileNumber = number;

export interface EquipmentProps {
  pricesJSON: string;
}

export type MessageType = 'question' | 'answer';

interface RegularText {
  type: 'regular';
  text: string;
}

interface BoldText {
  type: 'bold';
  text: string;
}

export type TextContentArray = (RegularText | BoldText)[];

export type TextContentType = string | TextContentArray;

export interface ConversationMessageType {
  type: MessageType;
  textContent: TextContentType;
}

export interface ProsTextContentItemType {
  textType: 'highlighted' | 'paragraph';
  text: string;
}

export interface ProsItemProps {
  icon: ReactNode;
  textContent: ProsTextContentItemType[];
}

export interface MessageObjectType {
  name: null;
  mobile: null;
  email: null;
  message: null;
  formType: 'unset';
}

export interface ConversationFormProps {
  setMessageSend: any;
  setMessage: any;
  message: MessageObjectType;
}

export interface FormErrorProps {
  errors?: any;
  errorServ?: string;
  conversation?: boolean;
}
