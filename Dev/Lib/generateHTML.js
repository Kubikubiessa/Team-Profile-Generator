 
function generateHTML(newEmployee) {
     
    const name = newEmployee.getName();
    const id = newEmployee.getId();
    const email = newEmployee.getEmail();
  
    const html = `<!DOCTYPE html>
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
    if (role === "Manager") {
      const office = getOffice();
      html += `
              <div class="col-md-6">
                <h2 class="text-center">Manager</h2>
                <div class="row">
                <div class="card" style="width: 18rem;">
                <div class="card-header">
                  ${name}
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">${id}</li>
                  <li class="list-group-item">${email}</li>
                  <li class="list-group-item">${office}</li>
                </ul>
              </div>
                `;
    } else if (role === "Engineer") {
      const github = getGithub;
      html += `<div class="col-md-6">
              <h2 class="text-center">Engineer</h2>
              <div class="row">
              <div class="card" style="width: 18rem;">
              <div class="card-header">
                ${name}
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">${id}</li>
                <li class="list-group-item">${email}</li>
                <li class="list-group-item">${github}</li>
              </ul>
            </div>
               `;
    } else {
      const school = getSchool();
      html += `
            <div class="col-md-6">
            <h2 class="text-center">Intern</h2>
            <div class="row">
            <div class="card" style="width: 18rem;">
            <div class="card-header">
              ${name} 
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${id}</li>
              <li class="list-group-item">${email}</li>
              <li class="list-group-item">${school}</li>
            </ul>
          </div>
          </ div>
          </div>`;
  
    }
  }
  
module.exports = { generateHTML };