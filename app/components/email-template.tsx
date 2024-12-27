import { FormTypeType } from 'app/types/FormTypes';

interface EmailTemplateProps {
  name: string;
  email: string;
  mobile?: string;
  message: string;
  formType: FormTypeType;
}

export default function EmailTemplate({ name, email, mobile, message, formType }: EmailTemplateProps) {
  return (
    <div>
      <h1>Nowa wiadomość z formularza kontaktowego</h1>
      <p>Imię i nazwisko: {name}</p>
      <p>Email: {email}</p>
      {mobile && <p>Telefon: {mobile}</p>}
      <p>Wiadomość: {message}</p>
      <p>Wiadomość przesłana z formularza: {formType}</p>
    </div>
  );
}
