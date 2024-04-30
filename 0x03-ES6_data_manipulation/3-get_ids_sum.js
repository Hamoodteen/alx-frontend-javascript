export default function getStudentIdsSum(list) {
  return list.reduce((acc, curr) => acc + curr.id, 0);
}
