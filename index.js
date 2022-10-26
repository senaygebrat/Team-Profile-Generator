const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/employee')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const teamMembers = [];
let htmlTemplate = '';
console.log('Build your team!')

//function that generates the HTML, combined with the final few lines of html to finish the build
function generateHtml(){
  let data = htmlTemplate + `</body>
  </html>`
fs.writeFile('./dist/index.html', data, function(err){
  if(err ? console.log(err) : console.log('Success'));
})
}
//function to create manager, with few questions for end user to input answers
function createManager(){
  inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: "What is the team manager's name?"
  },
  {
    type: 'input',
    name: 'id',
    message: "What is the team manager's id number?"
  },
  {
    type: 'input',
    name: 'email',
    message: "What is the team manager's email?"
  },
  {
    type: 'input',
    name: 'office',
    message: "What is the team manager's office number?"
  },
  {
    type: 'list',
    name: 'typeEmployee',
    message: "Which type of team member would you like to add?",
    choices: ["Engineer", "Intern", "That's it, build my team!"]
  }
])
.then((response) => {  //based on prompt responses, will run the then method
  let newArr = []
  const newEmployee = new Manager(response.name, response.id, response.email, response.office)  
  newArr.push(newEmployee.name)
  newArr.push(newEmployee.getRole())
  newArr.push(newEmployee.id)      //lines 52-57 pushing the values into each new employee, to our new array in 57
  newArr.push(newEmployee.email)
  newArr.push(newEmployee.officeNumber)
  teamMembers.push(newArr)
  htmlTemplate += newEmployee.getHtml()

  //if statements below, based on user input will either create new employee or generate html
  if (response.typeEmployee == "Engineer"){
    createEngineer()
  }
  else if(response.typeEmployee == "Intern"){
    createIntern()
  }
  else if(response.typeEmployee == "That's it, build my team!"){
    generateHtml()
  }
})
}
//function to create intern, with few questions for end user to input answers
function createIntern(){
  inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: "What is the intern's name?",
  },
  {
    type: 'input',
    name: 'id',
    message: "What is the intern's id number?"
  },
  {
    type: 'input',
    name: 'email',
    message: "What is the intern's email?"
  },
  {
    type: 'input',
    name: 'school',
    message: "What is your intern's school?"
  },
  {
    type: 'list',
    name: 'typeEmployee',
    message: "Which type of team member would you like to add?",
    choices: ["Engineer", "Intern", "That's it, build my team!"]
  }
])
.then((response) => {
  let newArr = []
  const newEmployee = new Intern(response.name, response.id, response.email, response.school)
  newArr.push(newEmployee.name)
  newArr.push(newEmployee.getRole())
  newArr.push(newEmployee.id)
  newArr.push(newEmployee.email)
  newArr.push(newEmployee.getSchool())
  teamMembers.push(newArr)
  htmlTemplate += newEmployee.getHtml()

  //if statements below, based on user input will either create new employee or generate html
  if (response.typeEmployee == "Engineer"){
    createEngineer()
  }
  else if(response.typeEmployee == "Intern"){
    createIntern()
  }
  else if(response.typeEmployee == "That's it, build my team!"){
    generateHtml()
  }
})
}
//function to create engineer, with few questions for end user to input answers
function createEngineer(){
  inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: "What is the engineer's name?"
  },
  {
    type: 'input',
    name: 'id',
    message: "What is the engineer's id number?"
  },
  {
    type: 'input',
    name: 'email',
    message: "What is the engineer's email?"
  },
  {
    type: 'input',
    name: 'github',
    message: "What is the engineer's Github username?"
  },
  {
    type: 'list',
    name: 'typeEmployee',
    message: "Which type of team member would you like to add?",
    choices: ["Engineer", "Intern", "That's it, build my team!"]
  }
])
.then((response) => {
  let newArr = []
  const newEmployee = new Engineer(response.name, response.id, response.email, response.github)
  newArr.push(newEmployee.name)
  newArr.push(newEmployee.getRole())
  newArr.push(newEmployee.id)
  newArr.push(newEmployee.email)
  newArr.push(newEmployee.getGithub())
  teamMembers.push(newArr)
  htmlTemplate += newEmployee.getHtml()

  //if statements below, based on user input will either create new employee or generate html
  if (response.typeEmployee == "Engineer"){
    createEngineer()
  }
  else if(response.typeEmployee == "Intern"){
    createIntern()
  }
  else if(response.typeEmployee == "That's it, build my team!"){
    generateHtml()
  }
})
}

createManager();