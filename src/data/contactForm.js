const contactData = {
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
