import { cn } from '@lib/utils';
import { FormFieldProps } from 'app/types/ConversationTypes';

export default function FormField({
  label,
  labelDescription = '',
  id,
  type,
  autoComplete,
  register,
  conditions,
  rows = 6,
  size = 'full',
}: FormFieldProps) {
  return (
    <div className={cn(size === 'half-on-desktop' && 'col-span-6 sm:col-span-3', size === 'full' && 'col-span-6')}>
      <label htmlFor={id} className={cn('block text-sm text-gray-700', conditions.required ? 'font-semibold' : 'font-normal')}>
        {label}
      </label>

      {labelDescription ? <p className="w-3/5 text-xs text-gray-500 tablet:w-1/2">{labelDescription}</p> : null}

      {type === 'textarea' ? (
        <textarea
          id={id}
          rows={rows}
          {...(register && register(id, conditions))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
        />
      ) : (
        <input
          type={type}
          id={id}
          autoComplete={autoComplete}
          {...(register && register(id, conditions))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
        />
      )}
    </div>
  );
}
