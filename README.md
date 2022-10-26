# Team-Profile-Generator
[Video]()

## About Team-Profile-Generator
Generator that allows the user to create employee cards based on their roles, and outputing said information.


## Code Snippet
Below is a preview of some of the code that takes the user input, pushes it into an array, and adds it for the generated HTML.

```
.then((response) => {  
  let newArr = []
  const newEmployee = new Manager(response.name, response.id, response.email, response.office)  
  newArr.push(newEmployee.name)
  newArr.push(newEmployee.getRole())
  newArr.push(newEmployee.id)      
  newArr.push(newEmployee.email)
  newArr.push(newEmployee.officeNumber)
  teamMembers.push(newArr)
  htmlTemplate += newEmployee.getHtml()
```

## Technologies Used
HTML, CSS, Bootstrap, Fonts Awesome, JavaScript, Node

## Author Links

[LinkedIn](https://www.linkedin.com/in/senayg/)
[Github](https://github.com/senaygebrat)