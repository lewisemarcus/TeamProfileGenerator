const Engineer = require("../lib/engineer.js")
// jest.mock("../lib/engineer.js")

// beforeEach(() => {
//     Engineer.mockClear()
// })

test('Test if Engineer class returns correct information for each function: ', () => {
    let eng = new Engineer('Marcus Lewis', '11111', 'lewisemarcus@gmail.com','lewisemarcus')

    expect(eng.getName()).toBe('Marcus Lewis')
    expect(eng.getId()).toBe('11111')
    expect(eng.getRole()).toBe('Engineer')
    expect(eng.getEmail()).toBe('lewisemarcus@gmail.com')
    expect(eng.getGithub()).toBe('lewisemarcus')
})