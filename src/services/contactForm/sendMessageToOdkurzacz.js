import { renderToString } from 'react-dom/server';
import nodemailer from 'nodemailer';
import EmailTemplate from 'components/EmailTemplate';

const plainVersionText = (name, companyName, email, description, phoneNumber = 'unknown', fromType = 'unset') => {
  return `Autor wiadomości: ${name}
  Email podany w formularzu: ${email}
  Numer telefonu: ${phoneNumber}
  Treść wiadomości: ${description}
  Wiadomość przesłana z formularza: ${fromType}`;
};

const transporterProd = nodemailer.createTransport({
  host: 'ssl0.ovh.net',
  port: 465,
  auth: {
    user: process.env.EMAIL_USER_PROD,
    pass: process.env.EMAIL_PASS_PROD,
  },
});

const sendMessageToOdkurzaCz = async (name, mobile, email, message, formType) => {
  // console.log('sendMessage -> ', name);
  // const transporterSelected = process.env.IS_PROD ? transporterProd : transporterProd;

  await transporterProd.sendMail({
    from: `odkurza.cz - form lublin@odkurza.cz>`,
    to: 'odkurza.cz <info@odkurza.cz>',
    replyTo: `${email}`,
    subject: `✔ odkurza.cz - wiadomość z formularza kontaktowego od "${name}"`,
    text: plainVersionText(name, mobile, email, message, formType, formType),
    html: renderToString(<EmailTemplate name={name} mobile={mobile} email={email} message={message} formType={formType} />),
  });
};

export default sendMessageToOdkurzaCz;
