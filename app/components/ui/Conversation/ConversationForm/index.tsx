import { CustomersIcon } from '@ui/Icons';
import FormErrors from '@ui/FormErrors';
import { useContext } from 'react';
import { ConversationFormContext } from 'app/providers/ConversationFormProvider';
import contactData from 'data/contactForm';
import PrivacyPolicy from '@ui/Conversation/PrivacyPolicy';
import ConversationSubmitButton from '@ui/Conversation/ConversationSubmitButton';
import FormField from '@ui/Conversation/ConversationFormField';

export default function ConversationForm() {
  const { handleSubmit, register, errors, isSending, errorServer } = useContext(ConversationFormContext);

  const { nameStringConditions, phoneNumberStringConditions, emailStringConditions, textareaStringConditions } = contactData.form.conditions;

  return (
    <div className="my-8 ml-10 flex flex-row-reverse items-end justify-start">
      <CustomersIcon />
      <form onSubmit={handleSubmit} name="conversation-form" aria-label="conversation-form">
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow">
          <div className="px-4 py-5 sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <FormField
                label="Imię i nazwisko*"
                id="name"
                type="text"
                autoComplete="name"
                register={register}
                conditions={nameStringConditions}
                size="half-on-desktop"
              />

              <FormField
                label="Numer telefonu"
                id="mobile"
                type="text"
                autoComplete="tel"
                register={register}
                conditions={phoneNumberStringConditions}
                size="half-on-desktop"
              />

              <FormField label="Adres email*" id="email" type="text" autoComplete="email" register={register} conditions={emailStringConditions} />

              <FormField
                label="Treść wiadomości*"
                id="message"
                type="textarea"
                register={register}
                conditions={textareaStringConditions}
                labelDescription="Napisz model sprzętu, ilość dni oraz termin wypożyczenia."
              />
            </div>

            <PrivacyPolicy />
          </div>

          {errors || errorServer ? <FormErrors conversation errorServ={errorServer} errors={errors} /> : null}

          <ConversationSubmitButton isSending={isSending} />
        </div>
      </form>
    </div>
  );
}
