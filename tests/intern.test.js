const Employee = require("../lib/employee")
const Intern = require("../lib/intern")

test("Get school from constructor", () => {
  const school = "Morehouse"
  const intern = new Intern("name", 500, "null@cyberspace.com", school)
  expect(intern.school).toEqual(school)
})

test("Get school from getSchool()", () => {
  const school = "Morehouse"
  const intern = new Intern("name", 10, "sampleemail@email.com", school);
  expect(intern.getSchool()).toEqual(school)
})

test("get role from getRole()", () => {
  const role = "Intern";
  const intern = new Intern("name", 500, "email@email.com", "Morehouse");
  expect(intern.getRole()).toEqual(role)
})