import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { useState } from 'react';
import submitFunc from '@lib/services/contactForm/submitFunc';
import { FormTypeType } from 'app/types/FormTypes';

function useCustomForm(formType: FormTypeType) {
  const [errorServer, setErrorServer] = useState('');
  const [isMessageSend, setIsMessageSend] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch: getFormValues,
    formState: { errors },
  } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = () => {
    submitFunc(getFormValues, setErrorServer, formType, setIsSending, setIsMessageSend);
  };

  const handleBackToForm = () => {
    reset();
    setIsMessageSend(false);
  };

  return {
    errorServer,
    isMessageSend,
    setIsMessageSend,
    isSending,
    register,
    reset,
    getFormValues,
    errors,
    handleSubmit: handleSubmit(onSubmit),
    handleBackToForm,
  };
}

export default useCustomForm;
