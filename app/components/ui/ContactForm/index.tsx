'use client';

import MessageSend from '@ui/ContactForm/MessageSend';
import { useState } from 'react';
import { formSchema } from '@lib/services/form/schemas';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { sendMessage } from '@lib/services/form/email';

export default function ContactForm() {
  const [isMessageSend, setIsMessageSend] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      mobile: '',
      message: '',
      formType: 'contact-form',
    },
  });

  const { register } = form;

  const handleBackToForm = () => {
    setIsMessageSend(false);
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    try {
      const result = await sendMessage(values);
      console.log('onSubmit() - result', result);
      if (result.success) {
        form.reset();
        setIsMessageSend(true);
      } else {
        console.error('Failed to send email:', result.error);
      }
    } catch (error) {
      console.error('Failed to send email:', error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="mt-5 md:col-span-2 md:mt-0">
      {isMessageSend ? (
        <MessageSend handleBackToForm={handleBackToForm} />
      ) : (
        <form onSubmit={form.handleSubmit(onSubmit)} name="contact-form" aria-label="contact-form">
          <div className="overflow-hidden rounded-md shadow">
            <div className="bg-white px-4 py-5 sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                    Imię i nazwisko*
                  </label>
                  <input
                    type="text"
                    id="name"
                    autoComplete="name"
                    {...register('name')}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                    Numer telefonu
                  </label>
                  <input
                    type="text"
                    id="mobile"
                    autoComplete="tel"
                    {...register('mobile')}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                    Adres email*
                  </label>
                  <input
                    type="text"
                    id="email"
                    autoComplete="email"
                    {...register('email')}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                    Treść wiadomości*
                  </label>
                  <p className="w-1/2 text-xs text-gray-500">Napisz model sprzętu, ilość dni oraz termin wypożyczenia.</p>
                  <textarea
                    id="message"
                    rows={6}
                    {...register('message')}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                  />
                </div>
              </div>
              <p className="mt-6 text-xs text-gray-500">
                Zgodnie z naszą polityką prywatności Twoje dane <span className="font-semibold">nie zostaną</span> przekazane do żadnych podmiotów.
                Będą przetwarzane tylko w ramach naszej oferty.
              </p>
            </div>

            <div className="flex justify-end bg-gray-50 px-6 py-3 text-left">
              <button
                type="submit"
                className="text-md inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 py-3 font-semibold text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 laptop:w-[300px]"
              >
                {isSubmitting ? 'Wysyłanie...' : 'Wyślij wiadomość'}
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
