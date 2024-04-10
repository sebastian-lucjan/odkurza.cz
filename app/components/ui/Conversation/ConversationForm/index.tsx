import FormErrors from '@ui/FormErrors';
import { CustomersIcon, FirmIcon } from '@ui/Icons';
import contactData from 'data/contactForm';
import useCustomForm from 'app/hooks/useCustomForm';
import { FormTypeType } from 'app/types/FormTypes';

export default function ConversationForm() {
  const {
    conditions: { nameStringConditions, phoneNumberStringConditions, emailStringConditions, textareaStringConditions },
    types: { conversationForm },
  } = contactData.form;

  const { errorServer, errors, getFormValues, isMessageSend, isSending, register, handleSubmit } = useCustomForm(conversationForm as FormTypeType);

  return (
    <div className="mt-5 md:col-span-2 md:mt-0">
      {isMessageSend ? (
        <>
          <div className="my-8 flex flex-row-reverse items-end justify-start">
            <CustomersIcon />
            <p className="rounded-2xl border border-gray-300 bg-gray-50 px-4 py-2 text-gray-700 shadow-md">
              Imię i nazwisko:
              <span className="ml-2 font-semibold">{getFormValues().name}</span>
            </p>
          </div>

          {getFormValues().mobile ? (
            <div className="my-8 flex flex-row-reverse items-end justify-start">
              <CustomersIcon />
              <p className="rounded-2xl border border-gray-300 bg-gray-50 px-4 py-2 text-gray-700 shadow-md">
                Telefon:
                <span className="ml-2 font-semibold">{getFormValues().mobile}</span>
              </p>
            </div>
          ) : null}

          <div className="my-8 flex flex-row-reverse items-end justify-start">
            <CustomersIcon />
            <p className="rounded-2xl border border-gray-300 bg-gray-50 px-4 py-2 text-gray-700 shadow-md">
              Email:
              <span className="ml-2 font-semibold">{getFormValues().email}</span>
            </p>
          </div>

          <div className="my-8 flex flex-row-reverse items-end justify-start">
            <CustomersIcon />
            <p className="flex flex-col rounded-2xl border border-gray-300 bg-gray-50 px-4 py-2 text-gray-700 shadow-md">
              Twoja wiadomość:
              <span className="font-semibold">{getFormValues().message}</span>
            </p>
          </div>

          <div className="my-4 mr-10 flex items-end">
            <FirmIcon iconSize={32} bubblesSize="xl" />
            <p className="ml-4 max-w-[60%] rounded-2xl bg-gradient-to-b from-lime-200 to-lime-300 px-4 py-2 text-black shadow-md">
              Dzięki za wiadomość <span className="font-semibold">{getFormValues().name}</span>. Odpiszemy w ciągu kilku godzin roboczych. Jeśli
              zależy Ci na czasie zapraszamy do kontaktu telefonicznego.
            </p>
          </div>
        </>
      ) : (
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
                    <p className="w-3/5 text-xs text-gray-500 tablet:w-1/2">Napisz model sprzętu, ilość dni oraz termin wypożyczenia.</p>
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

              {Object.values(errors).length ? <FormErrors conversation errorServ={errorServer} errors={errors} /> : null}

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
      )}
    </div>
  );
}
