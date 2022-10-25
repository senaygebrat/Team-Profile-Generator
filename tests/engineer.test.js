const Employee = require("../lib/employee")
const Engineer = require("../lib/engineer")

test("Get github from constructor", () => {
  const github = "senaygebrat"
  const engineer = new Engineer("name", 50, "email@email.com", github)
  expect(engineer.github).toEqual(github)
})

test("Get role from getRole()", () => {
  const role = "Engineer"
  const engineer = new Engineer("name", 10, "sampleemail@email.com", 250);
  expect(engineer.getRole()).toEqual(role)
})