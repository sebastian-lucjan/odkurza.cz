import { FormErrorProps } from 'app/types/types';

export default function FormErrors({ errors, errorServ, conversation }: FormErrorProps) {
  return (
    <div>
      {Object.values(errors).map(({ message }: any) => {
        return (
          <p key={message} className={`bg-white px-4 py-2 text-sm text-red-600 sm:px-6 ${conversation ? 'bg-gray-50' : null} font-semibold`}>
            {message}
          </p>
        );
      })}
      {errorServ ? (
        <p key={errorServ} className="bg-white px-4 py-2 text-sm font-semibold text-red-600 sm:px-6">
          {errorServ}
        </p>
      ) : null}
    </div>
  );
}
