import { renderToString } from 'react-dom/server';
import nodemailer from 'nodemailer';
import EmailTemplate from 'src/components/EmailTemplate';

const plainVersionText = (name, companyName, email, description, phoneNumber = 'unknown', from = 'Lublin') => {
  return `Autor wiadomości: ${name}
  Email podany w formularzu: ${email}
  Numer telefonu: ${phoneNumber}
  Treść wiadomości: ${description}
  Wiadomość przesłana z: ${from}`;
};

const transporterProd = nodemailer.createTransport({
  host: 'ssl0.ovh.net',
  port: 465,
  auth: {
    user: process.env.EMAIL_USER_PROD,
    pass: process.env.EMAIL_PASS_PROD,
  },
});

const sendMessageToIoten = async (name, mobile, email, message, from = 'lublin') => {
  console.log('sendMessage -> ', name);
  // const transporterSelected = process.env.IS_PROD ? transporterProd : transporterProd;

  await transporterProd.sendMail({
    from: 'odkurza.cz - form <lublin@odkurza.cz>',
    to: 'odkurza.cz <info@odkurza.cz>',
    replyTo: `${email}`,
    subject: `✔ odkurza.cz - wiadomość z formularza kontaktowego od "${name}"`,
    text: plainVersionText(name, email, message),
    html: renderToString(<EmailTemplate name={name} mobile={mobile} email={email} message={message} from={from} />),
  });
};

export default sendMessageToIoten;
