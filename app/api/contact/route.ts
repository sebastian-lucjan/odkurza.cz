import sendMessageToOdkurzacz from '@lib/services/contactForm/sendMessageToOdkurzacz';
import validate from '@lib/services/contactForm/validateMessageToOdkurzacz';

export async function POST(req: Request) {
  try {
    const payload = await req.json();

    const { name, mobile, email, message, formType } = await validate({ ...payload });

    await sendMessageToOdkurzacz(name, mobile, email, message, formType);

    return new Response('Message sent', { status: 200 });
  } catch (e) {
    return new Response('Bad request', { status: 400 });
  }
}
