import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import contactData from 'data/contactForm';
import submitFunc from 'utils/submitFunc';
import FormErrors from '../../FormErrors';
import { CustomersIcon } from '../../Icons';

export default function ConversationForm({ setMessageSend, setMessage, message }) {
  const [error, setError] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();

  const formType = 'conversation-form';

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
  }, [isSubmitSuccessful, setMessageSend, message]);

  return (
    <div className="mt-5 md:col-span-2 md:mt-0">
      {isSubmitSuccessful ? (
        <>
          <div className="flex flex-row-reverse justify-start items-end my-8">
            <CustomersIcon />
            <p className="rounded-2xl bg-gray-50 border border-gray-300 px-4 py-2 text-gray-700 shadow-md">
              Imię i nazwisko:
              <span className="ml-2 font-semibold">{message.name}</span>
            </p>
          </div>

          {message.mobile ? (
            <div className="flex flex-row-reverse justify-start items-end my-8">
              <CustomersIcon />
              <p className="rounded-2xl bg-gray-50 border border-gray-300 px-4 py-2 text-gray-700 shadow-md">
                Telefon:
                <span className="ml-2 font-semibold">{message.mobile}</span>
              </p>
            </div>
          ) : null}

          <div className="flex flex-row-reverse justify-start items-end my-8">
            <CustomersIcon />
            <p className="rounded-2xl bg-gray-50 border border-gray-300 px-4 py-2 text-gray-700 shadow-md">
              Email:
              <span className="ml-2 font-semibold">{message.email}</span>
            </p>
          </div>

          <div className="flex flex-row-reverse justify-start items-end my-8">
            <CustomersIcon />
            <p className="flex flex-col rounded-2xl bg-gray-50 border border-gray-300 px-4 py-2 text-gray-700 shadow-md">
              Twoja wiadomość:
              <span className="font-semibold">{message.message}</span>
            </p>
          </div>
        </>
      ) : (
        <div className="flex flex-row-reverse justify-start items-end my-8 ml-10">
          <CustomersIcon />
          <form onSubmit={handleSubmit(() => submitFunc(reset, watch, setError, formType, setMessage))}>
            <div className="overflow-hidden shadow bg-gray-50 border border-gray-200 rounded-2xl">
              <div className="px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                      Imię i nazwisko*
                    </label>
                    <input
                      type="text"
                      name="name"
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
                      name="mobile"
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
                      name="email"
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
                    <p className="text-xs w-3/5 tablet:w-1/2 text-gray-500">Napisz model sprzętu, ilość dni oraz termin wypożyczenia.</p>
                    <textarea
                      name="message"
                      id="message"
                      rows="6"
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

              {Object.values(errors).length ? <FormErrors conversation hasError errorServ={error} errors={errors} /> : null}

              <div className="flex justify-end bg-gray-100 px-6 py-3 text-left">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-lime-300 text-gray-800 py-3 w-full laptop:w-[300px] text-md font-semibold text-black shadow-sm hover:bg-green-500 focus:outline-none hover:text-white focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  {isSubmitting ? 'Wysyłanie...' : 'Wyślij wiadomość'}
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
