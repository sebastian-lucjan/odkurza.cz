import { CheckCircleIcon } from '@heroicons/react/20/solid';
import { homepageData } from 'data/homepageData';

export default function HeroProsList() {
  const {
    pros: { heading, list },
  } = homepageData.hero;

  return (
    <div className="my-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
      <h3>{heading}</h3>

      <ul className="flex flex-col">
        {list.map((listItem) => {
          return (
            <li key={listItem} className="inline-flex">
              <CheckCircleIcon className="mr-2 mt-[2px] h-6 w-6 text-lime-300" />
              <p>{listItem}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
