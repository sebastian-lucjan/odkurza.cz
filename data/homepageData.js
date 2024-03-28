import vacuumCleaner from 'public/images/odkurzacz-pioracy-lublin.jpeg';
// import { CustomersIcon, FirmIcon } from '../components/Icons';
// import ConversationForm from '../components/Conversation/ConversationForm';

export const homepageData = {
  hero: {
    heading: {
      mainText: 'Wypożyczalnia',
      highlightedText: 'odkurzaczy Lublin',
    },

    pros: {
      heading: 'Zamów odkurzacz piorący w Lublinie i wypierz sam:',
      list: ['Wykładziny i dywany', 'Sofy, kanapy, fotele', 'Tapicerka samochodowa'],
    },

    image: {
      src: vacuumCleaner?.src,
      alt: 'Zdjęcia odkurzacza piorącego Karcher',
    },
  },

  pros: [],

  conversation: {
    headingCTA: 'Porozmawiajmy...',
    companyAddress: 'odkurza.cz',
    messages: [
      {
        type: 'answer',
        textContent: 'odkurza.cz czyli kto?',
      },
      {
        type: 'question',
        textContent: [
          { type: 'regular', text: 'Wypożyczalnia odkurzaczy piorących z Lublina ' },
          { type: 'bold', text: 'odkurza.cz' },
          { type: 'regular', text: 'ma dla Ciebie profesjonalne odkurzacze znanej firmy ' },
          { type: 'bold', text: 'Karcher' },
          { type: 'regular', text: ' wraz ze środkiem piorącym Karcher' },
        ],
      },
      {
        type: 'answer',
        textContent: 'Co mogę wyczyścić takim odkurzaczem?',
      },
      {
        type: 'answer',
        textContent: 'Jak działa odkurzacz piorący?',
      },
      {
        type: 'answer',
        textContent: 'Jak mogę wynająć odkurzacz?',
      },

      //     <p>
      //       Odkurzacze piorące Karcher służą do czyszczenia powierzchni <span className="font-semibold">dywanów, wykładzin</span>.
      //       Znakomicie się
      //       sprawdzają do czyszczenia <span className="font-semibold">sof, kanap i foteli</span>. Jak również do
      //       odświeżania{' '}
      //       <span className="font-semibold">tapicerek samochodowych</span>.
      //     </p>
      //   <p
      //     className="flex flex-col ml-4 bg-gradient-to-b max-w-[60%] from-lime-200 to-lime-300 rounded-2xl px-4 py-2 text-black shadow-md">
      //     Zwykle są w nich 2 pojemniki. W pierwszym jest woda z środkiem czyszczącym, a w drugim zbiera się zużyta woda
      //     i zabrudzenia. Po nałożeniu
      //     na plamę środka czyszczącego zabrudzenia są rozpuszczane wodą pod wysokim ciśnieniem, a następnie wciągane
      //     dzięki dużej sile ssącej. Na
      //     koniec woda z rozdrobnionymi cząstkami brudu zostaje wciągnięta do odkurzacza.
      //   </p>
      //   <p
      //     className="flex flex-col ml-4 bg-gradient-to-b max-w-[60%] from-lime-200 to-lime-300 rounded-2xl px-4 py-2 text-black shadow-md font-semibold">
      //     Uzupełnij formularz poniżej...
      //   </p>
    ],
  },
};
