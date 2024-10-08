'use client';

import Confetti from 'react-confetti';
import { InfoBarProps } from 'app/types/UIComponentTypes';
import useScreenSize from 'app/hooks/useScreenSize';

const InfoBar = ({ textContent, bargain }: InfoBarProps) => {
  const { width, height } = useScreenSize();

  if (width === 0 && height === 0) {
    return null; // or a loading indicator
  }

  return (
    <div className="relative inline-flex w-full items-center justify-center self-center overflow-hidden bg-indigo-900 pt-2 pb-3 text-white">
      <div className="mx-4 text-xl font-semibold">{`${bargain}`}</div>
      <div className="self-center">{textContent}</div>
      <div className="mx-4 text-xl font-semibold">{`${bargain}`}</div>

      <Confetti numberOfPieces={200} width={width} />
    </div>
  );
};

export default InfoBar;
