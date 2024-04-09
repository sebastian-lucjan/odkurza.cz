export default function HighlightedPrice({ smallPrice }: { smallPrice: number }) {
  return (
    <div className="flex justify-center bg-gray-50 px-5 py-5 sm:px-8 sm:py-8">
      <div>
        CENA: od <span className="text-6xl font-bold underline decoration-green-500 underline-offset-8">{smallPrice}zł</span> / za dobę
      </div>
    </div>
  );
}
