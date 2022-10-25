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
    return `<div class="card custom-card" style="width: 18rem">
    <div class="card-body">
      <h4 class="card-title em.name">${this.getName()}</h4>
      <p class="card-text role"><i class="fa-solid fa-screwdriver"></i> ${this.getRole()}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"><i class="fa-solid fa-id-badge"></i> ${this.getId()}</li>
      <li class="list-group-item"><i class="fa-solid fa-envelope"></i><a href="mailto:${this.getEmail()}"> ${this.getEmail()}</a></li>
      <li class="list-group-item"><i class="fa-brands fa-github"></i><a href="https://github.com/${this.getGithub()}"> ${this.getGithub()}</a></li>
    </ul>
  </div>`
  }
}

module.exports = Engineer