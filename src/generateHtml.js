let file = ``, engineerCards = ``, internCards = ``, managerCards = ``, employeeCards = ``

function htmlFormat() {
  file +=`<!doctype html>
  <html lang="en">
    <head>
      <!-- Required meta tags -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  
      <!-- Bootstrap CSS -->
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  
      <title>Team Profile Generator</title>
    </head>
    <body>
    <header>
      <div class="position-relative">
        <div class="p-3 mb-4 text-white bg-dark rounded-3">
          <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold text-center">Company Team Profiles</h1>
          </div>
        </div>
      </div>
    </header>
    <main>
    <div class="container">
      <div class="row row-cols-2">

    `
  return file
}
//Formats each employee and appends to end of template literal. employeeCards contains all employee cards.
function employeeFormat(employeeList) {
  for (let employee of employeeList) {
    employeeCards += `<div class="card" style="width: 16rem; margin-left: 10px; margin-bottom: 10px">
    <div class="card-body">
      <h4 class="card-title">${employee.getName()}</h4>
      <h5 class="card-text">${employee.getRole()}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item" style="padding-top: 20px; padding-bottom: 20px">Email: <a href="mailto: ${employee.employeeEmail}">${employee.getEmail()}</a>
      </li>
      <li class="list-group-item" style="padding-top: 20px; padding-bottom: 20px">ID: ${employee.getId()}</li>
    </ul>
  </div>
  
  `
  }
  return employeeCards
}
//Formats each manager and appends to end of template literal. managerCards contains all manager cards. 
function managerFormat(managerList) {
  for (let manager of managerList) {
    managerCards += `<div class="card" style="width: 16rem; margin-left: 10px; margin-bottom: 10px">
    <div class="card-body">
      <h4 class="card-title">${manager.getName()}</h4>
      <h5 class="card-text">${manager.getRole()}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Email: <a href="mailto: ${manager.getEmail()}">${manager.getEmail()}</a>
      </li>
      <li class="list-group-item">ID: ${manager.getId()}</li>
      <li class="list-group-item">Phone Number: <a href="tel:${manager.getOfficeNumber()}">${manager.getOfficeNumber()}</a></li>
    </ul>
  </div>

`
  }
  return managerCards
}
//Formats each engineer and appends to end of template literal. engineerCards contains all engineer cards.
function engineerFormat(engineerList) {
  for (let engineer of engineerList) {
    engineerCards += `<div class="card" style="width: 16rem; margin-left: 10px; margin-bottom: 10px;">
    <div class="card-body">
      <h4 class="card-title">${engineer.getName()}</h4>
      <h5 class="card-text">${engineer.getRole()}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Email: <a href="mailto: ${engineer.getEmail()}">${engineer.getEmail()}</a>
      </li>
      <li class="list-group-item">ID: ${engineer.getId()}</li>
      <li class="list-group-item"><a href="https://github.com/${engineer.getGithub()} target="_blank"" class="card-link">GitHub
        Link</a></li>
    </ul>
  </div>
  
  `
  }
  return engineerCards
}
//Formats each intern and appends to end of template literal. internCards contains all intern cards.
function internFormat(internList) {
  for (let intern of internList) {
    internCards += `<div class="card" style="width: 16rem; margin-left: 10px; margin-bottom: 10px">
    <div class="card-body">
      <h4 class="card-title">${intern.getName()}</h4>
      <h5 class="card-text">${intern.getRole()}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Email: <a href="mailto: ${intern.getEmail()}">${intern.getEmail()}</a>
      </li>
      <li class="list-group-item">ID: ${intern.getId()}</li>
      <li class="list-group-item">School: ${intern.getSchool()}</li>
    </ul>
  </div>
  
  `
  }
  return internCards
}

function endHtml() {
  endLines = `    </div>
    </div>
    </main>
  
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
  </html>`
  return endLines
}

module.exports = { htmlFormat, employeeFormat, managerFormat, engineerFormat, internFormat, endHtml }