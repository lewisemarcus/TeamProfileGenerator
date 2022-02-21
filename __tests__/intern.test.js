const Intern = require("../lib/intern.js")

test('Test if Intern class returns correct information for each function: ', () => {
    let inte = new Intern('Marcus Lewis', '11111', 'lewisemarcus@gmail.com','UCI')

    expect(inte.getName()).toBe('Marcus Lewis')
    expect(inte.getId()).toBe('11111')
    expect(inte.getRole()).toBe('Intern')
    expect(inte.getEmail()).toBe('lewisemarcus@gmail.com')
    expect(inte.getSchool()).toBe('UCI')
})