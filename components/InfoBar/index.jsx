import dynamic from 'next/dynamic';

// dynamic import of react-confetti to prevent SSR wrong behaviour
const Confetti = dynamic(() => import('react-confetti'), {
  ssr: false,
});

const InfoBar = ({ textContent, bargain }) => {
  return (
    <div className="relative flex items-center w-full pt-2 pb-3 bg-indigo-900 inline-flex justify-center self-center text-white overflow-hidden">
      <div className="mx-4 font-semibold text-xl">{`${bargain}`}</div>
      <div className="self-center">{textContent}</div>
      <div className="mx-4 font-semibold text-xl">{`${bargain}`}</div>

      <Confetti numberOfPieces={200} className="w-full" />
    </div>
  );
};

export default InfoBar;
