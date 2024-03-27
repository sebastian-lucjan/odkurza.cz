import { CheckCircleIcon } from '@heroicons/react/20/solid';

export default function HeroProsList() {
  return (
    <div className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
      <h3>Zamów odkurzacz piorący w Lublinie i wypierz sam:</h3>
      <ul className="flex flex-col">
        <li className="inline-flex">
          <CheckCircleIcon className="w-6 h-6 mr-2 mt-[2px] text-lime-300" />
          <p>Wykładziny i dywany</p>
        </li>
        <li className="inline-flex">
          <CheckCircleIcon className="w-6 h-6 mr-2 mt-[2px] text-lime-300" />

          <p>Sofy, kanapy, fotele</p>
        </li>
        <li className="inline-flex">
          <CheckCircleIcon className="w-6 h-6 mr-2 mt-[2px] text-lime-300" />

          <p>Tapicerka samochodowa</p>
        </li>
      </ul>
    </div>
  );
}
