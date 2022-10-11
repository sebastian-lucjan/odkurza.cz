import { useState } from 'react';
import ConversationForm from 'components/ConversationForm';
import { CustomersIcon, FirmIcon } from 'components/Icons';

export default function Conversation() {
  const [messageSend, setMessageSend] = useState(false);
  const [message, setMessage] = useState({
    name: null,
    mobile: null,
    email: null,
    message: null,
    formType: 'unset',
  });

  return (
    <section id="faq" className="mx-auto py-12 flex flex-col max-w-7xl sm:px-6 border-b-2 border-gray-100">
      <div className="mx-4 laptop:mx-20">
        <div className="flex justify-center text-3xl font-semibold text-gray-800">Porozmawiajmy...</div>
        <div className="flex items-center border-b-2 border-gray-100 pb-4 mb-4">
          <FirmIcon iconSize={60} bubblesSize="4xl" />
          {/* <div className="flex justify-center items-center bg-lime-300 w-[60px] h-[60px] px-2 py-2 rounded-full  text-4xl ml-2">🫧</div> */}
          <h2 className="ml-4 text-2xl font-semibold text-gray-800">odkurza.cz</h2>
        </div>

        <div className="flex flex-row-reverse justify-start items-end my-4">
          <CustomersIcon />
          <p className="rounded-2xl bg-gray-50 border border-gray-300 px-4 py-2 text-gray-700 shadow-md">odkurza.cz czyli kto?</p>
        </div>

        <div className="flex items-start mr-10 items-end my-8">
          <FirmIcon iconSize={32} bubblesSize="xl" />

          <p className="ml-4 bg-gradient-to-b from-lime-200 max-w-[60%] to-lime-300 rounded-2xl px-4 py-2 text-black shadow-md">
            Wypożyczalnia odkurzaczy piorących z Lublina <span className="font-semibold">odkurza.cz</span> ma dla Was profesjonalne odkurzacze znanej
            firmy <span className="font-semibold">Karcher</span> wraz z dostosowanym środkiem piorącym.
          </p>
        </div>

        <div className="flex flex-row-reverse justify-start items-end my-8">
          <CustomersIcon />
          <p className="rounded-2xl bg-gray-50 border border-gray-300 px-4 py-2 text-gray-700 shadow-md">Co mogę wyczyścić takim odkurzaczem?</p>
        </div>

        <div className="flex items-start mr-10 items-end my-4">
          <FirmIcon iconSize={32} bubblesSize="xl" />

          <div className="flex flex-col ml-4 bg-gradient-to-b from-lime-200 max-w-[60%] to-lime-300 rounded-2xl px-4 py-2 text-black shadow-md">
            <p>
              Odkurzacze piorące Karcher służą do czyszczenia powierzchni <span className="font-semibold">dywanów, wykładzin</span>. Znakomicie się
              sprawdzają do czyszczenia <span className="font-semibold">sof, kanap i foteli</span>. Jak również do odświeżania{' '}
              <span className="font-semibold">tapicerek samochodowych</span>.
            </p>
            {/* Wypożyczalnia odkurzaczy piorących z Lublina <span className="font-semibold">odkurza.cz</span> ma dla */}
            {/* Was profesjonalne odkurzacze znanej firmy <span className="font-semibold">Karcher</span> wraz z dostosowanym środkiem piorącym. */}
          </div>
        </div>

        <div className="flex flex-row-reverse justify-start items-end my-8">
          <CustomersIcon />
          <p className="rounded-2xl bg-gray-50 border border-gray-300 px-4 py-2 text-gray-700 shadow-md">Jak działa odkurzacz piorący?</p>
        </div>

        <div className="flex items-start mr-10 items-end my-4">
          <FirmIcon iconSize={32} bubblesSize="xl" />
          <p className="flex flex-col ml-4 bg-gradient-to-b from-lime-200 max-w-[60%] to-lime-300 rounded-2xl px-4 py-2 text-black shadow-md">
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
          <p className="flex flex-col ml-4 bg-gradient-to-b from-lime-200 max-w-[60%] to-lime-300 rounded-2xl px-4 py-2 text-black shadow-md font-semibold">
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
            <p className="ml-4 bg-gradient-to-b from-lime-200 max-w-[60%] to-lime-300 rounded-2xl px-4 py-2 text-black shadow-md">
              Dzięki za wiadomość <span className="font-semibold">{message.name}</span>. Odpiszemy w ciągu kilku godzin roboczych. Jeśli zależy Ci na
              czasie zapraszamy do kontaktu telefonicznego.
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
