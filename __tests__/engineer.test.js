const Engineer = require("../lib/engineer.js")

test('Employee information', () => {
    let eng = new Engineer('Marcus Lewis', '11111', 'lewisemarcus@gmail.com','lewisemarcus')

    expect(eng.getName()).toBe('Marcus Lewis')
    expect(eng.getId()).toBe('11111')
    expect(eng.getRole()).toBe('Engineer')
    expect(eng.getEmail()).toBe('lewisemarcus@gmail.com')
    expect(eng.getGithub()).toBe('lewisemarcus')
})