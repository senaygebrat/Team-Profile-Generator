const Employee = require("./employee")

class Engineer extends Employee {
  constructor (name, id, email, github){
    super(name, id, email)
    this.github = github
  }
  getGithub(){
    return this.github;
  }
  getRole(){
    return "Engineer";
  }
  getHtml(){
    return `<div class="card" style="width: 18rem">
    <div class="card-body">
      <h4 class="card-title em.name">${this.getName()}</h4>
      <p class="card-text role">${this.getRole()}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Id:${this.getId()}</li>
      <li class="list-group-item">${this.getEmail()}:</li>
      <li class="list-group-item">${this.getGithub()}</li>
    </ul>
  </div>`
  }
}

module.exports = Engineer