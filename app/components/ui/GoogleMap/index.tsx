import clsx from 'clsx';
import { googleMapData } from 'data/googleMap';
import { GoogleMapProps } from 'app/types/UIComponentTypes';

export default function GoogleMap({ displayOn = 'all' }: GoogleMapProps) {
  const { heading, description, urlAddress } = googleMapData;

  const allClasses = clsx(
    'px-4 sm:px-0 mt-8',
    displayOn === 'all' && '',
    displayOn === 'tablet-and-up' && 'hidden tablet:block',
    displayOn === 'mobile' && 'block tablet:hidden',
  );

  return (
    <div className={allClasses}>
      <h3 className="text-lg font-medium leading-6 text-gray-900">{heading}</h3>
      <p className="mt-1 text-sm text-gray-600">{description}</p>
      <div className="mt-4 h-[320px] w-full shadow">
        <iframe className="h-full w-full" title="map" src={urlAddress} />
      </div>
    </div>
  );
}
