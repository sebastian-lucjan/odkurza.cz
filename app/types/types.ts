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

export interface FormErrorProps {
  errors?: any;
  errorServ?: string;
  conversation?: boolean;
}

export interface GoogleMapProps {
  displayOn: 'all' | 'tablet-and-up' | 'mobile';
}

export interface FirmIconProps {
  iconSize: number;
  bubblesSize: 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
}

export interface InfoBarProps {
  textContent: string;
  bargain: string;
}

export type FormTypeType = 'conversation-form' | 'contact-form' | 'unset';

export interface PayloadType {
  name: string;
  mobile: string;
  email: string;
  message: string;
  formType: FormTypeType;
}

export interface MessageSendProps {
  handleBackToForm: () => void;
}

export type ButtonType = 'button' | 'submit' | 'reset';

export interface ButtonProps {
  children?: ReactNode;
  text?: string;
  href: string;
  asHref?: string;
  type?: ButtonType;
}

export interface PricesType {
  prices: {
    dayRenting: {
      smallPrice: number;
      mediumPrice: number;
      biggestPrice: number;
    };
    cleaner: {
      [key: number]: number;
    };
    delivery: {
      toCustomer: number;
      fromCustomer: number;
    };
  };
}
