const Employee = require('./Employee')
module.exports = class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        
        if (id == undefined || name == undefined || email == undefined || officeNumber == undefined) {
            throw new Error("Expected parameters 'name, id, email, officeNumber' to be non empty strings.")
          }
        if(isNaN(id) || name.split(' ').length != 2 || /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email) == false) throw new Error("Expected correct format of parameters")
        if(!officeNumber.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)) throw new Error("Expected phone number format, entered format incorrect.")  

        super(name, id, email)
        this.officeNumber = officeNumber
        this.getOfficeNumber = () => {{return this.officeNumber}}
        this.getRole = () => {return 'Manager'}
    }
}