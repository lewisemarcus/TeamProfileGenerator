const Employee = require("../lib/employee.js")

test('Employee information data is correct', () => {
    let empl = new Employee('Marcus Lewis', '11111', 'lewisemarcus@gmail.com')

    expect(empl.getName()).toBe('Marcus Lewis')
    expect(empl.getId()).toBe('11111')
    expect(empl.getRole()).toBe('Employee')
    expect(empl.getEmail()).toBe('lewisemarcus@gmail.com')
})