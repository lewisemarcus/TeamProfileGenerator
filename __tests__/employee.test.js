const Employee = require("../lib/employee.js")

test('Test if Employee class returns correct information for each function: ', () => {
    let empl = new Employee('Marcus Lewis', '11111', 'lewisemarcus@gmail.com')

    expect(empl.getName()).toBe('Marcus Lewis')
    expect(empl.getId()).toBe('11111')
    expect(empl.getRole()).toBe('Employee')
    expect(empl.getEmail()).toBe('lewisemarcus@gmail.com')
})