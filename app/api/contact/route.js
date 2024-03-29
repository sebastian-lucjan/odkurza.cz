import sendMessageToOdkurzacz from '@lib/services/contactForm/sendMessageToOdkurzacz';
import validate from '@lib/services/contactForm/validateMessageToOdkurzacz';

export async function POST(req, res) {
  try {
    const payload = req.body;

    const { name, mobile, email, message, formType } = await validate({ ...payload });

    await sendMessageToOdkurzacz(name, mobile, email, message, formType);

    res.status(200).json({
      status: 'payload_sent',
    });
  } catch (e) {
    res.status(400).json({
      status: 'Bad request',
    });
  }
}
