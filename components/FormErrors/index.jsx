import { v4 as uuid } from 'uuid';

export default function FormErrors({ errors, errorServ, conversation }) {
  console.log(Object.values(errors));

  return (
    <div>
      {Object.values(errors).map((error) => {
        return (
          <p key={uuid()} className={`bg-white px-4 py-2 sm:px-6 text-sm text-red-600 ${conversation ? 'bg-gray-50' : null} font-semibol`}>
            {error.message}
          </p>
        );
      })}
      {errorServ ? (
        <p key={uuid()} className="bg-white px-4 py-2 sm:px-6 text-sm text-red-600 font-semibold">
          {errorServ.message}
        </p>
      ) : null}
    </div>
  );
}
