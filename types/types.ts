export type AppStageType = 'PROD' | 'DEV';

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
