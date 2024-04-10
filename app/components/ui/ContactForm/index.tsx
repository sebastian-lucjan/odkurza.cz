'use client';

import FormErrors from '@ui/FormErrors';
import contactData from 'data/contactForm';
import useCustomForm from 'app/hooks/useCustomForm';
import MessageSend from '@ui/ContactForm/MessageSend';
import { FormTypeType } from 'app/types/FormTypes';

export default function ContactForm() {
  const {
    conditions: { nameStringConditions, phoneNumberStringConditions, emailStringConditions, textareaStringConditions },
    types: { contactType },
  } = contactData.form;

  const { errorServer, errors, isMessageSend, isSending, register, handleSubmit, handleBackToForm } = useCustomForm(contactType as FormTypeType);

  return (
    <div className="mt-5 md:col-span-2 md:mt-0">
      {isMessageSend ? (
        <MessageSend handleBackToForm={handleBackToForm} />
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="overflow-hidden rounded-md shadow">
            <div className="bg-white px-4 py-5 sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                    Imię i nazwisko*
                  </label>
                  <input
                    type="text"
                    id="name"
                    autoComplete="name"
                    {...register('name', nameStringConditions)}
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
                    {...register('mobile', phoneNumberStringConditions)}
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
                    {...register('email', emailStringConditions)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                    Treść wiadomości*
                  </label>
                  <p className="w-1/2 text-xs text-gray-500">Napisz model sprzętu, ilość dni oraz termin wypożyczenia.</p>
                  <textarea
                    id="message"
                    rows={6}
                    {...register('message', textareaStringConditions)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                  />
                </div>
              </div>
              <p className="mt-6 text-xs text-gray-500">
                Zgodnie z naszą polityką prywatności Twoje dane <span className="font-semibold">nie zostaną</span> przekazane do żadnych podmiotów.
                Będą przetwarzane tylko w ramach naszej oferty.
              </p>
            </div>

            {Object.values(errors).length || errorServer ? <FormErrors errorServ={errorServer} errors={errors} /> : null}

            <div className="flex justify-end bg-gray-50 px-6 py-3 text-left">
              <button
                type="submit"
                className="text-md inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 py-3 font-semibold text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 laptop:w-[300px]"
              >
                {isSending ? 'Wysyłanie...' : 'Wyślij wiadomość'}
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
