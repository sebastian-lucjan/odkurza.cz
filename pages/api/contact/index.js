import sendMessageToOdkurzaCz from 'src/services/contactForm/sendMessageToOdkurzacz';
import validate from 'src/services/contactForm/validateMessageToOdkurzacz';

const sendForm = async (req, res) => {
  // console.log('req.method', req.method);

  switch (req.method) {
    case 'POST': {
      try {
        const payload = req.body;

        // console.log('POST');
        const { name, mobile, email, message, formType } = await validate({ ...payload });

        await sendMessageToOdkurzaCz(name, mobile, email, message, formType);

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

export default sendForm;
