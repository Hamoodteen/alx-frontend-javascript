export default function handleResponseFromAPI(promise) {
  const pr = new Promise((resolve, reject) => {
    // eslint-disable-next-line no-unused-expressions
    promise ? resolve({
      status: 200,
      body: 'success',
    }) : reject(new Error(''));
  });
  pr.then(() => { console.log('Got a response from the API'); }, () => { console.log('Got a response from the API'); });
  return pr;
}
