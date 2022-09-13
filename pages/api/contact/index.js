import sendMessageToIoten from 'src/services/contactForm/sendMessageToOdkurzacz';
import axios from 'axios';
import validate from 'src/services/contactForm/validateMessageToOdkurzacz';

export default async (req, res) => {
  console.log('req.method', req.method);

  switch (req.method) {
    case 'POST': {
      try {
        const payload = req.body;
        const { token } = req.body;

        const hCaptchaResponse = await axios
          .post(
            'https://hcaptcha.com/siteverify',
            `response=${token}&secret=${process.env.HCAPTCHA_SECRET_KEY}`,
            // {
            // secret: process.env.HCAPTCHA_SECRET_KEY,
            // response: token,
            // }
          )
          // .then((response) => response)
          .catch((error) => console.log('error form.js ->', error));

        console.log('hCaptchaResponse ===>', hCaptchaResponse);

        const isHCaptchaValid = hCaptchaResponse.data.success;

        const { name, company, mobile, email, message, policy, nda } = await validate({ ...payload, isHCaptchaValid });

        await sendMessageToIoten(name, company, mobile, email, message, policy, nda);

        res.status(200).json({
          status: 'payload_sent',
        });
      } catch (e) {
        console.log(e.message);
      }
      break;
    }
    default: {
      console.log("something's wrong");
      res.status(400).json({
        status: 'Bad request',
      });
    }
  }
};

// todo: add validation and hCaptcha
