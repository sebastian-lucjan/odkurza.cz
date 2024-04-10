'use client';

import ButtonLink from '@ui/Button';
import EquipmentImage from '@ui/Equipment/EquipmentImage';
import EquipmentTextContent from '@ui/Equipment/EquipmentTextContent';
import EquipmentPricesList from '@ui/Equipment/EquipmentPricesList';
import HighlightedPrice from '@ui/Equipment/HighlightedPrice';
import { EquipmentProps } from 'app/types/UIComponentTypes';

export default function Equipment({ pricesJSON }: EquipmentProps) {
  const prices = JSON.parse(pricesJSON);

  const {
    dayRenting: { smallPrice },
  } = prices;

  return (
    <div id="equipment" className="mx-auto flex max-w-7xl items-end justify-evenly border-b-2 border-gray-100 py-12 sm:px-6">
      <div className="w-[100% - 32px] mx-4 flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg tablet:w-[60%] laptop:w-[480px]">
        <EquipmentImage />

        <div className="flex flex-col items-center bg-gray-50 p-6">
          <div className="relative flex flex-col justify-center tablet:justify-start">
            <EquipmentTextContent />

            <EquipmentPricesList prices={prices} />
          </div>

          <HighlightedPrice smallPrice={smallPrice} />

          <ButtonLink href="/contact" asHref="/kontakt">
            <p>Wynajmij</p> <span className="ml-2 text-4xl">🫧</span>
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
