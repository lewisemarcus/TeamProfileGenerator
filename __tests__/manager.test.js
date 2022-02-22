const Manager = require("../lib/manager.js")

test('Test if Manager class returns correct information for each function: ', () => {
    let man = new Manager('Marcus Lewis', '11111', 'lewisemarcus@gmail.com', '(800) 432-1000')

    expect(man.name).toEqual(expect.any(String))
    expect(man.id).toEqual(expect.any(Number))
    expect(man.email).toEqual(expect.any(String))
    expect(man.officeNumber).toEqual(expect.any(String))

    expect(man.getName()).toBe(man.name)
    expect(man.getId()).toBe(man.id)
    expect(man.getRole()).toBe('Manager')
    expect(man.getEmail()).toBe(man.email)
    expect(man.getOfficeNumber()).toBe(man.officeNumber)
})