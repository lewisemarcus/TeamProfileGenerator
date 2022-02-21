function htmlFormat() {
    return `<!doctype html>
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
    
        <!-- Optional JavaScript -->
        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
      </body>
    </html>`
}
//Formats each employee and appends to end of template literal. Template literal containing each 
function employeeFormat(employeeList) {
  for (let employee of employeeList) {

  }
    return `Hello`
}
//Formats each manager and appends to end of template literal. Template literal containing each 
function managerFormat(managerList) {
  for (let manager of managerList) {

  }
    return `Goodbye`
}
//Formats each engineer and appends to end of template literal. Template literal containing each 
function engineerFormat(engineerList) {
  for (let engineer of engineerList) {

  }
    return `Waddup`
}
//Formats each intern and appends to end of template literal. Template literal containing each 
function internFormat(internList) {
  for (let intern of internList) {

  }
    return `Late`
}
module.exports = {htmlFormat, employeeFormat, managerFormat, engineerFormat, internFormat}