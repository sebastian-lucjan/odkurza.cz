const EmailTemplate = ({ name, mobile = 'unknown', email, message, formType }) => {
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

        <p>Wiadomość przesłana z formularza: {formType}</p>
      </div>

      <br />
      <hr />
      <footer>
        <p>
          <i>Ta wiadomość została wysłana z formularza kontaktowego na stronie odkurza.cz</i>
        </p>
        <p>
          <i>Zachowaj ostrożność w stosunku do załączonych linków bądź treści.</i>
        </p>
      </footer>
    </section>
  );
};

export default EmailTemplate;
