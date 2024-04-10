import { ButtonStyleProps } from 'app/types/types';

export default function ButtonStyle({ children }: ButtonStyleProps) {
  return (
    <div className="my-4 flex min-h-[50px] items-center justify-center whitespace-nowrap rounded-md bg-gradient-to-b from-lime-200 to-lime-400 py-3 px-7 text-lg font-semibold text-black shadow-sm transition-colors hover:bg-lime-400 hover:from-green-400 hover:to-green-600">
      {children}
    </div>
  );
}
