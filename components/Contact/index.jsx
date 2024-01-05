import ContactForm from 'components/ContactForm';
import GoogleMap from 'components/GoogleMap';

export default function Contact() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-16 border-b-2 border-gray-100">
      <div className="mt-16">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1 flex flex-col justify-between">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Formularz kontaktowy</h3>
              <p className="mt-1 text-sm text-gray-600">
                Wypożycz odkurzacz piorący i użyj go w domu, biurze bądź samochodzie. Wyczyść dywan, tapicerkę i nie zagracaj swojej przestrzeni
                kolejnym sprzętem.
              </p>
            </div>

            <GoogleMap displayOn="tablet-and-up" />

            <div className="hidden px-4 sm:px-0 laptop:block mt-8">
              <h3 className="mt-4 text-lg font-medium leading-6 text-gray-900">Inne formy kontaktu</h3>
              <p className="text-sm text-gray-600">Jeśli nie masz ochoty korzystać z naszego formularza napisz do nas maila lub zadzwoń.</p>
              <p className="h-[24px] ">
                <a
                  href="mailto:lublin@odkurza.cz"
                  className="inline-flex text-sm mt-2 items-center justify-center underline underline-offset-2 decoration-amber-300"
                >
                  <span className="hover:font-semibold">lublin@odkurza.cz</span>
                </a>
              </p>
              <p className="h-[24px] ">
                <a
                  href="tel:+48602446335"
                  className="inline-flex text-sm mt-2 items-center justify-center underline underline-offset-2 decoration-amber-300"
                >
                  <span className="hover:font-semibold">602 446 335</span>
                </a>
              </p>
            </div>
          </div>

          <ContactForm />

          <GoogleMap displayOn="mobile" />
        </div>
      </div>
    </div>
  );
}
