export const filterByDepartment = (employees, department) => {
    return employees.filter(
        employee => employee.department === department
    );
};
export const filterByStatus = (employees, status) => {
    return employees.filter(
        employee => employee.status === status
    );
}