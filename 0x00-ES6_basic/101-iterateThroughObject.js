export default function iterateThroughObject(reportWithIterator) {
  let st = '';
  for (const iterator of reportWithIterator) {
    st += `${iterator} | `;
  }
  const res = st.slice(0, -3);
  return res;
}
