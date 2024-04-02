import nodemailer from 'nodemailer';

const plainVersionText = (name, mobile, email, message, formType) => {
  return `Autor wiadomości: ${name}
  Email podany w formularzu: ${email}
  Numer telefonu: ${mobile}
  Treść wiadomości: ${message}
  Wiadomość przesłana z formularza: ${formType}`;
};

const transporterProd = nodemailer.createTransport({
  host: 'ssl0.ovh.net',
  port: 465,
  auth: {
    user: process.env.EMAIL_USER_PROD,
    pass: process.env.EMAIL_PASS_PROD,
  },
});

const sendMessageToOdkurzacz = async (name, mobile, email, message, formType) => {
  await transporterProd.sendMail({
    from: `odkurza.cz - form lublin@odkurza.cz>`,
    to: 'odkurza.cz <info@odkurza.cz>',
    replyTo: `${email}`,
    subject: `✔ odkurza.cz - wiadomość z formularza kontaktowego od "${name}"`,
    text: plainVersionText(name, mobile, email, message, formType),
    html: plainVersionText(name, mobile, email, message, formType),
  });
};

export default sendMessageToOdkurzacz;
