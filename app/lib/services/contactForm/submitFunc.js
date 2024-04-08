import axios from 'axios';

export default async function submitFunc(getFormValues, setError, formType, setIsSending, setIsMessageSend) {
  try {
    setError('');
    setIsSending(true);

    const payload = getFormValues();

    const response = await axios.post('/api/contact', { ...payload, formType }).catch((responseError) => setError(responseError.data.error));

    if (response.status === 200) {
      setIsMessageSend(true);
    }
  } catch (error) {
    setError(error);
  } finally {
    setIsSending(false);
  }
}
