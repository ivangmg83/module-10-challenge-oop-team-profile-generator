const Employee = require("../lib/employee");
const testName = "pablo";
const testId = 43;
const testEmail = "test@test.com";



// Verify that Employee role is default
test('check Employee role', () => {
    const testEmployee = new Employee(testName, testId, testEmail);

    expect(testEmployee.getRole()).toEqual(expect.any(String));
    expect(testEmployee.getRole()).toBe("Employee");
});

// verify name
test('check Employee name', () => {
    const testEmployee = new Employee(testName, testId, testEmail);
    expect(testEmployee.getName()).toEqual(expect.any(String));
    expect(testEmployee.getName()).toBe(testName);
});

// verify id
test('check Employee id', () => {
    const testEmployee = new Employee(testName, testId, testEmail);
    expect(testEmployee.getId()).toEqual(expect.any(Number));
    expect(testEmployee.getId()).toBe(testId);
});

// verify email is what we entered and type
test('check Employee email', () => {
    const testEmployee = new Employee(testName, testId, testEmail);
    expect(testEmployee.getEmail()).toEqual(expect.any(String));
    expect(testEmployee.getEmail()).toBe(testEmail);
});

// verify no office attribute
test('check no officeNumber assigned to employee', () => {
    const testEmployee = new Employee(testName, testId, testEmail, 523);
    expect(testEmployee.officeNumber).toBe(undefined);
});