const Employee = require("./employee")

class Intern extends Employee {
  constructor (name, id, email, school){
    super(name, id, email)
    this.school = school
  }
  getSchool(){
    return this.school;
  }
  getRole(){
    return "Intern";
  }
  getHtml(){
    return `<div class="card custom-card" style="width: 18rem">
    <div class="card-body">
      <h4 class="card-title em.name">${this.getName()}</h4>
      <p class="card-text role">${this.getRole()}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"><i class="fa-solid fa-id-badge"></i>  ${this.getId()}</li>
      <li class="list-group-item"><i class="fa-solid fa-envelope"></i><a href="mailto:${this.getEmail()}"> ${this.getEmail()}</a></li>
      <li class="list-group-item"><i class="fa-solid fa-school"></i> ${this.getSchool()}</li>
    </ul>
  </div>`
  }
}

module.exports = Intern