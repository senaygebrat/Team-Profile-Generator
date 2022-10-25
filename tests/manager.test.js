const Employee = require("../lib/employee")
const Manager = require("../lib/manager")

test("Get office number from constructor", () => {
  const officeNum = 50
  const manager = new Manager("name", 500, "null@cyberspace.com", officeNum)
  expect(manager.officeNumber).toEqual(officeNum)
})

test("Get role from getRole()", () => {
  const role = "Manager"
  const manager = new Manager("name", 10, "sampleemail@email.com", 250);
  expect(manager.getRole()).toEqual(role)
})
