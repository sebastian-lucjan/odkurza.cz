import Link from 'next/link';

export default function HeroButton() {
  return (
    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
      <div className="rounded-md">
        <Link
          href="/contact"
          as="/kontakt"
          className="flex w-full items-center justify-center rounded-md bg-gradient-to-b from-lime-200 to-lime-400 color-black px-8 py-3 text-base  text-black font-black hover:from-green-400 hover:to-green-600 md:py-4 md:px-10 md:text-lg shadow-lg"
        >
          Wynajmij
        </Link>
      </div>
    </div>
  );
}
