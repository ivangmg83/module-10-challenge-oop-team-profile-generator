const Intern = require("../lib/intern");
const testName = "Newbie";
const testId = 253;
const testEmail = "novato@bosscorp.com";
const testSchool = "gonzaga"



// Verify that Intern role is default
test('check Intern role', () => {
    const testIntern = new Intern(testName, testId, testEmail, testSchool);

    expect(testIntern.getRole()).toEqual(expect.any(String));
    expect(testIntern.getRole()).toBe("Intern");
});

// verify name
test('check Intern name', () => {
    const testIntern = new Intern(testName, testId, testEmail, testSchool);
    expect(testIntern.getName()).toEqual(expect.any(String));
    expect(testIntern.getName()).toBe(testName);
});

// verify id
test('check Intern id', () => {
    const testIntern = new Intern(testName, testId, testEmail, testSchool);
    expect(testIntern.getId()).toEqual(expect.any(Number));
    expect(testIntern.getId()).toBe(testId);
});

// verify email is what we entered and type
test('check Intern email', () => {
    const testIntern = new Intern(testName, testId, testEmail, testSchool);
    expect(testIntern.getEmail()).toEqual(expect.any(String));
    expect(testIntern.getEmail()).toBe(testEmail);
});

// verify github
test('check that github is assigned to Intern', () => {
    const testIntern = new Intern(testName, testId, testEmail, testSchool);
    expect(testIntern.getEmail()).toEqual(expect.any(String));
    expect(testIntern.getSchool()).toBe(testSchool);
});