const Engineer = require("../lib/engineer.js")
// jest.mock("../lib/engineer.js")

// beforeEach(() => {
//     Engineer.mockClear()
// })

describe("Engineer class", () => {
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
    test('If no information is passed through, expect error', () => {
        const cb = () => new Engineer()
        const error = new Error(
            "Expected parameters 'name, id, email, github' to be non empty strings."
        )
        expect(cb).toThrowError(error)
    })
    test('If incorrect format information is passed through, expect error', () => {
        const cb = () => new Engineer('Marcus', 'not a number', 'not an email', 'not a github')
        const error = new Error("Expected correct format of parameters")
        expect(cb).toThrowError(error)
    })
    test('spyon attemt', () => {
        const eng = new Engineer('Marcus Lewis', '11111', 'lewisemarcus@gmail.com','lewisemarcus')
        const mock = jest.spyOn(eng, 'getGithub').mockImplementation(() => {})
        eng.getGithub()
        expect(mock).toBeCalled()
        mock.mockRestore()
    })
})