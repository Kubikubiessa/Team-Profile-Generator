//function to populate the html elements with the content of the employee array containing the inquirer answers.
const generateHTML = (employees) => {
  //variable with html boiler-plate
  let html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-dark mb-5">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
        </nav>
        <div class="container">
            <div class="row">`;
  //for loop for accessing each item of the employee array and adding them to each card element one at a time depending on role (if-statement).
  for (let i = 0; i < employees.length; i++) {
    const employee = employees[i];
    //if-statement picks manager role from array and respective office number.
    if (employee.getRole() === "Manager") {
      const office = employee.getOffice();
      html += `
                    <div class="col-md-6">
                      <h2 class="text-center">Manager</h2>
                      <div class="row">
                      <div class="card" style="width: 18rem;">
                      <div class="card-header">
                        ${employee.name}
                      </div>
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">${employee.id}</li>
                        <li class="list-group-item">Email: <a href ="mailto:${employee.email}">${employee.email}</a></li>
                        <li class="list-group-item">${employee.office}</li>
                      </ul>
                    </div>
                      `;
      //if-statement (else-if) picks engineer role from array and respective github.
    } else if (employee.getRole() === "Engineer") {
      const github = employee.getGithub();
      html += `<div class="col-md-6">
                    <h2 class="text-center">Engineer</h2>
                    <div class="row">
                    <div class="card" style="width: 18rem;">
                    <div class="card-header">
                      ${employee.name}
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">${employee.id}</li>
                      <li class="list-group-item"> Email: <a href ="mailto:${employee.email}">${employee.email}</a></li>
                      <li class="list-group-item">>Github: <a href="https://github.com/${employee.github}">${employee.github}</a></li>
                    </ul>
                  </div>
                     `;
      //if-statement (else) picks leftover intern role from array and respective school.
    } else {
      const school = employee.getSchool();
      html += `
                  <div class="col-md-6">
                  <h2 class="text-center">Intern</h2>
                  <div class="row">
                  <div class="card" style="width: 18rem;">
                  <div class="card-header">
                    ${employee.name} 
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">${employee.id}</li>
                    <li class="list-group-item">Email: <a href ="mailto:${employee.email}">${employee.email}</a></li>
                    <li class="list-group-item">${employee.school}</li>
                  </ul>
                </div>
                </div>`;
    }
  }
  //adding the rest of the missing closing tags.
  html += `
            </div>
        </div>
    </body>`;

  return html;
};

module.exports = generateHTML;
