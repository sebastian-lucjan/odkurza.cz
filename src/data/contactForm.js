const contactData = {
  // title: 'Ioten - kontakt',
  // url: '/kontakt',
  // description:
  //   'Ioten to nie tylko szybkie, funkcjonalne strony internetowe dla firm oraz osób prywatnych, ale też sprawny kontakt i szybkie decyzje. Wyślij do nas zapytanie a my przygotujemy Ci ofertę.',
  // ogData: {
  //   title: 'Ioten.io - kreatywne i szybkie strony internetowe',
  //   description:
  //     'Ioten to nie tylko szybkie, funkcjonalne strony internetowe dla firm oraz osób prywatnych, ale też sprawny kontakt i szybkie decyzje. Wyślij do nas zapytanie a my przygotujemy Ci ofertę.',
  //   url: 'https://www.ioten.io/kontakt',
  // },
  // canonical: 'https://www.ioten.io/kontakt',
  //
  // briefShortInterlude: {
  //   heading: 'Chcesz mieć czarno na białym... Ile będzie kosztować Twoja strona?',
  //   paragraph: 'Uzupełnij krótki brief w którym nakreślisz nam podstawowe założenia Twojego projektu. Ofertę prześlemy w ciągu 24h roboczych.',
  //   button: 'Wyceń projekt',
  // },
  // contactContent: {
  //   intro: {
  //     heading: 'Zbudujmy coś razem!',
  //     text: [
  //       'Napisz do nas. Zawsze jesteśmy otwarci na świetne projekty, kreatywne rozwiązania i niebanalne pomysły.',
  //       'Jeśli nie otrzymasz odpowiedzi od razu to bardzo możliwe, że pracujemy nad naszym kolejnym projektem. Wkrótce skontaktujemy się z Tobą.',
  //     ],
  //   },
  //   contact: {
  //     cooperation: { heading: 'Współpraca / oferta:', email: 'info@ioten.io', mobile: '+48 508 03 1010' }, // mobile placeholder
  //     other: { heading: 'Inne:', email: 'hello@ioten.io', mobile: '+48 602 446 335' },
  //     job: { heading: 'Praca:', email: 'career@ioten.io' },
  //   },
  form: {
    conditions: {
      nameStringConditions: {
        required: 'Pole "Imię" jest wymagane.',
        minLength: { value: 3, message: 'Minimalna długość "Imię" to 3 znaki.' },
        maxLength: { value: 80, message: 'Maksymalna długość "Imię" to 80 znaków.' },
      },
      emailStringConditions: { required: 'Pole "Email" jest wymagane.', pattern: { value: /^\S+@\S+$/i, message: 'Wpisz poprawny adres email.' } },
      phoneNumberStringConditions: {
        required: false,
        minLength: { value: 7, message: 'Minimalna długość numeru telefonu to 7 znaków.' },
        maxLength: { value: 18, message: 'Maksymalna długość numeru telefonu to 18 znaków.' },
      },
      textareaStringConditions: {
        required: 'Pole "Twoja wiadomość" jest wymagane.',
        minLength: { value: 5, message: 'Wiadomość jest zbyt krótka, postaraj się bardziej!' },
        maxLength: { value: 1000, message: 'Wiadomość jest zbyt długa, przekroczyła 1000 znaków.' },
      },
    },
  },
};

export default contactData;
