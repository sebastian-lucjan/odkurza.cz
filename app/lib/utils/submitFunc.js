import axios from 'axios';

export default async function submitFunc(reset, getFormValues, setError, formType, setMessage = () => {}) {
  try {
    setError('');

    const payload = getFormValues();

    setMessage({ ...payload, formType });

    const response = await axios.post('/api/contact', { ...payload, formType }).catch((responseError) => setError(responseError.data.error));

    if (response.status === 200) {
      reset();
    }
  } catch (error) {
    setError(error);
  }
}
