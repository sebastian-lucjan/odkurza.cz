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
