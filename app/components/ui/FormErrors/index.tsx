import { FormErrorProps, ValidationError } from 'app/types/FormTypes';

export default function FormErrors({ errors, errorServ, conversation }: FormErrorProps) {
  return (
    <div>
      {Object.values(errors as ValidationError).map(({ message }) => {
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
