export default function handleResponseFromAPI(promise) {
  const pr = new Promise((resolve, reject) => {
    // eslint-disable-next-line no-unused-expressions
    promise ? resolve({
      status: 200,
      body: 'Success',
    }) : reject(new Error(''));
  });
  pr.then(() => { 'Got a response from the API'; });
  return pr;
}
