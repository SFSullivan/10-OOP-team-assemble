const Engineer = require('../library/Engineer')

test('creates a github', () => {
    const testGH = 'GitUserName';
    const employeeTest = new Engineer('John', 3, 'johndoe@gmail.com', testGH);
    expect(employeeTest.github).toBe(testGH);
});