import ContactForm from 'components/ContactForm';
import cityData from 'data/citiesData';

export default function ContactWroclaw() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-16 border-b-2 border-gray-100">
      <div className="mt-16">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1 flex flex-col justify-between">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Formularz kontaktowy</h3>
              <p className="mt-1 text-sm text-gray-600">
                Wypożycz odkurzacz piorący Karcher i użyj go w domu, biurze bądź samochodzie. Wyczyść dywan, wykładzinę, tapicerkę i miej problem z
                głowy.
              </p>
            </div>
            <div className="hidden px-4 sm:px-0 laptop:block">
              <h3 className="mt-4 text-lg font-medium leading-6 text-gray-900">Inne formy kontaktu</h3>
              <p className="text-sm text-gray-600">Nie chcesz skorzystać z formularza napisz do nas bezpośrednio maila lub zadzwoń.</p>
              <p className="h-[24px] ">
                <a
                  href={`mailto:${cityData.wroclaw.mail}`}
                  className="inline-flex text-sm mt-2 items-center justify-center underline underline-offset-2 decoration-2 decoration-sky-300"
                >
                  <span className="hover:font-semibold">{cityData.wroclaw.mail}</span>
                </a>
              </p>
              <p className="h-[24px] ">
                <a
                  href={`tel:+48${cityData.wroclaw.mobile}`}
                  className="inline-flex text-sm mt-2 items-center justify-center underline underline-offset-2 decoration-2 decoration-sky-300"
                >
                  <span className="hover:font-semibold">{cityData.wroclaw.mobile}</span>
                </a>
              </p>
            </div>
          </div>

          <ContactForm city={cityData.wroclaw.cityName} />
        </div>
      </div>
    </div>
  );
}
