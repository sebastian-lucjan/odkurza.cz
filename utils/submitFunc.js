import axios from 'axios';

export default async function submitFunc(reset, getFormValues, setError, setMessage = {}) {
  try {
    setError('');

    const payload = getFormValues();

    setMessage({ ...payload });

    // console.log('payload ->', payload);

    const response = await axios.post('/api/contact', { ...payload }).catch((responseError) => setError(responseError.data.error));

    if (response.status === 200) {
      // reset form
      reset();
    }
  } catch (error) {
    // console.log('error', error);
    setError(error);
  }
}
