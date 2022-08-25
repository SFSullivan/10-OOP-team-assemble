const Employee = require('../library/Employee')

test('can make an employee object', () => {
    const employeeTest = new Employee()
    expect(typeof(employeeTest)).toBe('object')
});