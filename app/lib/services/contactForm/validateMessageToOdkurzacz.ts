import Joi from 'joi';
import { PayloadType } from 'app/types/types';

const schema = Joi.object({
  name: Joi.string().min(3).max(40).required(),
  mobile: Joi.string().min(3).max(40).allow(''),
  email: Joi.string().email().min(6).max(60).required(),
  message: Joi.string().min(3).max(2000).required(),
  formType: Joi.string().valid('conversation-form', 'contact-form', 'unset').required(),
});

const validate = async (payload: PayloadType) => {
  const validateFormContent = await schema.validateAsync(payload);

  return validateFormContent;
};

export default validate;
