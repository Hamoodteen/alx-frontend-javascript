export default function hasValuesFromArray(set, arr) {
  const arrs = new Set(arr);
  return set.has(arrs);
}
