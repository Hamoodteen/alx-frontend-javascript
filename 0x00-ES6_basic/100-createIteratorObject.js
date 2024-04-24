export default function createIteratorObject(report) {
  const it = [];
  for (const iterator of report.allEmployees) {
    it.push(...iterator);
  }
  return it;
}
