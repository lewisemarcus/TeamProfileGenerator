const Employee = require('./Employee')
module.exports = class Engineer extends Employee {
    constructor(name, id, email, github) {

        if (id == undefined || name == undefined || email == undefined || github == undefined) {
            throw new Error("Expected parameters 'name, id, email, github' to be non empty strings.")
          }
        if(isNaN(id) || name.split(' ').length != 2 || /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email) == false || !github.match(/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i)) throw new Error("Expected correct format of parameters")

        super(name, id, email)
        this.github = github   
        this.getGithub = () => {return this.github}
        this.getRole = () => {return 'Engineer'}
    }
}