'use client';

import { InfoBarProps } from 'app/types/types';
import Confetti from 'react-confetti';
import useScreenSize from 'app/hooks/useScreenSize';

const InfoBar = ({ textContent, bargain }: InfoBarProps) => {
  const { width } = useScreenSize();

  return (
    <div className="relative items-center w-full pt-2 pb-3 bg-indigo-900 inline-flex justify-center self-center text-white overflow-hidden">
      <div className="mx-4 font-semibold text-xl">{`${bargain}`}</div>
      <div className="self-center">{textContent}</div>
      <div className="mx-4 font-semibold text-xl">{`${bargain}`}</div>

      <Confetti numberOfPieces={200} width={width} />
    </div>
  );
};

export default InfoBar;
