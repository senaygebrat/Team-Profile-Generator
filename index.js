const fs = require('fs');
const inquirer = require('inquirer');
const employee = require('./lib/employee')
const engineer = require('./lib/engineer')
const intern = require('./lib/intern')
const manager = require('./lib/manager')
const teamMembers = []
console.log('Build your team!')

function init(){
inquirer.prompt([{
    type: 'list',
    name: 'typeEmployee',
    message: "What type of employee are you?",
    choices: ['manager', 'intern', 'engineer'],

    //switch statement, then response first
    // response.memberchoice
}])
}

function createManager(){
  inquirer.prompt([{
    type: 'input',
    name: 'name',
    message: "What is the manager's name?"
  }])
}

function createIntern(){
  inquirer.prompt([{
    type: 'input',
    name: 'name',
    message: "What is the intern's name?",

    type: 'input',
    name: 'name',
    message: "What is the intern's name?"
  }])
}

function createEngineer(){
  inquirer.prompt([{
    type: 'input',
    name: 'name',
    message: "What is the intern's id?"
  }])
  .then((response) => {
    const selectEngineer = new Engineer(response.name, response.id, response.email, response.github)
  })
}


init();
