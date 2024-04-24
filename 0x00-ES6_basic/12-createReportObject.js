export default function createReportObject(employeesList) {
  const obj = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(...obj) {
      return obj.length;
    },
  };
  return obj;
}
