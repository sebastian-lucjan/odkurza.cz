import vacuumCleaner from 'public/images/odkurzacz-pioracy-lublin.jpeg';

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
        type: 'question',
        textContent: 'odkurza.cz czyli kto?',
      },
      {
        type: 'answer',
        textContent: [
          { type: 'regular', text: 'Wypożyczalnia odkurzaczy piorących z Lublina ' },
          { type: 'bold', text: 'odkurza.cz' },
          { type: 'regular', text: 'ma dla Ciebie profesjonalne odkurzacze znanej firmy ' },
          { type: 'bold', text: 'Karcher' },
          { type: 'regular', text: ' wraz ze środkiem piorącym Karcher' },
        ],
      },
      {
        type: 'question',
        textContent: 'Co mogę wyczyścić takim odkurzaczem?',
      },
      {
        type: 'answer',
        textContent: [
          { type: 'regular', text: 'Odkurzacze piorące Karcher służą do czyszczenia powierzchni ' },
          { type: 'bold', text: 'dywanów, wykładzin' },
          { type: 'regular', text: 'Znakomicie się sprawdzają do czyszczenia ' },
          { type: 'bold', text: 'sof, kanap i foteli' },
          { type: 'regular', text: '. Jak również do odświeżania ' },
          { type: 'bold', text: 'tapicerek samochodowych.' },
        ],
      },
      {
        type: 'question',
        textContent: 'Jak działa odkurzacz piorący?',
      },
      {
        type: 'answer',
        textContent: [
          {
            type: 'regular',
            text: 'Odkurzacz posiada 2 pojemniki. W pierwszym jest woda z środkiem czyszczącym, a w drugim zbiera się zużyta woda i zabrudzenia. Po nałożeniu na plamę środka czyszczącego zabrudzenia są rozpuszczane wodą pod wysokim ciśnieniem, a następnie wciągane dzięki dużej sile ssącej. Na koniec woda z rozdrobnionymi cząstkami brudu zostaje wciągnięta do odkurzacza.',
          },
        ],
      },
      {
        type: 'question',
        textContent: 'Jak mogę wynająć odkurzacz?',
      },
      {
        type: 'answer',
        textContent: [{ type: 'bold', text: 'Uzupełnij formularz poniżej...' }],
      },
    ],
  },
};
