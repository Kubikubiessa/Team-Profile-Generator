//requiring all files needed for the app.
const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const generateHTML = require("./src/generateHTML");
 
//calling function to run the app.
function init(){
 addEmployee();
};
// empty employee array that will contain the answers of all prompts sorted into roles. 
const employees = [];
// Inquirer prompts for all role cases when initializing a new employee array that will later be send to the html generator
function addEmployee() {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the employee?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the employees id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the employees email?",
      },
      {
        type: "list",
        name: "role",
        message: "What is the employees role?",
        choices: ["Manager", "Engineer", "Intern"],
      },
    ])
    //once the basic information is collected, the following if-statement will add role-specific information based on the entered roles.
    .then(({ name, id, email, role }) => {
      let roleSpecificInfo = "";
      if (role === "Engineer") {
        roleSpecificInfo = "github";
      } else if (role === "Intern") {
        roleSpecificInfo = "school";
      } else {
        roleSpecificInfo = "office";
      }
      inquirer
        .prompt([
          {
            type: "input",
            name: "roleSpecificInfo",
            message: `Enter employee's ${roleSpecificInfo} `,
          },
          {
            type: "list",
            name: "moreEmployees",
            message: "Would you like to add another employee to your team?",
            choices: ["yes", "no"],
          },
        ])
        //if statement to sort employee roles based on prompt input and subclass and to push them into the employee array.
        .then(({ roleSpecificInfo, moreEmployees }) => {
          let newEmployee;
          if (role === "Manager") {
            newEmployee = new Manager(name, id, email, role, roleSpecificInfo);
          } else if (role === "Engineer") {
            newEmployee = new Engineer(name, id, email, role, roleSpecificInfo);
          } else {
            newEmployee = new Intern(name, id, email, role, roleSpecificInfo);
          }
          employees.push(newEmployee);
        // if-statement for re-running addEmployee() to add another employee if desired otherwise end prompts and generate html.   
            if (moreEmployees === "yes") {
              addEmployee();
            } else {
              console.log("No more employees");
              console.log(employees);
              generatePage()
            }
           
        });
  
  });
  
};
// function to write html via fs. 
function generatePage() {
  fs.writeFileSync('./dist/index.html', generateHTML(employees));
  
  console.log('Page generated!')
};



// // Function call to initialize app and to generate html
init(); 

