export default function iterateThroughObject(reportWithIterator) {
  let res = '';
  for (const iterator of reportWithIterator) {
    res += `${iterator} | `;
  }
  res.slice(0, -3);
  return res;
}
