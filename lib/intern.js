const Employee = require('./Employee')
module.exports = class Intern extends Employee {
    constructor(name, id, email, school) {

        if (id == undefined || name == undefined || email == undefined || school == undefined) {
            throw new Error("Expected parameters 'name, id, email, school' to be non empty strings.")
          }
        if(isNaN(id) || name.split(' ').length != 2 || /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email) == false || (/\d/.test(school) == true)) throw new Error("Expected correct format of parameters")

        super(name, id, email)
        this.school = school  
        this.getSchool = () => {return this.school}
        this.getRole = () => {return 'Intern'}
    }
}
