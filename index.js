const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const teamMembers = []
const htmlTemplate = ''
console.log('Build your team!')


function generateHtml(){
  let data = htmlTemplate + `</body>
  </html>`
fs.writeFile('./index.html', data, function(err){
  if(err ? console.log(err) : console.log('Success'));
})
console.log(teamMembers)
}

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
    type: 'checkbox',
    name: 'typeEmployee',
    message: "Which type of team member would you like to add?",
    choices: ["Engineer", "Intern", "I don't want to add any more team members"]
  }
])
.then((response) => {
  if (response.typeEmployee == "Engineer"){
    createEngineer()
  }
  else if(response.typeEmployee == "Intern"){
    createIntern()
  }
  else if(response.typeEmployee == "I don't want to add any more team members"){
    generateHtml()
  }
  const newEmployee = new Manager(response.name, response.id, response.email, response.office)
  teamMembers.push(newEmployee)
})
}


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
    type: 'checkbox',
    name: 'typeEmployee',
    message: "Which type of team member would you like to add?",
    choices: ["Engineer", "Intern", "I don't want to add any more team members"]
  }
])
.then((response) => {
  if (response.typeEmployee == "Engineer"){
    createEngineer()
  }
  else if(response.typeEmployee == "Intern"){
    createIntern()
  }
  else if(response.typeEmployee == "I don't want to add any more team members"){
    generateHtml()
  }
  
})
}


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
    type: 'checkbox',
    name: 'typeEmployee',
    message: "Which type of team member would you like to add?",
    choices: ["Engineer", "Intern", "I don't want to add any more team members"]
  }
])
.then((response) => {
  if (response.typeEmployee == "Engineer"){
    createEngineer()
  }
  else if(response.typeEmployee == "Intern"){
    createIntern()
  }
  else if(response.typeEmployee == "I don't want to add any more team members"){
    generateHtml()
  }
})
}


createManager();