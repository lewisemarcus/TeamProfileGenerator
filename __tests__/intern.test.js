const Intern = require("../lib/intern.js")

test('Test if Intern class returns correct information for each function: ', () => {
    let inte = new Intern('Marcus Lewis', '11111', 'lewisemarcus@gmail.com','UCI')

    expect(inte.name).toEqual(expect.any(String))
    expect(inte.id).toEqual(expect.any(Number))
    expect(inte.email).toEqual(expect.any(String))
    expect(inte.school).toEqual(expect.any(String))

    expect(inte.getName()).toBe(inte.name)
    expect(inte.getId()).toBe(inte.id)
    expect(inte.getRole()).toBe('Intern')
    expect(inte.getEmail()).toBe(inte.email)
    expect(inte.getSchool()).toBe(inte.school)
})