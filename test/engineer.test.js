const Engineer = require("../lib/engineer");
const testName = "Don Gato";
const testId = 99;
const testEmail = "gatoeng@bosscorp.com";
const testGH = "gato245"



// Verify that Engineer role is default
test('check Engineer role', () => {
    const testEngineer = new Engineer(testName, testId, testEmail, testGH);

    expect(testEngineer.getRole()).toEqual(expect.any(String));
    expect(testEngineer.getRole()).toBe("Engineer");
});

// verify name
test('check Engineer name', () => {
    const testEngineer = new Engineer(testName, testId, testEmail, testGH);
    expect(testEngineer.getName()).toEqual(expect.any(String));
    expect(testEngineer.getName()).toBe(testName);
});

// verify id
test('check Engineer id', () => {
    const testEngineer = new Engineer(testName, testId, testEmail, testGH);
    expect(testEngineer.getId()).toEqual(expect.any(Number));
    expect(testEngineer.getId()).toBe(testId);
});

// verify email is what we entered and type
test('check Engineer email', () => {
    const testEngineer = new Engineer(testName, testId, testEmail, testGH);
    expect(testEngineer.getEmail()).toEqual(expect.any(String));
    expect(testEngineer.getEmail()).toBe(testEmail);
});

// verify github
test('check that github is assigned to Engineer', () => {
    const testEngineer = new Engineer(testName, testId, testEmail, testGH);
    expect(testEngineer.getEmail()).toEqual(expect.any(String));
    expect(testEngineer.getGithub()).toBe(testGH);
});