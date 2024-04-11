import { ReactNode } from 'react';

export type MessageType = 'user' | 'answer';

interface RegularText {
  type: 'regular';
  text: string;
}

interface BoldText {
  type: 'bold';
  text: string;
}

/**
 * Represents an array of text content, which can be regular or bold.
 */
export type TextContentArray = (RegularText | BoldText)[];

/**
 * Represents text content which can be a string or an array of text pieces.
 */
export type TextContentType = string | TextContentArray;

/**
 * Defines the structure of a message in a conversation, supporting both questions and answers.
 */

export interface ConversationMessageType {
  type: MessageType;
  textContent?: TextContentType;
  fieldValue?: string;
  children?: ReactNode;
}

export interface ConversationSubmitButtonProps {
  isSending: boolean;
}

export interface FormFieldProps {
  autoComplete?: string;
  conditions: any;
  id: string;
  label: string;
  register?: (_ref: any, _condition: any) => any;
  rows?: number;
  size?: 'half-on-desktop' | 'full';
  type: string;
  labelDescription?: string;
}
