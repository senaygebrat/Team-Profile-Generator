const Employee = require("../lib/employee")

test("Initiate employee instance", () => {
  const employee = new Employee();
  expect(typeof(employee)).toBe("object")
})

test("Get name via constructor", () => {
  const name = "Senay"
  const employee = new Employee(name);
  expect(employee.name).toBe(name)
})

test("Get id via constructor", () => {
  const value = 23
  const employee = new Employee("Senay", value);
  expect(employee.id).toBe(value)
})

test("Get email via constructor", () => {
  const email = "senaygebrat@gmail.com"
  const employee = new Employee("Senay", 23, email);
  expect(employee.email).toBe(email)
})


test("get name via getName()", () => {
  const value = "Senay"
  const employee = new Employee(value)
  expect(employee.getName()).toBe(value)
})

test("get id via getId()", () => {
  const value = 23
  const employee = new Employee("Senay", value)
  expect(employee.getId()).toBe(value)
})

test("get email via getEmail()", () => {
  const email = "senaygebrat@gmail.com"
  const employee = new Employee("Senay", 23, email)
  expect(employee.getEmail()).toBe(email)
})
