const inquirer = require('inquirer')
const fs = require('fs')

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
        message: `Plaese enter the employee's ID: `,
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
        when: (answers) => { return answers.employeeRole == 'Manager' }
    },
    {
        type: 'input',
        name: 'github',
        message: `Please enter the engineer's GitHub account: `,
        when: (answers) => { return answers.employeeRole == 'Engineer' }
    },
    {
        type: 'input',
        name: 'school',
        message: `Please enter the intern's school: `,
        when: (answers) => { return answers.employeeRole == 'Intern' }
    },
    {
        type: 'confirm',
        name: 'addMore',
        message: `Would you like to add another employee? `,
    }
]

function init() {
    inquirer.prompt(prompts)
        .then(function (answers) {
            if (answers.addMore) return init()
            else {
                const htmlFile = fs.createWriteStream(`index.html`, {
                    flags: 'a'
                })
                writeToFile(htmlFile, answers)
            }

        })
}

function writeToFile(fileName, data) {
    //Empty previous HTML file.
    fs.writeFile(fileName.path, data, function (error) {
        error ? console.error(error) : console.log('Previous HTML Page cleared, generating new...\n Success!')
    })
}

init()