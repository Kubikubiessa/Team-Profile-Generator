const inquirer = require("inquirer");
const fs = require("fs");
const { generateHTML } = require(".Lib/generateHTML");

const promptUser = [
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
    name: "role",
    message: "What is the employees role?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the employees email?",
  },
  {
    type: "input",
    name: "github",
    message: "What is the employees github?",
  },

  {
    type: "input",
    name: "school",
    message: "What is the employees school?",
  },
  {
    type: "list",
    name: "employeeMenu",
    message: "Would you like to add another employee to your team?",
    choices: ["yes", "no"],
  },
];
function init() {
  inquirer.prompt(promptUser).then((answers) => {
    console.log(answers);
    const html = generateHTML(answers);
    fs.writeFile("index.html", html, (err) =>
      err ? console.error(err) : console.log("html generated")
    );
  });
}

// Function call to initialize app
init();
