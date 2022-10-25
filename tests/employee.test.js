const Employee = require("../lib/employee")

test("Initiate employee instance", () => {
  const employee = new Employee();
  expect(typeof(employee)).toEqual("object")
})

test("Get name via constructor", () => {
  const name = "Senay"
  const employee = new Employee(name);
  expect(employee.name).toEqual(name)
})

test("Get id via constructor", () => {
  const value = 23
  const employee = new Employee("Senay", value);
  expect(employee.id).toEqual(value)
})

test("Get email via constructor", () => {
  const email = "senaygebrat@gmail.com"
  const employee = new Employee("Senay", 23, email);
  expect(employee.email).toEqual(email)
})


test("get name via getName()", () => {
  const value = "Senay"
  const employee = new Employee(value)
  expect(employee.getName()).toEqual(value)
})

test("get id via getId()", () => {
  const value = 23
  const employee = new Employee("Senay", value)
  expect(employee.getId()).toEqual(value)
})

test("get email via getEmail()", () => {
  const email = "senaygebrat@gmail.com"
  const employee = new Employee("Senay", 23, email)
  expect(employee.getEmail()).toEqual(email)
})
