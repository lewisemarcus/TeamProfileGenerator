const inquirer = require('inquirer')
const fs = require('fs')
const Employee = require("./lib/employee.js")
const Intern = require("./lib/intern.js")
const Engineer = require("./lib/engineer.js")
const Manager = require("./lib/manager.js")
const generateHtml = require("./src/generateHtml.js")
let empl, man, inte, eng, htmlFile, count = 0
const employees = [], engineers = [], interns = [], managers = []
//Prompt questions.
const prompts = [
    {
        type: 'input',
        name: 'employeeName',
        message: `Enter the employee's name: `,
        validate: (value) => {
            if (typeof value == "string" && value.trim().length != 0) return true
            else return `Please enter a name for the employee before continuing: `
        }
    },
    {
        type: 'input',
        name: 'employeeId',
        message: `Please enter the employee's ID: `,
        validate: (value) => {
            if (typeof value == "string" && value.trim().length != 0) return true
            else return `Invalid. Please enter an ID for the employee before continuing: `
        }
    },
    {
        type: 'input',
        name: 'employeeEmail',
        message: `Please enter the employee's email address: `,
        validate: (value) => {
            //Regular expression to check if input is an email. 
            if (String(value).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) && value.trim().length != 0) return true
            else return `Invalid. Please enter an email address for the employee before continuing: `
        }
    },
    {
        type: 'list',
        name: 'employeeRole',
        message: `Please enter the employee's role: `,
        choices: ['Employee', 'Manager', 'Intern', 'Engineer']
    },
    {
        type: 'input',
        name: 'managerNum',
        message: `Please enter the manager's phone number: `,
        when: (answers) => { return answers.employeeRole == 'Manager' },
        validate: (value) => {
            //Regular expression to check if input is a phone number
            if (value.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)) return true
            else return `Please enter a valid phone number: `

        }
    },
    {
        type: 'input',
        name: 'github',
        message: `Please enter the engineer's GitHub account: `,
        when: (answers) => { return answers.employeeRole == 'Engineer' },
        validate: (value) => {
            if (value.trim().length != 0 && value.indexOf(' ') == -1) return true
            else return `Please enter a valid GitHub username for the employee: `
        }
    },
    {
        type: 'input',
        name: 'school',
        message: `Please enter the intern's school: `,
        when: (answers) => { return answers.employeeRole == 'Intern' },
        validate: (value) => {
            if (typeof value == "string" && value.trim().length != 0) return true
            else return `Please enter a valid School: `
        }
    },
    {
        type: 'list',
        name: 'addMore',
        message: `Would you like to add another employee? `,
        choices: ['Yes', 'No']
    }
]

function init() {
    inquirer.prompt(prompts)
        .then(function (answers) {
            if (count == 0) {
                //Instantiate new html file as write stream that is appendable.
                htmlFile = fs.createWriteStream(`./dist/teampage.html`, { flags: 'a' })
                //Clear previous html file.
                fs.writeFile(htmlFile.path, '', function (error) { if (error) console.log(error) })
                htmlFile.write(`${generateHtml.htmlFormat()}`)
            }
            //Switch method for each employee type. Employee is pushed to its respective list type and is styled in generateHtml.
            switch (answers.employeeRole) {
                case 'Employee':
                    empl = new Employee(answers.employeeName, answers.employeeId, answers.employeeEmail)
                    employees.push(empl)                   
                    break
                case 'Manager':
                    man = new Manager(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.managerNum)
                    managers.push(man)
                    break
                case 'Intern':
                    inte = new Intern(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.school)
                    interns.push(inte)
                    break
                case 'Engineer':
                    eng = new Engineer(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.github)
                    engineers.push(eng)
                    break
            }
            //Checks if user wants to continue adding more employees. Count changed to one to signify html file already created.
            if (answers.addMore == 'Yes') {
                count = 1
                return init()
            }
            else {
                htmlFile.write(`${generateHtml.managerFormat(managers)}`)
                htmlFile.write(`${generateHtml.engineerFormat(engineers)}`)
                htmlFile.write(`${generateHtml.employeeFormat(employees)}`)
                htmlFile.write(`${generateHtml.internFormat(interns)}`)
                htmlFile.write(`${generateHtml.endHtml()}`)
                return console.log(`HTML File generated!`)
            }
        })
}

init()