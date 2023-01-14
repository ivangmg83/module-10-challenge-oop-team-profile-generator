const Manager = require("../lib/manager");
const testName = "bigboss";
const testId = 99;
const testEmail = "bossman@bosscorp.com";
const testOfficeNo = 25;



// Verify that Manager role is default
test('check Manager role', () => {
    const testManager = new Manager(testName, testId, testEmail, testOfficeNo);

    expect(testManager.getRole()).toEqual(expect.any(String));
    expect(testManager.getRole()).toBe("Manager");
});

// verify name
test('check Manager name', () => {
    const testManager = new Manager(testName, testId, testEmail);
    expect(testManager.getName()).toEqual(expect.any(String));
    expect(testManager.getName()).toBe(testName);
});

// verify id
test('check Manager id', () => {
    const testManager = new Manager(testName, testId, testEmail);
    expect(testManager.getId()).toEqual(expect.any(Number));
    expect(testManager.getId()).toBe(testId);
});

// verify email is what we entered and type
test('check Manager email', () => {
    const testManager = new Manager(testName, testId, testEmail);
    expect(testManager.getEmail()).toEqual(expect.any(String));
    expect(testManager.getEmail()).toBe(testEmail);
});

// verify no office attribute
test('check that officeNumber *IS* assigned to Manager', () => {
    const testManager = new Manager(testName, testId, testEmail, testOfficeNo);
    expect(testManager.officeNumber).toBe(testOfficeNo);
});