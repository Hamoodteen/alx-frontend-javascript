export default function createReportObject(employeesList) {
  const obj = {
    allEmployees: employeesList,
    getNumberOfDepartments(obj) {
      return obj.lenght;
    },
  };
  return obj;
}
