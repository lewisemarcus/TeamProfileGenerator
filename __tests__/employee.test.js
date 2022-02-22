const Employee = require("../lib/employee.js")

test('Test if Employee class returns correct information for each function: ', () => {
    let empl = new Employee('Marcus Lewis', '11111', 'lewisemarcus@gmail.com')

    expect(empl.name).toEqual(expect.any(String))
    expect(empl.id).toEqual(expect.any(Number))
    expect(empl.email).toEqual(expect.any(String))
    
    expect(empl.getName()).toBe(empl.name)
    expect(empl.getId()).toBe(empl.id)
    expect(empl.getRole()).toBe('Employee')
    expect(empl.getEmail()).toBe(empl.email)
})