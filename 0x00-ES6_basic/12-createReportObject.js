export default function createReportObject(employeesList) {
  const obj = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(obj) {
      return Object.keys(obj).length;
    },
  };
  return obj;
}
