import axios from 'axios';

// nc(reset, watch, setError, setMessage, formType))}>
export default async function submitFunc(reset, getFormValues, setError, formType, setMessage = () => {}) {
  try {
    setError('');

    const payload = getFormValues();
    // console.log('sumbitFunc payload + formType --', { ...payload, formType });

    setMessage({ ...payload, formType });

    // console.log('payload ->', payload);

    const response = await axios.post('/api/contact', { ...payload, formType }).catch((responseError) => setError(responseError.data.error));

    if (response.status === 200) {
      // reset form
      reset();
    }
  } catch (error) {
    // console.log('error', error);
    setError(error);
  }
}
