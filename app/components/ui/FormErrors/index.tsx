import { FormErrorProps } from 'app/types/types';

export default function FormErrors({ errors, errorServ, conversation }: FormErrorProps) {
  return (
    <div>
      {Object.values(errors).map(({ message }: any) => {
        return (
          <p key={message} className={`bg-white px-4 py-2 sm:px-6 text-sm text-red-600 ${conversation ? 'bg-gray-50' : null} font-semibold`}>
            {message}
          </p>
        );
      })}
      {errorServ ? (
        <p key={errorServ} className="bg-white px-4 py-2 sm:px-6 text-sm text-red-600 font-semibold">
          {errorServ}
        </p>
      ) : null}
    </div>
  );
}
