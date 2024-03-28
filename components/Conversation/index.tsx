import { useState } from 'react';
import ConversationForm from 'components/Conversation/ConversationForm';
import { CustomersIcon, FirmIcon } from 'components/Icons';
// import { homepageData } from 'data/homepageData';
import IntroSection from './IntroSection';

// function ConversationMessage({ messageType }) {
//   if (messageType === 'question')
//     return (
//       <div className="flex flex-row-reverse justify-start items-end my-8">
//         <CustomersIcon />
//         <p className="rounded-2xl bg-gray-50 border border-gray-300 px-4 py-2 text-gray-700 shadow-md">Co mogę wyczyścić takim odkurzaczem?</p>
//       </div>
//     );
//
//   // messageType === 'answer'
//   return (
//     <div className="flex items-start mr-10 items-end my-8">
//       <FirmIcon iconSize={32} bubblesSize="xl" />
//
//       <p className="ml-4 bg-gradient-to-b from-lime-200 to-lime-300 max-w-[60%] rounded-2xl px-4 2 text-black shadow-md">
//         Wypożyczalnia odkurzaczy piorących z Lublina <span className="font-semibold">odkurza.cz</span> ma dla Ciebie profesjonalne odkurzacze znanej
//         firmy <span className="font-semibold">Karcher</span> wraz ze środkiem piorącym Karcher.
//       </p>
//     </div>
//   );
// }

export default function Conversation() {
  const [messageSend, setMessageSend] = useState(false);
  const [message, setMessage] = useState({
    name: null,
    mobile: null,
    email: null,
    message: null,
    formType: 'unset',
  });

  // const { headingCTA, companyAddress } = homepageData.conversation;

  return (
    <section id="faq" className="mx-auto py-12 flex flex-col max-w-7xl sm:px-6 border-b-2 border-gray-100">
      <div className="mx-4 laptop:mx-20">
        <IntroSection />

        <div className="flex items-start mr-10 items-end my-8">
          <FirmIcon iconSize={32} bubblesSize="xl" />

          <p className="ml-4 bg-gradient-to-b from-lime-200 to-lime-300 max-w-[60%] rounded-2xl px-4 py-2 text-black shadow-md">
            Wypożyczalnia odkurzaczy piorących z Lublina <span className="font-semibold">odkurza.cz</span> ma dla Ciebie profesjonalne odkurzacze
            znanej firmy <span className="font-semibold">Karcher</span> wraz ze środkiem piorącym Karcher.
          </p>
        </div>

        <div className="flex flex-row-reverse justify-start items-end my-8">
          <CustomersIcon />
          <p className="rounded-2xl bg-gray-50 border border-gray-300 px-4 py-2 text-gray-700 shadow-md">Co mogę wyczyścić takim odkurzaczem?</p>
        </div>

        <div className="flex items-start mr-10 items-end my-4">
          <FirmIcon iconSize={32} bubblesSize="xl" />

          <div className="flex flex-col ml-4 bg-gradient-to-b max-w-[60%] from-lime-200 to-lime-300 rounded-2xl px-4 py-2 text-black shadow-md">
            <p>
              Odkurzacze piorące Karcher służą do czyszczenia powierzchni <span className="font-semibold">dywanów, wykładzin</span>. Znakomicie się
              sprawdzają do czyszczenia <span className="font-semibold">sof, kanap i foteli</span>. Jak również do odświeżania{' '}
              <span className="font-semibold">tapicerek samochodowych</span>.
            </p>
          </div>
        </div>

        <div className="flex flex-row-reverse justify-start items-end my-8">
          <CustomersIcon />
          <p className="rounded-2xl bg-gray-50 border border-gray-300 px-4 py-2 text-gray-700 shadow-md">Jak działa odkurzacz piorący?</p>
        </div>

        <div className="flex items-start mr-10 items-end my-4">
          <FirmIcon iconSize={32} bubblesSize="xl" />
          <p className="flex flex-col ml-4 bg-gradient-to-b max-w-[60%] from-lime-200 to-lime-300 rounded-2xl px-4 py-2 text-black shadow-md">
            Zwykle są w nich 2 pojemniki. W pierwszym jest woda z środkiem czyszczącym, a w drugim zbiera się zużyta woda i zabrudzenia. Po nałożeniu
            na plamę środka czyszczącego zabrudzenia są rozpuszczane wodą pod wysokim ciśnieniem, a następnie wciągane dzięki dużej sile ssącej. Na
            koniec woda z rozdrobnionymi cząstkami brudu zostaje wciągnięta do odkurzacza.
          </p>
        </div>

        <div className="flex flex-row-reverse justify-start items-end my-8">
          <CustomersIcon />
          <p className="rounded-2xl bg-gray-50 border border-gray-300 px-4 py-2 text-gray-700 shadow-md">Jak mogę wynająć odkurzacz?</p>
        </div>

        <div className="flex items-start mr-10 items-end my-4">
          <FirmIcon iconSize={32} bubblesSize="xl" />
          <p className="flex flex-col ml-4 bg-gradient-to-b max-w-[60%] from-lime-200 to-lime-300 rounded-2xl px-4 py-2 text-black shadow-md font-semibold">
            Uzupełnij formularz poniżej...
          </p>
        </div>

        <div className="flex justify-end jus items-end my-4">
          <div className="ml-4 mt-6 w-full tablet:w-[60%]">
            <ConversationForm setMessageSend={setMessageSend} setMessage={setMessage} message={message} />
          </div>
        </div>

        {messageSend ? (
          <div className="flex items-start mr-10 items-end my-4">
            <FirmIcon iconSize={32} bubblesSize="xl" />
            <p className="ml-4 bg-gradient-to-b from-lime-200 to-lime-300 max-w-[60%] rounded-2xl px-4 py-2 text-black shadow-md">
              Dzięki za wiadomość <span className="font-semibold">{message.name}</span>. Odpiszemy w ciągu kilku godzin roboczych. Jeśli zależy Ci na
              czasie zapraszamy do kontaktu telefonicznego.
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
