import * as z from 'zod';

export const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Imię i nazwisko musi mieć co najmniej 2 znaki.',
  }),
  email: z.string().email({
    message: 'Proszę podać prawidłowy adres email.',
  }),
  mobile: z.string().optional(),
  message: z.string().min(10, {
    message: 'Wiadomość musi mieć co najmniej 10 znaków.',
  }),
  formType: z.string().refine((value) => ['conversation-form', 'contact-form'].includes(value), {
    message: 'Typ formularza jest nieprawidłowy.',
  }),
});

export type FormData = z.infer<typeof formSchema>;
