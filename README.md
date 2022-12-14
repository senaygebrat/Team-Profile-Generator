# Team-Profile-Generator
[Walkthrough Video](https://youtu.be/POsb7paPckI)

## About Team-Profile-Generator
Generator that allows the user to create employee cards based on their roles, and outputing said information.
![Page Preview](./assets/images/Team%20Member%20Sheet.gif)


## Code Snippet
Below is a preview of some of the code that takes the user input, pushes it into an array, and adds it for the generated HTML.

```JavaScript
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

Function to generate the HTML
```JavaScript
function generateHtml(){
  let data = htmlTemplate + `</body>
  </html>`
fs.writeFile('./dist/index.html', data, function(err){
  if(err ? console.log(err) : console.log('Success'));
})
}
```



## Technologies Used
HTML, CSS, Bootstrap, Fonts Awesome, JavaScript, Node

## Author Links

[LinkedIn](https://www.linkedin.com/in/senayg/)
[Github](https://github.com/senaygebrat)