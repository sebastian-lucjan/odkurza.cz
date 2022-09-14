const EmailTemplate = ({ name, mobile = 'unknown', email, message, from = 'Lublin' }) => {
  return (
    <section className="email">
      <div>
        <p>
          Autorem wiadomości jest: <u>{name}</u>
        </p>
        <br />
        <p>
          Podany przez nadawcę adres email: <a href={`mailto:${email}`}>{email}</a>
        </p>

        <br />
        <p>Numer telefonu:{mobile}</p>
        <br />
        <p>Treść wiadomości:</p>
        <p>{message}</p>

        <p>Wiadomość przesłana z: {from}</p>
      </div>

      <br />
      <hr />
      <footer>
        <p>
          <i>Ta wiadomość została wysłana z formularza kontaktowego na stronie ioten.io</i>
        </p>
        <p>
          <i>Zachowaj ostrożność w stosunku do załączonych linków bądź treści.</i>
        </p>
      </footer>
    </section>
  );
};

export default EmailTemplate;
