'use client';

import ConversationMessage from '@ui/Conversation/ConversationMessage';
import IntroSection from '@ui/Conversation/IntroSection';
import { homepageData } from 'data/homepageData';
import { MessageType, TextContentType } from 'app/types/ConversationTypes';
import ConversationFormSection from '@ui/Conversation/ConversationFormSection';

export default function Conversation() {
  const { messages } = homepageData.conversation;

  return (
    <section id="faq" className="mx-auto flex max-w-7xl flex-col border-b-2 border-gray-100 py-12 sm:px-6">
      <div className="mx-4 laptop:mx-20">
        <IntroSection />

        {messages.map(({ type, textContent }) => {
          const customKey = textContent[0].text;
          return <ConversationMessage key={customKey} type={type as MessageType} textContent={textContent as TextContentType} />;
        })}

        <div className="jus my-4 flex items-end justify-end">
          <div className="ml-4 mt-6 w-full tablet:w-[60%]">
            <ConversationFormSection />
          </div>
        </div>
      </div>
    </section>
  );
}
