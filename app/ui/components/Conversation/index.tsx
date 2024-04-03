'use client';

import { useState } from 'react';
import ConversationForm from '@ui/components/Conversation/ConversationForm';
import { FirmIcon } from '@ui/components/Icons';
import ConversationMessage from '@ui/components/Conversation/ConversationMessage';
import IntroSection from '@ui/components/Conversation/IntroSection';
import { homepageData } from 'data/homepageData';
import { MessageType, TextContentType } from '../../../types/types';

export default function Conversation() {
  const [messageSend, setMessageSend] = useState(false);
  const [message, setMessage] = useState({
    name: null,
    mobile: null,
    email: null,
    message: null,
    formType: 'unset',
  });

  const { messages } = homepageData.conversation;

  return (
    <section id="faq" className="mx-auto py-12 flex flex-col max-w-7xl sm:px-6 border-b-2 border-gray-100">
      <div className="mx-4 laptop:mx-20">
        <IntroSection />

        {messages.map(({ type, textContent }) => {
          const customKey = typeof textContent === 'string' ? textContent : textContent[0].text;
          return <ConversationMessage key={customKey} type={type as MessageType} textContent={textContent as TextContentType} />;
        })}

        <div className="flex justify-end jus items-end my-4">
          <div className="ml-4 mt-6 w-full tablet:w-[60%]">
            <ConversationForm setMessageSend={setMessageSend} setMessage={setMessage} message={message} />
          </div>
        </div>

        {messageSend && (
          <div className="flex mr-10 items-end my-4">
            <FirmIcon iconSize={32} bubblesSize="xl" />
            <p className="ml-4 bg-gradient-to-b from-lime-200 to-lime-300 max-w-[60%] rounded-2xl px-4 py-2 text-black shadow-md">
              Dzięki za wiadomość <span className="font-semibold">{message.name}</span>. Odpiszemy w ciągu kilku godzin roboczych. Jeśli zależy Ci na
              czasie zapraszamy do kontaktu telefonicznego.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
