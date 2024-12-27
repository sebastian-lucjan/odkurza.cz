import Link from 'next/link';
import { googleMapData } from 'data/googleMap';

export default function AdditionalInfo() {
  return (
    <div className="relative mx-auto flex max-w-7xl flex-col justify-between overflow-hidden border-b-2 border-gray-100 bg-white px-4 py-20 sm:px-6 laptop:w-full">
      <div>
        <h1 className="mb-4 text-3xl font-bold">Profesjonalne Pranie Tapicerki i Dywanów w Lublinie - Wypożyczalnia Odkurzaczy Karcher</h1>

        <h2 className="mb-4 text-2xl font-semibold">Czym Jest Pranie Ekstrakcyjne? Kompleksowy Poradnik</h2>

        <p className="mb-3">
          Szukasz skutecznego sposobu na odświeżenie tapicerki lub dywanu w Lublinie? Pranie ekstrakcyjne profesjonalnym odkurzaczem Karcher to
          najlepsze rozwiązanie. W ODKURZA.CZ oferujemy wynajem wysokiej jakości sprzętu do samodzielnego czyszczenia.
        </p>

        <h3 className="mb-4 text-xl font-semibold">Dlaczego Warto Wybrać Pranie Ekstrakcyjne?</h3>
        <ul className="mb-6 list-disc pl-6">
          <li className="mb-2">Skuteczność: Usuwanie głęboko osadzonego brudu</li>
          <li className="mb-2">Ekologia: Alternatywa dla wymiany mebli</li>
          <li className="mb-2">Oszczędność: Niższy koszt niż zakup nowego sprzętu</li>
          <li className="mb-2">Profesjonalizm: Dostęp do sprzętu Karcher i specjalistycznych środków</li>
        </ul>
      </div>

      <div className="mt-12">
        <h2 className="mb-4 text-2xl font-semibold">Instrukcja Prania Tapicerki i Dywanów - Krok po Kroku</h2>

        <h3 className="mb-4 text-xl font-semibold">1. Wypożyczenie Sprzętu</h3>
        <ul className="mb-6 list-disc pl-6">
          <li className="mb-2">Rezerwacja odkurzacza piorącego Karcher SE 5.100</li>
          <li className="mb-2">Dobór odpowiedniej ilości profesjonalnych środków czyszczących</li>
          <li className="mb-2">Możliwość konsultacji z ekspertami ODKURZA.CZ</li>
        </ul>

        <h3 className="mb-4 text-xl font-semibold">2. Przygotowanie do Prania</h3>
        <ul className="mb-6 list-disc pl-6">
          <li className="mb-2">Dokładne odkurzenie powierzchni</li>
          <li className="mb-2">Wstępny oprysk trudnych plam</li>
          <li className="mb-2">Przygotowanie roztworu czyszczącego (100ml płynu na 4l ciepłej wody)</li>
        </ul>
      </div>

      <div className="mt-12">
        <h2 className="mb-4 text-2xl font-semibold">Proces Prania Ekstrakcyjnego</h2>
        <p className="mb-3">
          Pranie ekstrakcyjne polega na jednoczesnym natryskiwaniu wody z płynem oraz odsysaniu całego brudu. Proces wykonujemy systematycznie,
          fragment po fragmencie, z możliwością powtórzenia przy silnych zabrudzeniach.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="mb-4 text-2xl font-semibold">Gdzie Wypożyczyć Odkurzacz Piorący w Lublinie?</h2>
        <p className="mb-3">
          ODKURZA.CZ to profesjonalna{' '}
          <Link href="https://odkurza.cz" className="text-blue-600 underline hover:text-blue-800">
            wypożyczalnia odkurzaczy piorących w Lublinie
          </Link>
          . Oferujemy:
        </p>
        <ul className="mb-6 list-disc pl-6">
          <li className="mb-2">Sprzęt Karcher najwyższej jakości</li>
          <li className="mb-2">Profesjonalne środki czyszczące</li>
          <li className="mb-2">Doradztwo techniczne</li>
          <li className="mb-2">Konkurencyjne ceny wynajmu</li>
          <li className="mb-2">Wygodną lokalizację w centrum miasta</li>
        </ul>
      </div>

      <div className="mt-12">
        <h2 className="mb-4 text-2xl font-semibold">Lokalizacja</h2>
        <p className="mb-3">Wygodna lokalizacja w centrum Lublina.</p>
        <div className="mt-4 h-[400px] w-full shadow">
          <iframe className="h-full w-full" title="map" src={googleMapData.urlAddress} />
        </div>
      </div>

      <div className="mt-12 rounded-lg bg-gray-50 p-6">
        <h2 className="mb-4 text-2xl font-semibold">Zarezerwuj Sprzęt</h2>
        <p className="mb-3">
          Zarezerwuj sprzęt już dziś i przekonaj się, jak łatwe może być profesjonalne czyszczenie tapicerki i dywanów! Skontaktuj się z nami, aby
          uzyskać więcej informacji lub dokonać rezerwacji.
        </p>
      </div>
    </div>
  );
}
