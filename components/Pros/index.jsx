import { HandThumbUpIcon, SparklesIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';

export default function Pros() {
  return (
    // <div className="mx-auto max-w-7xl px-4 sm:px-6">

    // <div className="mx-auto py-12 flex justify-evenly items-end max-w-7xl px-4 sm:px-6 border-b-2 border-gray-100">
    <div className="mx-auto max-w-7xl flex flex-col items-center ">
      {/* <div className="w-60 h-60  rounded-xl border-8 border-amber-200 flex flex-col justify-center items-center"> */}
      <div className="w-60 h-60 bg-lime-300 rounded-full flex flex-col justify-center items-center">
        <CalendarDaysIcon className="w-20 h-20 mb-2" />
        <p className="text-center font-bold flex flex-col">Wynajmij</p>
        <div className="flex flex-row text-xl">
          <span className="font-extrabold text-2xl mr-2">7 dni</span> w tyg.
        </div>
      </div>

      {/* <div className="w-60 h-60  rounded-xl border-8 border-amber-200 flex flex-col justify-center items-center"> */}
      <div className="w-60 h-60 bg-lime-300 rounded-full flex flex-col justify-center items-center">
        <SparklesIcon className="w-20 h-20 mb-2" />

        <p className="text-center font-bold">
          <span className="font-extrabold text-2xl">100g</span> wysokiej jakości proszku w cenie
        </p>
      </div>

      {/* <div className="w-60 h-60  rounded-xl border-8 border-amber-200 flex flex-col justify-center items-center"> */}
      <div className="w-60 h-60 bg-lime-300 rounded-full flex flex-col justify-center items-center">
        <HandThumbUpIcon className="w-20 h-20 mb-2" />

        <p className="text-center font-bold">
          <span className="font-extrabold text-2xl">Kaucja 0 zł</span>
        </p>
      </div>
    </div>
  );
}
