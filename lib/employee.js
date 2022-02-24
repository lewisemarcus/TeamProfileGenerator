module.exports = class Employee {
    constructor (name, id, email) {
        
        if (id == undefined || name == undefined || email == undefined) {
            throw new Error("Expected parameters 'name, id, email' to be non empty strings.")
          }
        if(isNaN(id) || name.split(' ').length != 2 || /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email) == false) throw new Error("Expected correct format of parameters")
        
        this.name = name
        this.id = parseInt(id)
        this.email = email

        this.getName = () => {return this.name}
        this.getId = () => {return this.id}
        this.getEmail = () => {return this.email}
        this.getRole = () => {return 'Employee'}
    }
}