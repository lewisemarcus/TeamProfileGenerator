const inquirer = require('inquirer')
const fs = require('fs')
const Employee = require("./lib/employee.js")
const Intern = require("./lib/intern.js")
const Engineer = require("./lib/engineer.js")
const Manager = require("./lib/manager.js")
let empl, man, inte, eng
const employeeList = []
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
            switch (answers.employeeRole) {
                case 'Employee':
                    empl = new Employee(answers.employeeName, answers.employeeId, answers.employeeEmail)
                    employeeList.push(empl)
                    break
                case 'Manager':
                    man = new Manager(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.managerNum)
                    employeeList.push(man)
                    break
                case 'Intern':
                    inte = new Intern(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.school)
                    employeeList.push(inte)
                    break
                case 'Engineer':
                    eng = new Engineer(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.github)
                    employeeList.push(eng)
                    break
            }
            if (answers.addMore == 'Yes') return init()
            else {
                const htmlFile = fs.createWriteStream(`index.html`, {
                    flags: 'a'
                })
            }
            console.log(employeeList)
            //writeToFile(htmlFile, answers)
        })
}

function writeToFile(fileName, data) {
    //Empty previous HTML file.
    fs.writeFile(fileName.path, data, function (error) {
        error ? console.error(error) : console.log('Previous HTML Page cleared, generating new...\n Success!')
    })
}

init()