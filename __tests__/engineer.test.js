const Engineer = require("../lib/engineer.js")
// jest.mock("../lib/engineer.js")

// beforeEach(() => {
//     Engineer.mockClear()
// })

test('Test if Engineer class returns correct information for each function: ', () => {
    let eng = new Engineer('Marcus Lewis', '11111', 'lewisemarcus@gmail.com','lewisemarcus')

    expect(eng.name).toEqual(expect.any(String))
    expect(eng.id).toEqual(expect.any(Number))
    expect(eng.email).toEqual(expect.any(String))
    expect(eng.github).toEqual(expect.any(String))

    expect(eng.getName()).toBe(eng.name)
    expect(eng.getId()).toBe(eng.id)
    expect(eng.getRole()).toBe('Engineer')
    expect(eng.getEmail()).toBe(eng.email)
    expect(eng.getGithub()).toBe(eng.github)
})