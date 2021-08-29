const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "MIZZOU";
  const e = new Intern("Adrienne", 1, "test@mail.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Adrienne", 1, "test@mail.com", "MIZZOU");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "MIZZOU";
  const e = new Intern("Adrienne", 1, "test@mail.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
