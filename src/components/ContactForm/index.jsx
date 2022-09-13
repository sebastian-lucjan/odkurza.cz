// import { useForm } from 'react-hook-form';

export default function ContactForm() {
  // const {
  //   register,
  //   handleSubmit,
  //   reset,
  //   watch,
  //   formState: { errors, isSubmitting, isSubmitSuccessful },
  // } = useForm();

  return (
    <div className="mt-5 md:col-span-2 md:mt-0">
      <form action="src/components/Contact/index#" method="POST">
        <div className="overflow-hidden shadow sm:rounded-md">
          <div className="bg-white px-4 py-5 sm:p-6">
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
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">
                  Numer telefonu
                </label>
                <input
                  type="text"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6">
                <label htmlFor="email-address" className="block text-sm font-semibold text-gray-700">
                  Adres email*
                </label>
                <input
                  type="text"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6">
                <label htmlFor="text-content" className="block text-sm font-semibold text-gray-700">
                  Treść wiadomości*
                </label>
                <p className="text-xs w-1/2 text-gray-500">Napisz model sprzętu, ilość dni oraz termin wypożyczenia.</p>
                <textarea
                  name="text-content"
                  id="text-content"
                  rows="6"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <p className="text-gray-500 text-xs mt-6">
              Zgodnie z naszą polityką prywatności Twoje dane <span className="font-semibold">nie zostaną</span> przekazane do żadnych podmiotów. Będą
              przetwarzane tylko w ramach naszej oferty.
            </p>
          </div>

          {/* {isError() ? <FormErrors hasError errors={errors} /> : null} */}

          <div className="flex justify-end bg-gray-50 px-6 py-3 text-left">
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-green-600 py-3 w-full laptop:w-[300px] text-md font-semibold text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Wyślij wiadomość
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
