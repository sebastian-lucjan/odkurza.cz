import axios from 'axios';

export default async function submitFunc(reset, getFormValues, setError, formType, city, setMessage = () => {}) {
  try {
    setError('');

    const payload = getFormValues();

    setMessage({ ...payload, formType, city });

    const response = await axios.post('/api/contact', { ...payload, formType, city }).catch((responseError) => setError(responseError.data.error));

    if (response.status === 200) {
      reset();
    }
  } catch (error) {
    setError(error);
  }
}
