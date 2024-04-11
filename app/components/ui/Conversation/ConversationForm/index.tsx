import { CustomersIcon } from '@ui/Icons';
import FormErrors from '@ui/FormErrors';
import { useContext } from 'react';
import { ConversationFormContext } from 'app/providers/ConversationFormProvider';
import contactData from 'data/contactForm';
import PrivacyPolicy from '@ui/Conversation/PrivacyPolicy';

export default function ConversationForm() {
  const { handleSubmit, register, errors, isSending, errorServer } = useContext(ConversationFormContext);

  const { nameStringConditions, phoneNumberStringConditions, emailStringConditions, textareaStringConditions } = contactData.form.conditions;

  return (
    <div className="my-8 ml-10 flex flex-row-reverse items-end justify-start">
      <CustomersIcon />
      <form onSubmit={handleSubmit}>
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow">
          <div className="px-4 py-5 sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                  Imię i nazwisko*
                </label>
                <input
                  type="text"
                  id="name"
                  autoComplete="name"
                  {...(register && register('name', nameStringConditions))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                  Numer telefonu
                </label>
                <input
                  type="text"
                  id="mobile"
                  autoComplete="tel"
                  {...(register && register('mobile', phoneNumberStringConditions))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                  Adres email*
                </label>
                <input
                  type="text"
                  id="email"
                  autoComplete="email"
                  {...(register && register('email', emailStringConditions))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                  Treść wiadomości*
                </label>
                <p className="w-3/5 text-xs text-gray-500 tablet:w-1/2">Napisz model sprzętu, ilość dni oraz termin wypożyczenia.</p>
                <textarea
                  id="message"
                  rows={6}
                  {...(register && register('message', textareaStringConditions))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                />
              </div>
            </div>

            <PrivacyPolicy />
          </div>

          {(errors && Object.values(errors).length) || errorServer ? <FormErrors conversation errorServ={errorServer} errors={errors} /> : null}

          <div className="flex justify-end bg-gray-100 px-6 py-3 text-left">
            <button
              type="submit"
              className="text-md inline-flex w-full justify-center rounded-md border border-transparent bg-lime-300 py-3 font-semibold text-black shadow-sm hover:bg-green-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 laptop:w-[300px]"
            >
              {isSending ? 'Wysyłanie...' : 'Wyślij wiadomość'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
