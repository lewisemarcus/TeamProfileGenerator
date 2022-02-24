const Intern = require("../lib/intern.js")

describe("Intern class", () => {
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
    test('If no information is passed through, expect error', () => {
        const cb = () => new Intern()
        const error = new Error(
            "Expected parameters 'name, id, email, school' to be non empty strings."
        )
        expect(cb).toThrowError(error)
    })
    test('If incorrect format information is passed through, expect error', () => {
        const cb = () => new Intern('Marcus', 'not a number', 'not an email', '11')
        const error = new Error("Expected correct format of parameters")
        expect(cb).toThrowError(error)
    })
    test('spyon attemt', () => {
        const inte = new Intern('Marcus Lewis', '11111', 'lewisemarcus@gmail.com','UCI')
        const mock = jest.spyOn(inte, 'getSchool').mockImplementation(() => {})
        inte.getSchool()
        expect(mock).toBeCalled()
        mock.mockRestore()
    })
})