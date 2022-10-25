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
    return `<div class="card" style="width: 18rem">
    <div class="card-body">
      <h4 class="card-title em.name">${this.getName()}</h4>
      <p class="card-text role">${this.getRole()}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Id:${this.getId()}</li>
      <li class="list-group-item">${this.getEmail()}:</li>
      <li class="list-group-item">${this.getSchool()}</li>
    </ul>
  </div>`
  }
}

module.exports = Intern