'use client';

import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import FormErrors from '@ui/FormErrors';
import submitFunc from '@lib/services/contactForm/submitFunc';
import contactData from 'data/contactForm';

export default function ContactForm() {
  const [error, setError] = useState('');
  const [messageSend, setMessageSend] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();

  const formType = 'contact-form';

  const {
    conditions: { nameStringConditions, phoneNumberStringConditions, emailStringConditions, textareaStringConditions },
  } = contactData.form;

  useEffect(() => {
    if (isSubmitSuccessful) {
      setMessageSend(true);
    }

    return () => {
      setMessageSend(false);
    };
  }, [isSubmitSuccessful, setMessageSend]);

  return (
    <div className="mt-5 md:col-span-2 md:mt-0">
      {messageSend ? (
        <div className="overflow-hidden h-full flex flex-col justify-between shadow rounded-md bg-white px-4 py-5 sm:p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Twoja wiadomość została wysłana.</h2>
          <p className="text-sm text-gray-700">Zwykle odpowiadamy maksymalnie w ciągu kilku godzin roboczych.</p>
          <p className="text-sm text-gray-700">Jeśli zależy Ci na czasie zadzwoń do nas.</p>
          <Link href="/" className="mt-4 text-md font-medium underline underline-offset-[5px] text-gray-700 hover:text-green-600 cursor-pointer">
            Wróć do strony głównej
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit(() => submitFunc(reset, watch, setError, formType))}>
          <div className="overflow-hidden shadow rounded-md">
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
                  <p className="text-xs w-1/2 text-gray-500">Napisz model sprzętu, ilość dni oraz termin wypożyczenia.</p>
                  <textarea
                    id="message"
                    rows={6}
                    {...register('message', textareaStringConditions)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                  />
                </div>
              </div>
              <p className="text-gray-500 text-xs mt-6">
                Zgodnie z naszą polityką prywatności Twoje dane <span className="font-semibold">nie zostaną</span> przekazane do żadnych podmiotów.
                Będą przetwarzane tylko w ramach naszej oferty.
              </p>
            </div>

            {Object.values(errors).length ? <FormErrors errorServ={error} errors={errors} /> : null}

            <div className="flex justify-end bg-gray-50 px-6 py-3 text-left">
              <button
                type="submit"
                className="inline-flex justify-center rounded-md border border-transparent bg-green-600 py-3 w-full laptop:w-[300px] text-md font-semibold text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                {isSubmitting ? 'Wysyłanie...' : 'Wyślij wiadomość'}
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
