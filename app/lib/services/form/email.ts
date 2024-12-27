'use server';

import { z } from 'zod';
import { Resend } from 'resend';
import EmailTemplate from 'app/components/email-template';
import { formSchema } from 'app/lib/services/form/schemas';
import { FormTypeType } from 'app/types/FormTypes';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendMessage(formData: z.infer<typeof formSchema>) {
  try {
    const { name, email, mobile, message, formType } = formData;

    const { data, error } = await resend.emails.send({
      from: 'Formularz kontaktowy - <odkurzacz.wypozycz@gmail.com>',
      to: ['odkurzacz.wypozycz@gmail.com'],
      subject: 'Odkurza.cz - Formularz kontaktowy',
      text: `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\nMessage: ${message}`,
      react: EmailTemplate({ name, email, mobile, message, formType: formType as FormTypeType }),
    });

    if (error) {
      console.error('Failed to send email:', error);
      return { success: false, error: 'Failed to send email' };
    }

    console.log('Email sent successfully:', data);
    return { success: true, data };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: 'An unexpected error occurred' };
  }
}
