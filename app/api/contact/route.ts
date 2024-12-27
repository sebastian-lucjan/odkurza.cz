import validate from '@lib/services/contactForm/validateMessageToOdkurzacz';
import { sendMessage } from '@lib/services/form/email';

export const maxDuration = 60;

export async function POST(req: Request) {
  try {
    const payload = await req.json();

    const payloadData = await validate({ ...payload });

    await sendMessage(payloadData);

    return new Response('Message sent', { status: 200 });
  } catch (e) {
    return new Response('Bad request', { status: 400 });
  }
}
