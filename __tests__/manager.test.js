const Manager = require("../lib/manager.js")

test('Test if Manager class returns correct information for each function: ', () => {
    let man = new Manager('Marcus Lewis', '11111', 'lewisemarcus@gmail.com', '(800) 432-1000')

    expect(man.getName()).toBe('Marcus Lewis')
    expect(man.getId()).toBe('11111')
    expect(man.getRole()).toBe('Manager')
    expect(man.getEmail()).toBe('lewisemarcus@gmail.com')
    expect(man.getOfficeNumber()).toBe('(800) 432-1000')
})