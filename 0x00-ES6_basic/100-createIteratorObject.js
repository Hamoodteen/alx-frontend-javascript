export default function createIteratorObject(report) {
  const it = [];
  for (const iterator of Object.keys(report.allEmployees)) {
    it.push(...iterator);
  }
  return it;
}
