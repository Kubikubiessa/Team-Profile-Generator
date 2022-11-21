const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const { generateHTML } = require("./lib/generateHTML");

function init(){
 addEmployee();
 generateHTML();
};

const employees = [];

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
        .then(({ roleSpecificInfo, moreEmployees }) => {
          let newEmployee;
          if (role === "Manager") {
            newEmployee = new Manager(name, id, email, roleSpecificInfo);
          } else if (role === "Engineer") {
            newEmployee = new Engineer(name, id, email, roleSpecificInfo);
          } else {
            newEmployee = new Intern(name, id, email, roleSpecificInfo);
          }
          employees.push(newEmployee);
          generateHTML(newEmployee).then(function () {
            if (moreEmployees === "yes") {
              addEmployee();
            } else {
              console.log("No more employees");
            }
          });
        });
        fs.writeFile("./dist/index.html", html, (err) =>
    err ? console.error(err) : console.log("html generated")
  );
  });
    
};
//addEmployee();


 

// // Function call to initialize app
init();
