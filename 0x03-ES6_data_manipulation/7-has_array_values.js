export default function hasValuesFromArray(set, arr) {
  return Set(arr).isSubsetOf(set);
}
