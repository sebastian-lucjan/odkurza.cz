import ContactForm from '@ui/ContactForm';
import GoogleMap from '@ui/GoogleMap';
import Link from 'next/link';

export default function Contact() {
  return (
    <div className="mx-auto max-w-7xl border-b-2 border-gray-100 px-4 pb-16 sm:px-6">
      <div className="mt-16">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="flex flex-col justify-between md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Formularz kontaktowy</h3>
              <p className="mt-1 text-sm text-gray-600">
                Wypożycz odkurzacz piorący i użyj go w domu, biurze bądź samochodzie. Wyczyść dywan, tapicerkę i nie zagracaj swojej przestrzeni
                kolejnym sprzętem.
              </p>
            </div>

            <GoogleMap displayOn="tablet-and-up" />

            <div className="mt-8 hidden px-4 sm:px-0 laptop:block">
              <h3 className="mt-4 text-lg font-medium leading-6 text-gray-900">Inne formy kontaktu</h3>
              <p className="text-sm text-gray-600">Jeśli nie masz ochoty korzystać z naszego formularza napisz do nas maila lub zadzwoń.</p>
              <Link
                href="mailto:lublin@odkurza.cz"
                className="mt-2 inline-flex h-[24px] items-center justify-center text-sm underline decoration-amber-300 underline-offset-2"
              >
                <span className="hover:font-semibold">lublin@odkurza.cz</span>
              </Link>

              <Link
                href="mailto:lublin@odkurza.cz"
                className="mt-2 inline-flex h-[24px] items-center justify-center text-sm underline decoration-amber-300 underline-offset-2"
              >
                <span className="hover:font-semibold">lublin@odkurza.cz</span>
              </Link>
            </div>
          </div>

          <ContactForm />

          <GoogleMap displayOn="mobile" />
        </div>
      </div>
    </div>
  );
}
