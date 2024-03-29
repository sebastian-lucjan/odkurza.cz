import { urlAddress } from 'data/googleMap';
import clsx from 'clsx';

export default function GoogleMap({ displayOn = 'all' }) {
  const allClasses = clsx(
    'px-4 sm:px-0 mt-8',
    displayOn === 'all' && '',
    displayOn === 'tablet-and-up' && 'hidden tablet:block',
    displayOn === 'mobile' && 'block tablet:hidden',
  );

  return (
    <div className={allClasses}>
      <h3 className="text-lg font-medium leading-6 text-gray-900">Lokalizacja</h3>
      <p className="mt-1 text-sm text-gray-600">Wygodna lokalizacja niedaleko centrum.</p>
      <div className="mt-4 shadow w-full h-[320px]">
        <iframe className="w-full h-full" title="map" src={urlAddress} />
      </div>
    </div>
  );
}
