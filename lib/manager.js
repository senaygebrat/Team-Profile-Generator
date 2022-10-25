const Employee = require("./employee")

class Manager extends Employee {
  constructor (name, id, email, officeNumber){
    super(name, id, email)
    this.officeNumber = officeNumber;
  }
  getRole(){
    return "Manager";
  }

  getHtml(){
    return `<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Team Member Sheet</title>
    <meta name="description" content="description" />
    <meta name="author" content="author" />
    <meta name="keywords" content="keywords" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
      integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="./dist/style.css" type="text/css" />
    <style type="text/css">
      .body {
        width: auto;
      }
    </style>
  </head>
  <body>
    <div class="jumbotron top-sec jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Team Member Sheet</h1>
        <p class="lead">Look below for a list of our awesome team members!</p>
      </div>
    </div>
    <header>
      <h2>My Team</h2>
    </header>
    <div class="flow">
      <div class="card" style="width: 18rem">
        <div class="card-body">
          <h4 class="card-title em.name">${this.getName()}</h4>
          <p class="card-text role">Manager</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${this.getId()}</li>
          <li class="list-group-item">${this.getEmail()}</li>
          <li class="list-group-item">${this.officeNumber}</li>
        </ul>
      </div>`
}
}

module.exports = Manager