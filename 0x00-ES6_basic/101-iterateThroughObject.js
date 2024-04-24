export default function iterateThroughObject(reportWithIterator) {
  const res = '';
  for (const iterator of reportWithIterator) {
    res.concat(`${iterator} | `);
  }
  res.slice(0, -3);
  return res;
}
